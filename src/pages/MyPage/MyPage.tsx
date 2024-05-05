import { CS } from '../../styles/commonStyle.ts'
import { S } from './MyPage.style.ts'
import UserInfoEdit from '../../components/UserInfoEdit/UserInfoEdit.tsx'
import Notification from '../../components/Notification/Notification.tsx'
import FriendRequestList from '../../components/FriendRequestList/FriendRequestList.tsx'
import GameInviteList from '../../components/GameInviteList/GameInviteList.tsx'

export default function MyPage() {
  return (
    <CS.LargeContainer>
      <S.Wrapper>
        <Notification />
        <UserInfoEdit />
        <div>
          <FriendRequestList />
          <GameInviteList />
        </div>
      </S.Wrapper>
    </CS.LargeContainer>
  )
}
