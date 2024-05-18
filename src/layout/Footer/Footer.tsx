import { S } from './Footer.style.ts'

export default function Footer() {
  return (
    <S.Footer>
      <S.Info>
        <div>
          <p>서비스 약관/정책</p>|<p>고객센터</p>|<p>권리 침해 신고</p>|
          <p>공지사항</p>
        </div>
        <div>
          <p>Copyright © FriendNet All rights reserved.</p>
        </div>
      </S.Info>
    </S.Footer>
  )
}
