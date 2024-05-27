import Header from '../Header/Header.tsx'
import Footer from '../Footer/Footer.tsx'
import { Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { useEffect } from 'react'
import { EventSourcePolyfill, NativeEventSource } from 'event-source-polyfill'
import { useQueryClient } from '@tanstack/react-query'
import { useAuthStore } from '../../store/store.ts'
import { QUERY_KEYS } from '../../constants/queryKeys.ts'

export default function DefaultLayout() {
  const EventSource = EventSourcePolyfill || NativeEventSource
  const accessToken = localStorage.getItem('Access-Token')
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn)
  const queryClient = useQueryClient()

  const URL = `${import.meta.env.VITE_HOOPS_API_URL}/api/subscribe`

  useEffect(() => {
    let eventSource: EventSourcePolyfill

    const setupSSE = async () => {
      try {
        const lastEventID = localStorage.getItem('sseLastEventID') || null

        eventSource = new EventSource(URL, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            LastEventID: JSON.stringify({ lastEventID }),
          },
          withCredentials: true,
          heartbeatTimeout: 120000000,
        })

        eventSource.onmessage = async (event) => {
          const res = await event.data
          console.log(res)

          if (event.lastEventId) {
            localStorage.setItem('sseLastEventID', event.lastEventId)
          }

          queryClient.invalidateQueries({
            queryKey: [QUERY_KEYS.GET_NOTIFICATION],
          })
        }

        eventSource.onerror = async () => {}
      } catch (error) {
        console.log(error)
      }
    }

    if (isLoggedIn) {
      console.log('SSE작동 시작!')
      setupSSE()
    }

    return () => {
      if (eventSource) {
        eventSource.close()
        console.log('SSE작동 끝남!')
      }
    }
  }, [isLoggedIn])

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
      {/* 토스트 컨테이너 */}
      <ToastContainer
        position='top-right'
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        limit={1}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  )
}
