import { S } from './Bottom.style.ts'
import { Route, Link } from 'react-router-dom'

export default function BottomText() {
  return (
    <S.BottomContainer>
      <Link to={'/'}>로그인 하러 가기</Link>
    </S.BottomContainer>
  )
}
