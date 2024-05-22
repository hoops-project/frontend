import { CS } from '../../styles/commonStyle.ts'
import { S } from './SignIn.style.ts'
import BasicButton from '../../components/common/BasicButton/BasicButton.tsx'
import { theme } from '../../styles/theme.ts'
import kakao from '../../assets/kakao.svg'
import SignInForm from '../../components/SignInForm/SignInForm.tsx'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function SignIn() {
  const navigate = useNavigate()
  
  // 로그인 상태일 시 로그인 화면 경로 제어 
  const isAuthenticated = localStorage.getItem('Access-Token');

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/', { replace: true });
    }
  }, []);

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
        <BasicButton
          type={'button'}
          $bgColor={theme.colors.yellow}
          $width={'100%'}
          $height={'5rem'}
        >
          <S.OAuthTitle>
            <S.KakaoIcon src={kakao} alt={'카카오 아이콘'} />
            <p>카카오 로그인</p>
          </S.OAuthTitle>
        </BasicButton>
      </S.Wrapper>
    </CS.DefaultContainer>
  )
}
