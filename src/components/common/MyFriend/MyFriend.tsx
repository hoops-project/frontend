import { S } from './MyFriend.style.ts'
import { ReactNode } from 'react'

export default function MyFriend({ children }: { children: ReactNode }) {
  return (
    <S.Wrapper>
      <S.TopTit>
        <S.FlexBox>
          <p>이름</p>
          <p>평점</p>
          <p>스타일</p>
        </S.FlexBox>
      </S.TopTit>
      <S.UnderLine />
      {children}
    </S.Wrapper>
  )
}
