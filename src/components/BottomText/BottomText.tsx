import { S } from './Bottom.style.ts'
<<<<<<< HEAD
import { Link } from 'react-router-dom'
=======
import { Route, Link } from 'react-router-dom'
>>>>>>> fe1c589bf1add07333cf3970d2d271353cd10e7c

export default function BottomText() {
  return (
    <S.BottomContainer>
      <Link to={'/'}>로그인 하러 가기</Link>
    </S.BottomContainer>
  )
}
