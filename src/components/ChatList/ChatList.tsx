import { S } from './ChatList.style.ts'
import { useEffect, useRef } from 'react'

interface ChatListProps {
  message: { sender: string; content: string }[]
}

export default function ChatList({ message }: ChatListProps) {
  const chatListRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (chatListRef.current) {
      chatListRef.current.scrollTop = chatListRef.current.scrollHeight
    }
  }, [message])

  return (
    <>
      <S.Wrapper ref={chatListRef}>
        {message.map((msg, index) => (
          <S.Chat key={index}>
            <S.ChatUserInfo>
              <div>✉️</div>
              <p>{msg.sender}</p>
            </S.ChatUserInfo>
            <S.ContentWrapper>
              <strong>{msg.content}</strong>
            </S.ContentWrapper>
          </S.Chat>
        ))}
      </S.Wrapper>
    </>
  )
}
