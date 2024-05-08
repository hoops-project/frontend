import { S } from './FriendRequestList.style.ts'
import RequestItem from '../common/RequestItem/RequestItem.tsx'

export default function FriendRequestList() {
  return (
    <S.Wrapper>
      <p>친구 신청 목록</p>
      {Array.from({ length: 3 }, (_, index) => (
        <RequestItem key={index} />
      ))}
    </S.Wrapper>
  )
}
