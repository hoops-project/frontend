import { S } from './FindUserId.style.ts'
import TopNavTitle from '../common/TopNavTitle/TopNavTitle.tsx'
import BasicInput from '../common/BasicInput/BasicInput.tsx'
import BasicButton from '../common/BasicButton/BasicButton.tsx'
import { theme } from '../../styles/theme.ts'
import React, { useState } from 'react'

export default function FindUserIdForm() {
  const [email, setEmail] = useState<string>('')

  const handleFindUserId = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
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
          type={'submit'}
          $bgColor={theme.colors.blue_100}
          $fontcolor={theme.colors.blue}
          $width={'15%'}
        >
          제출
        </BasicButton>
      </S.Form>
    </>
  )
}
