import { CS } from '../../styles/commonStyle.ts'
import { S } from './SignIn.style.ts'
import AuthInput from '../../components/common/AuthInput/AuthInput.tsx'
import { useForm } from 'react-hook-form'
import BasicButton from '../../components/common/BasicButton/BasicButton.tsx'
import { theme } from '../../styles/theme.ts'
import { SignInType, SignUpType } from '../../types/signIn.ts'
import checkMark from '../../assets/check-mark.webp'
import { useValid } from '../../hooks/useValid.ts'

export default function SignIn() {
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
        <form onSubmit={handleSubmit(handleSignIn)}>
          <div>
            <S.ErrorWrapper>
              <S.InputTitle>아이디</S.InputTitle>
              {!isValidEmail && email ? (
                <span>이메일 형식이 올바르지 않습니다.</span>
              ) : null}
              {isValidEmail && email ? (
                <img src={checkMark} alt={'확인표시'} />
              ) : null}
            </S.ErrorWrapper>
            <AuthInput
              type={'email'}
              name={'email'}
              control={control}
              placeholder={'이메일을 입력해 주세요.'}
            />
          </div>
          <div>
            <S.ErrorWrapper>
              <S.InputTitle>비밀번호</S.InputTitle>
              {!isValidPassword && password ? (
                <span>
                  비밀번호는 특수문자 포함 6자리 이상으로 입력해 주세요.
                </span>
              ) : null}
              {isValidPassword && password ? (
                <img src={checkMark} alt={'확인표시'} />
              ) : null}
            </S.ErrorWrapper>
            <AuthInput
              type={'password'}
              name={'password'}
              control={control}
              placeholder={'비밀번호를 입력해 주세요.'}
            />
          </div>
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
      </S.Wrapper>
    </CS.DefaultContainer>
  )
}
