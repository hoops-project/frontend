import TopNavTitle from '../common/TopNavTitle/TopNavTitle.tsx'
import { S } from '../FindUserIdForm/FindUserId.style.ts'
import BasicInput from '../common/BasicInput/BasicInput.tsx'
import BasicButton from '../common/BasicButton/BasicButton.tsx'
import { theme } from '../../styles/theme.ts'
import React, { useState } from 'react'
import { useFindAccount } from '../../hooks/query/useFindAccount.ts'
import useToast from '../../hooks/useToast.ts'

export default function FindUserPasswordForm() {
  const [id, setId] = useState<string>('')
  const { findUserPasswordMutation, pswPending } = useFindAccount()
  const { toastError } = useToast()

  const handleFindUserId = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!id) {
      toastError('아이디를 입력해 주세요.')
      return
    }

    findUserPasswordMutation(id)
  }

  return (
    <>
      <TopNavTitle
        title={'아이디를 입력하시면 새로운 비밀번호를 메일로 보내드려요!'}
      />
      <S.Form onSubmit={handleFindUserId}>
        <BasicInput
          type={'text'}
          id={'id'}
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
        <BasicButton
          disabled={pswPending}
          type={'submit'}
          $bgColor={theme.colors.blue_100}
          $fontcolor={pswPending ? theme.colors.white : theme.colors.blue}
          $width={'15%'}
        >
          {pswPending ? '찾는중...' : '찾기'}
        </BasicButton>
      </S.Form>
    </>
  )
}
