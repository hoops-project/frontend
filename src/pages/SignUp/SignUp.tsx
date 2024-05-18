import { CS } from '../../styles/commonStyle.ts'
import { S } from './SignUp.style.ts'
import SignUpForm from '../../components/SignUpForm/SignUpForm.tsx'

// TODO: 중복검사 통과 후 결과값을 담을 state 를 생성하고 에러메시지 자리에 뿌려주기
export default function SignUp() {
  return (
    <CS.DefaultContainer>
      <S.Wrapper>
        <SignUpForm />
      </S.Wrapper>
    </CS.DefaultContainer>
  )
}
