import React from 'react'
import { theme } from '../../styles/theme'
import BasicButton from '../../components/common/BasicButton/BasicButton'
import kakao from '../../assets/kakao.svg'
import { S } from './KakaoLogin.style'

declare global {
  interface Window {
    Kakao: any
  }
}

const KakaoLoginButton: React.FC = () => {
  const handleKakaoLogin = async () => {
    window.location.href = `  ${import.meta.env.VITE_HOOPS_API_URL}/api/oauth2/login/kakao`
  }

  return (
    <BasicButton
      type={'button'}
      $bgColor={theme.colors.yellow}
      $width={'100%'}
      $height={'5rem'}
      onClick={handleKakaoLogin}
    >
      <S.OAuthTitle>
        <S.KakaoIcon src={kakao} alt={'카카오 아이콘'} />
        <p>카카오 로그인</p>
      </S.OAuthTitle>
    </BasicButton>
  )
}

export default KakaoLoginButton
