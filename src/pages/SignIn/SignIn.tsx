import { CS } from '../../styles/commonStyle.ts'
import { S } from './SignIn.style.ts'
import SignInForm from '../../components/SignInForm/SignInForm.tsx'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import KakaoLoginButton from '../../components/KakaoLogin/KakaoLogin.tsx'
import { SEO } from '../../components/SEO/index.tsx'

export default function SignIn() {
  const navigate = useNavigate()

  // 로그인 상태일 시 로그인 화면 경로 제어
  const isAuthenticated = localStorage.getItem('Access-Token')

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/', { replace: true })
    }
  }, [])

  return (
    <CS.DefaultContainer>
      <SEO title="로그인" description="로그인 페이지입니다." />
      <S.Wrapper>
        <SignInForm />
        <S.FindAccount>
          <CS.Link to={'/account'}>
            <span>아이디 찾기/</span>
          </CS.Link>
          <CS.Link to={'/password'}>
            <span>비밀번호 찾기</span>
          </CS.Link>
          <CS.Link to={'/sign-up'}>
            <p>회원가입</p>
          </CS.Link>
        </S.FindAccount>
        <S.Hr />
        <KakaoLoginButton />
      </S.Wrapper>
    </CS.DefaultContainer>
  )
}
