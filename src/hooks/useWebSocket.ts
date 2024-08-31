import { useCallback, useEffect, useRef, useState } from 'react'
import SockJS from 'sockjs-client'
import { CompatClient, Stomp } from '@stomp/stompjs'

const SOCKET_URL = `${import.meta.env.VITE_HOOPS_CHAT_API}/ws`

interface Message {
  sender: string
  content: string
  type: 'JOIN' | 'LEAVE' | 'CHAT'
}

export const useWebSocket = (
  chatRoomId: string,
  accessToken: string,
  nickName: string | null | undefined
) => {
  const [messages, setMessages] = useState<Message[]>([])
  const [client, setClient] = useState<CompatClient | null>(null)
  const messageEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messageEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(scrollToBottom, [messages])

  const processMessage = useCallback((message: Message): Message | null => {
    if (!message.sender || message.sender === '') {
      return null
    }

    if (message.type === 'JOIN' && message.sender) {
      return {
        ...message,
        content: `[${message.sender}]님이 채팅방에 참여했습니다!`,
      }
    } else if (message.type === 'LEAVE' && message.sender) {
      return {
        ...message,
        content: `[${message.sender}]님이 채팅방에서 로그아웃 하셨습니다!`,
      }
    } else if (message.type === 'CHAT' && message.content) {
      return message
    } else {
      return message
    }
  }, [])

  const onMessageReceived = useCallback(
    (payload: { body: string }) => {
      const messageData = JSON.parse(payload.body)

      if (Array.isArray(messageData)) {
        // 이전 메시지 로드 처리
        setMessages((prevMessages) => [
          ...prevMessages,
          ...(messageData
            .map((msg) => processMessage(msg))
            .filter(Boolean) as Message[]),
        ])
      } else {
        // 단일 메시지 처리
        const processedMessage = processMessage(messageData)
        if (processedMessage) {
          setMessages((prevMessages) => [...prevMessages, processedMessage])
        }
      }
    },
    [processMessage]
  )

  useEffect(() => {
    if (!chatRoomId || !accessToken) {
      console.error('토큰값과 룸 아이디가 없음')
      return
    }
    setMessages([])

    const socket = new SockJS(SOCKET_URL)
    const newClient = Stomp.over(socket)

    const headers = {
      Authorization: `Bearer ${accessToken}`,
      gameId: String(chatRoomId),
      nickName: nickName || '',
    }

    const connectCallback = () => {
      console.log('웹소켓 연결 성공!')
      newClient.subscribe(
        `/topic/${chatRoomId}/${nickName}`,
        onMessageReceived,
        headers
      )
      newClient.send(
        `/app/loadMessages/${chatRoomId}`,
        headers,
        JSON.stringify({ messageType: 'LOAD_HISTORY' })
      )

      if (nickName) {
        newClient.send(
          `/app/addUser/${chatRoomId}`,
          headers,
          JSON.stringify({
            sender: nickName,
            content: `${nickName}님이 참여하였습니다.`,
            type: 'JOIN',
          })
        )
      }
    }

    const errorCallback = (error: unknown) => {
      console.error('웹소켓 연결 오류:', error)
    }

    newClient.connect(headers, connectCallback, errorCallback)
    setClient(newClient)

    return () => {
      if (newClient && newClient.connected) {
        newClient.disconnect(() => {
          console.log('웹소켓 연결 해제 성공')
        })
      }
    }
  }, [chatRoomId, accessToken, nickName, onMessageReceived])

  const sendMessage = useCallback(
    (content: string) => {
      if (client?.connected && nickName) {
        const chatMessage = {
          sender: nickName,
          content: content,
          type: 'CHAT' as const,
        }
        const headers = {
          Authorization: `Bearer ${accessToken}`,
        }
        client.send(
          `/app/sendMessage/${chatRoomId}`,
          headers,
          JSON.stringify(chatMessage)
        )
      }
    },
    [client, nickName, chatRoomId, accessToken]
  )

  return { messages, sendMessage, messageEndRef }
}
