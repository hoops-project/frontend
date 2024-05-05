import { CS } from '../../styles/commonStyle.ts'
import { S } from './MyPage.style.ts'
import UserInfoEdit from '../../components/UserInfoEdit/UserInfoEdit.tsx'
import Notification from '../../components/Notification/Notification.tsx'

export default function MyPage() {
  return (
    <CS.LargeContainer>
      <S.Wrapper>
        <Notification />
        <UserInfoEdit />
        <div style={{ backgroundColor: 'white' }}>d</div>
      </S.Wrapper>
    </CS.LargeContainer>
  )
}
