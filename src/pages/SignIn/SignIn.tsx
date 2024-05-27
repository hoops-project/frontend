import { CS } from '../../styles/commonStyle.ts'
import { S } from './SignIn.style.ts'
import SignInForm from '../../components/SignInForm/SignInForm.tsx'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import KakaoLoginButton from '../../components/KakaoLogin/KakaoLogin.tsx'
// import { END_POINT } from '../../constants/endPoint.ts'

export default function SignIn() {
  const navigate = useNavigate()

  // 로그인 상태일 시 로그인 화면 경로 제어
  const isAuthenticated = localStorage.getItem('Access-Token')
  // const KAKAO_REST_API_KEY = import.meta.env.VITE_KAKAO_API_CLIENT_KEY
  // // const K_REDIRECT_URI = import.meta.env.VITE_HOOPS_API_URL;
  // // const kakaoURL = `${import.meta.env.VITE_HOOPS_API_URL}${END_POINT.AUTH.OAUTH}`;
  // const K_REDIRECT_URI = `https://hoops.services/api/oauth2/kakao`
  // const kakaoURL = `https://hoops.services/api/oauth2/login/kakao`

  // const handleKakaoLogin = () => {
  //   window.location.href = kakaoURL
  // }

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/', { replace: true })
    }
  }, [])

  return (
    <CS.DefaultContainer>
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
