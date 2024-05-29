import { S } from './ParticipationGameList.style.ts'
import lock from '../../assets/ic_matchdata_lock.svg'
import { useParams } from 'react-router-dom'
import { GameDetails } from '../../types/detail.ts'
import { useGameDetailQuery } from '../../hooks/query/useGameDetailQuery.ts'
import { useParticipantGameQuery } from '../../hooks/query/useParticipantGameQuery.ts'
import InvitedRequestItem from '../InvitedRequestItem/InvitedRequestItem.tsx'

export interface Participant {
  participantId: number
  status: string
  createdDate: string
  gender: string
  nickName: string
  playStyle: string
  ability: string
  mannerPoint: number | null
  userId: number
}

export default function ParticipationGameList() {
  const userPk = localStorage.getItem('userPK')

  const { id } = useParams()
  const { gameDetail }: { gameDetail: GameDetails } = useGameDetailQuery(id)
  const { participantRequestList } = useParticipantGameQuery(
    Number(id),
    gameDetail?.userId
  )

  return (
    <S.Wrapper>
      <p>경기 참여 신청 목록</p>
      {!gameDetail?.userId ? (
        <S.WaitContainer>
          <p>채팅방에 입장해야 합니다.</p>
        </S.WaitContainer>
      ) : (
        <>
          {userPk === String(gameDetail?.userId) ? (
            participantRequestList?.applyParticipantGameList.map(
              (info: Participant) => (
                <InvitedRequestItem info={info} key={info.userId} />
              )
            )
          ) : (
            <S.LockContainer>
              <div>
                <img src={lock} alt={'자물쇠 아이콘'} />
                <p>팀장만 신청 회원을 관리할 수 있어요.</p>
              </div>
            </S.LockContainer>
          )}
        </>
      )}
    </S.Wrapper>
  )
}
