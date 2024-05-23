import { S } from './FindUserId.style.ts'
import { CS } from '../../styles/commonStyle.ts'
import FindUserIdForm from '../../components/FindUserIdForm/FindUserId.tsx'

export default function FindUserId() {
  return (
    <CS.DefaultContainer>
      <S.container>
        <FindUserIdForm />
      </S.container>
    </CS.DefaultContainer>
  )
}
