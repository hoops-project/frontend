import Header from '../Header/Header.tsx'
import Footer from '../Footer/Footer.tsx'
import { Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { useEffect } from 'react'
import { EventSourcePolyfill, NativeEventSource } from 'event-source-polyfill'
import { END_POINT } from '../../constants/endPoint.ts'
import { useQueryClient } from '@tanstack/react-query'
import { useAuthStore } from '../../store/store.ts'
import { QUERY_KEYS } from '../../constants/queryKeys.ts'

export default function DefaultLayout() {
  const EventSource = EventSourcePolyfill || NativeEventSource
  const accessToken = localStorage.getItem('Access-Token')
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn)
  const queryClient = useQueryClient()

  console.log(isLoggedIn)

  useEffect(() => {
    if (isLoggedIn) {
      console.log('SSE작동 시작!')
      let eventSource: EventSourcePolyfill
      const fetchSse = async () => {
        try {
          const lastEventID = localStorage.getItem('sseLastEventID') || null

          eventSource = new EventSource(
            `api/${END_POINT.NOTIFICATION.SUBSCRIBE}`,
            {
              headers: {
                Authorization: `Bearer ${accessToken}`,
                LastEventID: JSON.stringify({ lastEventID }),
              },
              withCredentials: true,
            }
          )

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
      fetchSse()
      return () => eventSource.close()
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
