import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { theme } from '../../styles/theme';
import BasicButton from '../../components/common/BasicButton/BasicButton';
import kakao from '../../assets/kakao.svg';
import { S } from './KakaoLogin.style';
import { defaultAxios } from '../../api/axiosInstance';
import { useAuthStore } from '../../store/store';

declare global {
  interface Window {
    Kakao: any;
  }
}

const KakaoLoginButton: React.FC = () => {
  const setLoginState = useAuthStore((state) => state.login)
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn)
  const navigate = useNavigate();
  const K_REDIRECT_URI = `https://hoops.service/api/oauth2/kakao`;
  const kakaoURL = `https://hoops.services/api/oauth2/login/kakao`;

  const handleKakaoLogin = () => {
    window.location.href = kakaoURL;
    setLoginState()
  };

  useEffect(() => {
    const isAuthenticated = localStorage.getItem('Access-Token');
    if (isAuthenticated) {
      navigate('/', { replace: true });
    } else {
      const urlParams = new URLSearchParams(window.location.search);
      const code = urlParams.get('code');
      if (code) {
        defaultAxios.get(`${K_REDIRECT_URI}?code=${code}`)
          .then(response => {
            const userData = response.data;
            const accessToken = response.headers['authorization'];
            const refreshToken = userData.refreshToken;
            const userId = userData.userInfo.userId;

            localStorage.setItem('Access-Token', accessToken);
            localStorage.setItem('Refresh-Token', refreshToken);
            localStorage.setItem('userPK', String(userId));

            navigate('/', { replace: true });
          })
          .catch(error => {
            console.error('Login failed:', error);
          });
      }
    }
  }, [navigate, isLoggedIn]);

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
  );
};

export default KakaoLoginButton;
