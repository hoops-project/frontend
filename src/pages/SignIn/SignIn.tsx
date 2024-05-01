import { CS } from '../../styles/commonStyle.ts'
import { S } from './SignIn.style.ts'
import AuthInput from '../../components/common/AuthInput/AuthInput.tsx'
import { useForm } from 'react-hook-form'
import BasicButton from '../../components/common/BasicButton/BasicButton.tsx'
import { theme } from '../../styles/theme.ts'
import { SignInType, SignUpType } from '../../types/signIn.ts'
import checkMark from '../../assets/check-mark.webp'
import { useValid } from '../../hooks/useValid.ts'
import { useState } from 'react'
import kakao from '../../assets/kakao.svg'

export default function SignIn() {
  // TODO: 서버 연결 후 서버에서 내려온 에러메시지 담아서 출력할것
  const [signInError] = useState<string>('')
  const { handleSubmit, control, watch } = useForm<SignInType & SignUpType>({
    defaultValues: {
      email: '',
      password: '',
    },
  })

  const email: string = watch('email')
  const password: string = watch('password')

  const { isValidEmail, isValidPassword } = useValid(email, password)

  const handleSignIn = (sigInData: SignInType) => {
    if (!isValidEmail && !isValidPassword) {
      return
    }
    console.log(sigInData)
  }

  return (
    <CS.DefaultContainer>
      <S.Wrapper>
        <S.ErrorWrapper>
          {signInError !== '' && <p>{signInError}</p>}
        </S.ErrorWrapper>
        <form onSubmit={handleSubmit(handleSignIn)}>
          <div>
            <S.ValidWrapper>
              <S.InputTitle>아이디</S.InputTitle>
              {!isValidEmail && email ? (
                <span>이메일 형식이 올바르지 않습니다.</span>
              ) : null}
              {isValidEmail && email ? (
                <img src={checkMark} alt={'확인표시'} />
              ) : null}
            </S.ValidWrapper>
            <AuthInput
              type={'email'}
              name={'email'}
              control={control}
              placeholder={'이메일을 입력해 주세요.'}
            />
          </div>
          <div>
            <S.ValidWrapper>
              <S.InputTitle>비밀번호</S.InputTitle>
              {!isValidPassword && password ? (
                <span>
                  비밀번호는 특수문자 포함 6자리 이상으로 입력해 주세요.
                </span>
              ) : null}
              {isValidPassword && password ? (
                <img src={checkMark} alt={'확인표시'} />
              ) : null}
            </S.ValidWrapper>
            <AuthInput
              type={'password'}
              name={'password'}
              control={control}
              placeholder={'비밀번호를 입력해 주세요.'}
            />
          </div>
          <S.RememberId>
            <input type='checkbox' />
            <p>아이디 저장</p>
          </S.RememberId>
          <div>
            <BasicButton
              type={'submit'}
              $bgColor={theme.colors.blue}
              $fontcolor={theme.colors.white}
              $width={'100%'}
              $height={'5rem'}
            >
              로그인
            </BasicButton>
          </div>
        </form>
        <S.FindAccount>
          <CS.Link to={'/account'}>
            <span>아이디 찾기/</span>
          </CS.Link>

          <CS.Link to={'/password'}>
            <span>비밀번호 찾기</span>
          </CS.Link>
          <CS.Link to={'/password'}>
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
