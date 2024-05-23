import { CS } from '../../styles/commonStyle.ts'
import { S } from './Detail.style.ts'
import LockMatchData from '../../components/LockMatchData/LockMatchData.tsx'
import KakaoMap from '../../components/KakaoMap/KakaoMap.tsx'
import MatchPoint from '../../components/MatchPoint/MatchPoint.tsx'
import DetailTopTitle from '../../components/DetailTopTitle/DetailTopTitle.tsx'
import JoinGame from '../../components/JoinGame/JoinGame.tsx'
import MatchData from '../../components/MatchData/MatchData.tsx'
import { useParams } from 'react-router-dom'
import { useGameDetailQuery } from '../../hooks/query/useGameDetailQuery.ts'
import { GameDetails, ParticipantUser } from '../../types/detail.ts'
import {
  convertGameType,
  convertGender,
} from '../../helper/convertValueToName.ts'
import dayjs from 'dayjs'
import 'dayjs/locale/ko'
import { useUserInfoQuery } from '../../hooks/query/useUserInfoQuery.ts'

dayjs.locale('ko')

export default function Detail() {
  const { id } = useParams()
  const { gameDetail }: { gameDetail: GameDetails } = useGameDetailQuery(id)
  const { userInfo } = useUserInfoQuery()

  const restCount =
    gameDetail?.headCount - gameDetail?.participantUserList.length
  const countFemaleUsers = gameDetail?.participantUserList?.reduce(
    (acc, user) => {
      if (user.genderType === 'FEMALE') {
        return acc + 1
      }
      return acc
    },
    0
  )

  const isUserParticipating = (
    participantUserList: ParticipantUser[],
    loggedInUserId: number
  ): boolean => {
    console.log(loggedInUserId)
    return participantUserList?.some((user) => user.userId === loggedInUserId)
  }

  const matchPoints = {
    playType: convertGameType(gameDetail?.matchFormat),
    gender: convertGender(gameDetail?.gender),
    place: gameDetail?.fieldStatus === 'INDOOR' ? '실내' : '실외',
    addFriend: gameDetail?.inviteYn ? '친구 초대 가능' : '친구 초대 불가능',
    femaleUser: countFemaleUsers,
  }

  // TODO: 각각의 영역마다 컴포넌트로 나눠서 관리 할 수 있을듯
  return (
    <CS.DefaultContainer>
      <S.Wrapper>
        <DetailTopTitle title={gameDetail?.placeName} />
        <S.InfoWrapper>
          <div>
            <MatchPoint matchPoint={matchPoints} />
            {/* TODO: 매치 데이터 시각화 조건부 렌더링 구현 */}
            {isUserParticipating(
              gameDetail?.participantUserList,
              userInfo?.userId ?? 0
            ) ? (
              <MatchData
                userList={gameDetail?.participantUserList}
                content={gameDetail?.content}
              />
            ) : (
              <LockMatchData />
            )}

            <KakaoMap lat={gameDetail?.latitude} lng={gameDetail?.longitude} />
          </div>
          <JoinGame
            date={dayjs(gameDetail?.startDateTime).format('M월 D일 ddd HH:mm')}
            title={gameDetail?.placeName}
            restCount={restCount}
            address={gameDetail?.address}
            isCreator={userInfo?.userId === gameDetail?.userId}
          />
        </S.InfoWrapper>
      </S.Wrapper>
    </CS.DefaultContainer>
  )
}
