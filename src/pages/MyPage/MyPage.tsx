import { CS } from '../../styles/commonStyle.ts'
import { S } from './MyPage.style.ts'
import UserInfoEdit from '../../components/UserInfoEdit/UserInfoEdit.tsx'

export default function MyPage() {
  return (
    <CS.LargeContainer>
      <S.Wrapper>
        <div style={{ backgroundColor: 'white' }}>d</div>
        <UserInfoEdit />
        <div style={{ backgroundColor: 'white' }}>d</div>
      </S.Wrapper>
    </CS.LargeContainer>
  )
}
