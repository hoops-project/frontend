import { S } from '../FriendRequestList/FriendRequestList.style.ts'
import RequestItem from '../common/RequestItem/RequestItem.tsx'

export default function GameInviteList() {
  return (
    <S.Wrapper>
      <p>경기 초대 목록</p>
      {Array.from({ length: 6 }, (_, index) => (
        <RequestItem key={index} />
      ))}
    </S.Wrapper>
  )
}
