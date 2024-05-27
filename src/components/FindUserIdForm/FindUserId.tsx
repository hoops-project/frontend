import { S } from './FindUserId.style.ts'
import TopNavTitle from '../common/TopNavTitle/TopNavTitle.tsx'
import BasicInput from '../common/BasicInput/BasicInput.tsx'
import BasicButton from '../common/BasicButton/BasicButton.tsx'
import { theme } from '../../styles/theme.ts'
import React, { useState } from 'react'
import { useFindAccount } from '../../hooks/query/useFindAccount.ts'
import { REGEX } from '../../constants/regex.ts'
import useToast from '../../hooks/useToast.ts'
import { CS } from '../../styles/commonStyle.ts'

export default function FindUserIdForm() {
  const [email, setEmail] = useState<string>('')
  const { findUserIdMutation, userId, idPending } = useFindAccount()
  const { toastError } = useToast()

  const handleFindUserId = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!REGEX.EMAIL.test(email)) {
      toastError('이메일 형식이 올바르지 않습니다.')
      return
    }

    findUserIdMutation(email)
  }

  return (
    <>
      <TopNavTitle title={'이메일을 입력하시면 아이디를 알려드릴게요!'} />
      <S.Form onSubmit={handleFindUserId}>
        <BasicInput
          type={'email'}
          id={'email'}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <BasicButton
          disabled={idPending}
          type={'submit'}
          $bgColor={theme.colors.blue_100}
          $fontcolor={idPending ? theme.colors.white : theme.colors.blue}
          $width={'15%'}
        >
          {idPending ? '찾는중...' : '찾기'}
        </BasicButton>
      </S.Form>
      {userId && typeof userId !== 'object' ? (
        <S.UserId>
          <p>회원님의 아이디는</p>
          <p>{`${userId} 입니다.`}</p>
          <CS.Link to={'/sign-in'}>
            <p>로그인 하러 가기</p>
          </CS.Link>
        </S.UserId>
      ) : (
        <S.UserId>
          <p>{userId?.errorMessage}</p>
        </S.UserId>
      )}
    </>
  )
}
