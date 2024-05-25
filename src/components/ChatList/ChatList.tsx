import { S } from './ChatList.style.ts'

interface ChatListProps {
  message: { sender: string; content: string }[]
}

export default function ChatList({ message }: ChatListProps) {
  // const params = useParams()

  // TODO: 이곳에서 gameId를 이용해서 채팅방 연결 gameId는 params.id임

  return (
    <S.Wrapper>
      {Array.from({ length: 17 }, (_, index) => (
        <S.Chat key={index}>
          <S.ChatUserInfo>
            <div>
              <span>팀장</span>
            </div>
            <p>오신웅</p>
          </S.ChatUserInfo>
          <S.ContentWrapper>
            <strong>채팅 내용</strong>
          </S.ContentWrapper>
          <p>2022.1.3</p>
        </S.Chat>
      ))}
    </S.Wrapper>
  )
}
