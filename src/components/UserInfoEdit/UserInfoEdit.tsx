import { S } from './UserInfoEdit.style.ts'
import { useForm } from 'react-hook-form'
import { SignInType, SignUpType } from '../../types/auth.ts'
import AuthInput from '../common/AuthInput/AuthInput.tsx'
import { useState } from 'react'
import { VALID_RULES } from '../../constants/validRules.ts'
import UserInfoSelect from '../common/UserInfoSelect/UserInfoSelect.tsx'
import { useSelect } from '../../hooks/useSelect.ts'
import { CS } from '../../styles/commonStyle.ts'

export default function UserInfoEdit() {
  const [edit, setEdit] = useState<boolean>(true)
  const {
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm<SignInType & SignUpType>({
    defaultValues: {
      password: 'Qwerty123!',
      name: '오신웅',
      nickname: '시눙하이',
      birthday: '19960328',
    },
  })
  const selectedValue = useSelect()

  const handelEditUserInfo = () => {}

  return (
    <S.Container>
      <S.Form onSubmit={handleSubmit(handelEditUserInfo)}>
        <S.InputWrapper $readonly={edit}>
          <CS.ValidWrapper>
            <CS.InputLabel htmlFor={'userName'}>아이디</CS.InputLabel>
            {errors.name?.message && <span>{errors.name.message}</span>}
          </CS.ValidWrapper>
          <AuthInput
            readonly={edit}
            name={'name'}
            control={control}
            type={'text'}
            id={'userName'}
            rules={VALID_RULES.NAME}
          />
        </S.InputWrapper>
        <S.InputWrapper $readonly={edit}>
          <CS.ValidWrapper>
            <CS.InputLabel htmlFor={'nickname'}>닉네임</CS.InputLabel>
            {errors.nickname?.message && <span>{errors.nickname.message}</span>}
          </CS.ValidWrapper>
          <AuthInput
            readonly={edit}
            name={'nickname'}
            control={control}
            type={'text'}
            id={'nickname'}
            rules={VALID_RULES.NICKNAME}
          />
        </S.InputWrapper>
        <S.InputWrapper $readonly={edit}>
          <CS.ValidWrapper>
            <CS.InputLabel htmlFor={'password'}>비밀번호</CS.InputLabel>
            {errors.password?.message && <span>{errors.password.message}</span>}
          </CS.ValidWrapper>
          <AuthInput
            readonly={edit}
            name={'password'}
            control={control}
            type={'password'}
            id={'password'}
            rules={VALID_RULES.PASSWORD}
          />
        </S.InputWrapper>
        <S.InputWrapper $readonly={edit}>
          <CS.ValidWrapper>
            <CS.InputLabel htmlFor={'birthday'}>생년월일</CS.InputLabel>
            {errors.birthday?.message && <span>{errors.birthday.message}</span>}
          </CS.ValidWrapper>
          <AuthInput
            readonly={edit}
            name={'birthday'}
            control={control}
            type={'text'}
            id={'birthday'}
            rules={VALID_RULES.BIRTHDAY}
          />
        </S.InputWrapper>

        <UserInfoSelect selected={selectedValue} />
      </S.Form>
    </S.Container>
  )
}
