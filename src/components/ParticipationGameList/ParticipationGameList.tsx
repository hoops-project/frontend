import { S } from './ParticipationGameList.style.ts'
import lock from '../../assets/ic_matchdata_lock.svg'

export default function ParticipationGameList() {
  return (
    <S.Wrapper>
      <p>경기 참여 신청 목록</p>
      <S.LockContainer>
        <div>
          <img src={lock} alt={'자물쇠 아이콘'} />
          <p>팀장만 신청 회원을 관리할 수 있어요.</p>
        </div>
      </S.LockContainer>
    </S.Wrapper>
  )
}
