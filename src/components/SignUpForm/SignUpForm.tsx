import AuthInput from '../common/AuthInput/AuthInput.tsx'
import { VALID_RULES } from '../../constants/validRules.ts'
import BasicButton from '../common/BasicButton/BasicButton.tsx'
import { theme } from '../../styles/theme.ts'
import UserInfoSelect from '../common/UserInfoSelect/UserInfoSelect.tsx'
import { useForm } from 'react-hook-form'
import { SignInType, SignUpType } from '../../types/auth.ts'
import { useSelect } from '../../hooks/useSelect.ts'
import { useEffect } from 'react'
import { useDuplicate } from '../../hooks/useDuplicate.ts'
import { S } from './SignUpForm.style.ts'
import { CS } from '../../styles/commonStyle.ts'

export default function SignUpForm() {
  const {
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm<SignInType & SignUpType>({
    defaultValues: {
      id: '',
      email: '',
      password: '',
      passwordConfirm: '',
      name: '',
      nickname: '',
      birthday: '',
    },
  })

  const selectedValue = useSelect()

  useEffect(() => {
    if (Object.keys(errors).length > 0) {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
    }
  }, [errors])

  const password = watch('password')

  const { emailPassed, idPassed, nicknamePassed } = useDuplicate()

  const handleSignUp = (sigInData: SignInType) => {
    console.log(sigInData)
    console.log(selectedValue.select)

    if (!emailPassed && !idPassed && !nicknamePassed) {
      alert('모든 중복 검사를 완료해 주세요.')
    }

    // TODO: 서버에 보내기전 모든 항목 공백제거 후 보낼것
  }

  const handleIdDuplicate = (id: string) => {
    switch (id) {
      case 'id':
        // 아이디 중복검사 mutation 로직
        break
      case 'email':
        // 이메일 중복검사 mutation 로직
        break
      case 'nickname':
        // 닉네임 중복검사 mutation 로직
        break
      default:
        throw new Error('존재하지 않는 중복검사 항목입니다.')
    }
  }

  return (
    <form onSubmit={handleSubmit(handleSignUp)}>
      <S.InputWrapper>
        <CS.ValidWrapper>
          <CS.InputLabel htmlFor={'id'}>아이디</CS.InputLabel>
          {errors.id?.message && <span>{errors.id.message}</span>}
        </CS.ValidWrapper>
        <S.DuplicateWrapper>
          <AuthInput
            id={'id'}
            type={'text'}
            name={'id'}
            control={control}
            placeholder={'아이디를 입력해 주세요.'}
            rules={VALID_RULES.ID}
          />
          <BasicButton
            type={'button'}
            $bgColor={theme.colors.blue_100}
            $fontcolor={theme.colors.blue}
            $width={'20%'}
            onClick={() => handleIdDuplicate('id')}
          >
            중복검사
          </BasicButton>
        </S.DuplicateWrapper>
      </S.InputWrapper>
      <S.InputWrapper>
        <CS.ValidWrapper>
          <CS.InputLabel htmlFor={'email'}>이메일</CS.InputLabel>
          {errors.email?.message && <span>{errors.email.message}</span>}
        </CS.ValidWrapper>
        <S.DuplicateWrapper>
          <AuthInput
            id={'email'}
            type={'email'}
            name={'email'}
            control={control}
            placeholder={'이메일을 입력해 주세요.'}
            rules={VALID_RULES.EMAIL}
          />
          <BasicButton
            type={'button'}
            $bgColor={theme.colors.blue_100}
            $fontcolor={theme.colors.blue}
            $width={'20%'}
            onClick={() => handleIdDuplicate('email')}
          >
            중복검사
          </BasicButton>
        </S.DuplicateWrapper>
      </S.InputWrapper>
      <S.InputWrapper>
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
      </S.InputWrapper>
      <S.InputWrapper>
        <CS.ValidWrapper>
          <CS.InputLabel htmlFor={'passwordConfirm'}>
            비밀번호 확인
          </CS.InputLabel>
          {errors.passwordConfirm?.message && (
            <span>{errors.passwordConfirm.message}</span>
          )}
        </CS.ValidWrapper>
        <AuthInput
          id={'passwordConfirm'}
          type={'password'}
          name={'passwordConfirm'}
          control={control}
          placeholder={'비밀번호를 한번 더 입력해 주세요.'}
          rules={VALID_RULES.PASSWORD_CONFIRM(password)}
        />
      </S.InputWrapper>
      <S.InputWrapper>
        <CS.ValidWrapper>
          <CS.InputLabel htmlFor={'name'}>이름</CS.InputLabel>
          {errors.name?.message && <span>{errors.name.message}</span>}
        </CS.ValidWrapper>
        <AuthInput
          id={'name'}
          type={'text'}
          name={'name'}
          control={control}
          placeholder={'이름을 입력해 주세요.'}
          rules={VALID_RULES.NAME}
        />
      </S.InputWrapper>
      <S.InputWrapper>
        <CS.ValidWrapper>
          <CS.InputLabel htmlFor={'nickname'}>닉네임</CS.InputLabel>
          {errors.nickname?.message && <span>{errors.nickname.message}</span>}
        </CS.ValidWrapper>
        <S.DuplicateWrapper>
          <AuthInput
            id={'nickname'}
            type={'text'}
            name={'nickname'}
            control={control}
            placeholder={'닉네임을 입력해 주세요.'}
            rules={VALID_RULES.NICKNAME}
          />
          <BasicButton
            type={'button'}
            $bgColor={theme.colors.blue_100}
            $fontcolor={theme.colors.blue}
            $width={'20%'}
            onClick={() => handleIdDuplicate('nickname')}
          >
            중복검사
          </BasicButton>
        </S.DuplicateWrapper>
      </S.InputWrapper>
      <S.InputWrapper>
        <CS.ValidWrapper>
          <CS.InputLabel htmlFor={'birthday'}>생년월일</CS.InputLabel>
          {errors.birthday?.message && <span>{errors.birthday.message}</span>}
        </CS.ValidWrapper>
        <AuthInput
          id={'birthday'}
          type={'number'}
          name={'birthday'}
          control={control}
          placeholder={'ex) 19960328'}
          rules={VALID_RULES.BIRTHDAY}
        />
      </S.InputWrapper>

      <UserInfoSelect selected={selectedValue} />

      <BasicButton
        type={'submit'}
        $bgColor={theme.colors.blue}
        $fontcolor={theme.colors.white}
        $width={'100%'}
        $height={'5rem'}
      >
        회원가입
      </BasicButton>
    </form>
  )
}
