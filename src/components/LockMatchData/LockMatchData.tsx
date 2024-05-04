import { S } from './LockMatchData.style.ts'
import lock from '../../assets/ic_matchdata_lock.svg'

export default function LockMatchData() {
  return (
    <S.MatchData>
      <p>메치 데이터</p>
      <div>
        <img src={lock} alt={'자물쇠 아이콘'} />
        <p>참가 신청하면 미리 볼 수 있어요.</p>
      </div>
    </S.MatchData>
  )
}
