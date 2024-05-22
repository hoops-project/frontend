import { S } from './UserInfoEdit.style.ts'
import { useForm } from 'react-hook-form'
import { SignInType, SignUpType } from '../../types/auth.ts'
import AuthInput from '../common/AuthInput/AuthInput.tsx'
import { useEffect, useState } from 'react'
import { VALID_RULES } from '../../constants/validRules.ts'
import UserInfoSelect from '../common/UserInfoSelect/UserInfoSelect.tsx'
import { useSelect } from '../../hooks/useSelect.ts'
import { CS } from '../../styles/commonStyle.ts'
import BasicButton from '../common/BasicButton/BasicButton.tsx'
import { theme } from '../../styles/theme.ts'
import { useUserInfoQuery } from '../../hooks/query/useUserInfoQuery.ts'
import dayjs from 'dayjs'
import { findSelectIndexes } from '../../helper/findSelectIndex.ts'
import {
  convertAttributeToKorean,
  convertGenderToKorean,
  convertPlayStyleToKorean,
} from '../../helper/convertValueToName.ts'

export default function UserInfoEdit() {
  const [edit, setEdit] = useState<boolean>(true)
  const { userInfo, patchedUserInfo } = useUserInfoQuery()

  const {
    handleSubmit,
    control,
    formState: { errors },
    setValue,
  } = useForm<SignInType & SignUpType>({
    defaultValues: {
      password: '',
      name: '',
      nickname: '',
      birthday: '',
    },
  })

  /**
   * NOTICE: findSelectIndexes 함수를 이용하여 서버에서 받은 데이터를 넣어
   * 속성에 해당하는 인덱스배열(defaultValue)을 받환 받은 후 useSelect 에 전달해야 합니다.
   * */
  const defaultValue = findSelectIndexes(
    convertGenderToKorean(userInfo?.gender),
    convertPlayStyleToKorean(userInfo?.playStyle),
    convertAttributeToKorean(userInfo?.ability)
  )
  const selectedValue = useSelect({ defaultValue: defaultValue })

  useEffect(() => {
    if (userInfo) {
      setValue('name', userInfo.name)
      setValue('nickname', userInfo.nickName)
      setValue('birthday', dayjs(userInfo.birthday).format('YYYYMMDD'))
    }
  }, [userInfo, setValue])

  const handelEditUserInfo = (data: SignInType & SignUpType) => {
    if (edit) {
      setEdit(false)
      return
    }
    setEdit(true)

    const finalData = { ...data, ...selectedValue.select }

    patchedUserInfo(finalData)
  }

  return (
    <S.Container>
      <S.Form onSubmit={handleSubmit(handelEditUserInfo)}>
        <S.InputWrapper $readonly={edit}>
          <CS.ValidWrapper>
            <CS.InputLabel htmlFor={'userName'}>이름</CS.InputLabel>
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
            rules={!edit && VALID_RULES.PASSWORD}
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
            type={'number'}
            id={'birthday'}
            rules={VALID_RULES.BIRTHDAY}
          />
        </S.InputWrapper>

        <UserInfoSelect selected={selectedValue} disabled={edit} />
        <BasicButton
          type={'submit'}
          $bgColor={theme.colors.blue}
          $fontcolor={'white'}
          $width={'100%'}
          onClick={() =>
            window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
          }
        >
          {edit ? '프로필 수정' : '프로필 저장'}
        </BasicButton>
      </S.Form>
    </S.Container>
  )
}
