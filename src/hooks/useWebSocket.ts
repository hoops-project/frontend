import { useEffect, useRef, useState } from 'react'
import SockJS from 'sockjs-client'
import { CompatClient, Stomp } from '@stomp/stompjs'

const SOCKET_URL = `${import.meta.env.VITE_HOOPS_API_URL}/chat`

export const useWebSocket = (chatRoomId: string, accessToken: string) => {
  const [messages, setMessages] = useState<
    { sender: string; content: string }[]
  >([])
  const client = useRef<CompatClient | null>(null)

  useEffect(() => {
    if (!chatRoomId || !accessToken) {
      console.error('토큰값과 룸 아이디가 없음')
      return
    }

    client.current = Stomp.over(() => new SockJS(SOCKET_URL))
    const headers = {
      Authorization: `Bearer ${accessToken}`,
    }

    const connectCallback = () => {
      console.log('웹소켓 연결 성공!')
      client.current?.subscribe(
        `/pub/enter/${chatRoomId}`,
        (response) => {
          const message = JSON.parse(response.body)
          setMessages((prevMessages) => [...prevMessages, message])
        },
        headers
      )
    }

    const errorCallback = (error: unknown) => {
      console.error('웹소켓 연결 오류:', error)
    }

    client.current.connect(headers, connectCallback, errorCallback)

    return () => {
      // 연결 해제 로직을 명시적으로 disconnect 메서드 호출 전에 확인
      if (client.current && client.current.connected) {
        client.current.disconnect(() => {
          console.log('웹소켓 연결 해제 성공')
        })
        client.current = null
      }
    }
  }, [chatRoomId, accessToken]) // 의존성 배열에 chatRoomId와 accessToken 추가

  const sendMessage = (message: string) => {
    if (client.current && client.current.connected) {
      const data = { sender: 'USER', content: message }
      client.current.send(`/pub/send/${chatRoomId}`, {}, JSON.stringify(data))
    }
  }

  return { messages, sendMessage, stompClient: client.current }
}
