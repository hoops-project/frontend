import { CS } from '../../styles/commonStyle.ts'
import { S } from './SignIn.style.ts'
import AuthInput from '../../components/common/AuthInput/AuthInput.tsx'
import { useForm } from 'react-hook-form'
import BasicButton from '../../components/common/BasicButton/BasicButton.tsx'
import { theme } from '../../styles/theme.ts'
import { SignInType, SignUpType } from '../../types/auth.ts'
import { useState } from 'react'
import kakao from '../../assets/kakao.svg'
import { VALID_RULES } from '../../constants/validRules.ts'

export default function SignIn() {
  // TODO: 서버 연결 후 서버에서 내려온 에러메시지 담아서 출력할것
  const [signInError] = useState<string>('')
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<SignInType & SignUpType>({
    defaultValues: {
      email: '',
      password: '',
      rememberMe: false,
    },
  })

  const handleSignIn = (sigInData: SignInType) => {
    if (errors.email?.message && errors.password?.message) {
      return
    }
    // TODO: rememberMe 값에 따라서 아이디 쿠키에 저장시키는 로직 추가할것

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
              {errors.email?.message && <span>{errors.email.message}</span>}
            </S.ValidWrapper>
            <AuthInput
              type={'email'}
              name={'email'}
              control={control}
              placeholder={'이메일을 입력해 주세요.'}
              rules={VALID_RULES.EMAIL}
            />
          </div>
          <div>
            <S.ValidWrapper>
              <S.InputTitle>비밀번호</S.InputTitle>{' '}
              {errors.password?.message && (
                <span>{errors.password.message}</span>
              )}
            </S.ValidWrapper>
            <AuthInput
              type={'password'}
              name={'password'}
              control={control}
              placeholder={'비밀번호를 입력해 주세요.'}
              rules={VALID_RULES.PASSWORD}
            />
          </div>
          <S.RememberId>
            <AuthInput
              type={'checkbox'}
              name={'rememberMe'}
              control={control}
            />
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
