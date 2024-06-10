import { CS } from '../../styles/commonStyle.ts'
import { S } from './MyPage.style.ts'
import UserInfoEdit from '../../components/UserInfoEdit/UserInfoEdit.tsx'
import Notification from '../../components/Notification/Notification.tsx'
import FriendRequestList from '../../components/FriendRequestList/FriendRequestList.tsx'
import GameInviteList from '../../components/GameInviteList/GameInviteList.tsx'
import { SEO } from '../../components/SEO/index.tsx'

export default function MyPage() {
  return (
    <>
    <SEO title="마이페이지" description="마이페이지입니다." />
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
    </>  
  )
}
