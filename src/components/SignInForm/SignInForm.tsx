import AuthInput from '../common/AuthInput/AuthInput.tsx'
import { VALID_RULES } from '../../constants/validRules.ts'
import BasicButton from '../common/BasicButton/BasicButton.tsx'
import { theme } from '../../styles/theme.ts'
import { useForm } from 'react-hook-form'
import { SignInType, SignUpType } from '../../types/auth.ts'
import { S } from './SignInForm.style.ts'
import { CS } from '../../styles/commonStyle.ts'
import useLoginQuery from '../../hooks/query/useLoginQuery.ts'

export default function SignInForm() {
  // TODO: 서버 연결 후 서버에서 내려온 에러메시지 담아서 출력할것

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<SignInType & SignUpType>({
    defaultValues: {
      id: '',
      password: '',
      rememberMe: false,
    },
  })

  const { loginMutate, loginPending } = useLoginQuery();

  const handleSignIn = (signInData: SignInType) => {
    if (errors.id?.message || errors.password?.message) {
      return;
    }

    loginMutate(signInData);

    console.log(signInData);
  };

  return (
    <>
      {/* <S.ErrorWrapper>
        {signInError !== '' && <p>{signInError}</p>}
      </S.ErrorWrapper> */}
      <form onSubmit={handleSubmit(handleSignIn)}>
        <div>
          <CS.ValidWrapper>
            <CS.InputLabel htmlFor={'id'}>아이디</CS.InputLabel>
            {errors.id?.message && <span>{errors.id.message}</span>}
          </CS.ValidWrapper>
          <AuthInput
            id={'id'}
            type={'text'}
            name={'id'}
            control={control}
            placeholder={'아이디를 입력해 주세요.'}
            rules={VALID_RULES.ID}
          />
        </div>
        <div>
          <CS.ValidWrapper>
            <CS.InputLabel htmlFor={'password'}>비밀번호</CS.InputLabel>
            {errors.password?.message && <span>{errors.password.message}</span>}
          </CS.ValidWrapper>
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
            disabled={loginPending}
          >
            {loginPending ? '로그인 중...' : '로그인'}
          </BasicButton>
        </div>
      </form>
    </>
  );
}