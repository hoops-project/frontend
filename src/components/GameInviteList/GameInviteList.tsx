import { S } from '../FriendRequestList/FriendRequestList.style.ts'
import { useGameInviteQuery } from '../../hooks/query/useGameInviteQuery.ts'
import { Invite } from '../../types/invite.ts'
import GameInviteItem from '../GameInviteItem/GameInviteItem.tsx'

export default function GameInviteList() {
  const { inviteList } = useGameInviteQuery()

  return (
    <S.Wrapper>
      <p>경기 초대 목록</p>
      {inviteList?.map((info: Invite) => <GameInviteItem info={info} />)}
    </S.Wrapper>
  )
}
