import { S } from './ChatList.style.ts'

interface ChatListProps {
  message: { sender: string; content: string }[]
}

export default function ChatList({ message }: ChatListProps) {
  return (
    <>
      <S.Wrapper>
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
