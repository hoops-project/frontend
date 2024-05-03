import { S } from './TopNavTitle.style.ts'

export default function TopNavTitle({ title }: { title: string }) {
  return (
    <S.Wrapper>
      <S.Title>{title}</S.Title>
    </S.Wrapper>
  )
}
