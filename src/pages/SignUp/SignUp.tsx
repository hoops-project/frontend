import { CS } from '../../styles/commonStyle.ts'
import { S } from './SignUp.style.ts'
import SignUpForm from '../../components/SignUpForm/SignUpForm.tsx'
import { SEO } from '../../components/SEO/index.tsx'

export default function SignUp() {
  return (
    <CS.DefaultContainer>
      <SEO title='회원가입' description='회원가입 페이지입니다.' />
      <S.Wrapper>
        <SignUpForm />
      </S.Wrapper>
    </CS.DefaultContainer>
  )
}
