import AuthInput from '../common/AuthInput/AuthInput.tsx'
import { VALID_RULES } from '../../constants/validRules.ts'
import BasicButton from '../common/BasicButton/BasicButton.tsx'
import { theme } from '../../styles/theme.ts'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { SignInType, SignUpType } from '../../types/auth.ts'
import { S } from './SignInForm.style.ts'

export default function SignInForm() {
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
    <>
      <S.ErrorWrapper>
        {signInError !== '' && <p>{signInError}</p>}
      </S.ErrorWrapper>
      <form onSubmit={handleSubmit(handleSignIn)}>
        <div>
          <S.ValidWrapper>
            <S.InputLabel htmlFor={'email'}>아이디</S.InputLabel>
            {errors.email?.message && <span>{errors.email.message}</span>}
          </S.ValidWrapper>
          <AuthInput
            id={'email'}
            type={'email'}
            name={'email'}
            control={control}
            placeholder={'이메일을 입력해 주세요.'}
            rules={VALID_RULES.EMAIL}
          />
        </div>
        <div>
          <S.ValidWrapper>
            <S.InputLabel htmlFor={'password'}>비밀번호</S.InputLabel>{' '}
            {errors.password?.message && <span>{errors.password.message}</span>}
          </S.ValidWrapper>
          <AuthInput
            id={'password'}
            type={'password'}
            name={'password'}
            control={control}
            placeholder={'비밀번호를 입력해 주세요.'}
            rules={VALID_RULES.PASSWORD}
          />
        </div>
        <S.RememberId>
          <AuthInput
            id={'rememberMe'}
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
    </>
  )
}
