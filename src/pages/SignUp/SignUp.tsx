import { CS } from '../../styles/commonStyle.ts'
import { S } from './SignUp.style.ts'
import SignUpForm from '../../components/SignUpForm/SignUpForm.tsx'
import { SEO } from '../../components/SEO/index.tsx'

// TODO: 중복검사 통과 후 결과값을 담을 state 를 생성하고 에러메시지 자리에 뿌려주기
export default function SignUp() {
  return (
    <CS.DefaultContainer>
      <SEO title="회원가입" description="회원가입 페이지입니다." />
      <S.Wrapper>
        <SignUpForm />
      </S.Wrapper>
    </CS.DefaultContainer>
  )
}
