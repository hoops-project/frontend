import { CS } from '../../styles/commonStyle.ts'
import { S } from './Detail.style.ts'
import LockMatchData from '../../components/LockMatchData/LockMatchData.tsx'
import KakaoMap from '../../components/KakaoMap/KakaoMap.tsx'
import MatchPoint from '../../components/MatchPoint/MatchPoint.tsx'
import DetailTopTitle from '../../components/DetailTopTitle/DetailTopTitle.tsx'
import JoinGame from '../../components/JoinGame/JoinGame.tsx'
import MatchData from '../../components/MatchData/MatchData.tsx'
import { useParams } from 'react-router-dom'

export default function Detail() {
  // TODO: 임시 데이터입니다. 이후 페이지 id에 따라서 데이터 받아온 후 화면에 뿌릴것
  const detail = {
    title: ' 강남 농구장',
    matchPoint: {
      playType: '3 vs 3',
      gender: '남녀 모두',
      place: '실내 코트',
      addFriend: '초대 가능',
    },

    date: '4월 24일 수요일 13:00',
    location: '서울 강남',
  }
  const { id } = useParams()
  //const { data } = useGameDetailQuery(id as string)

  console.log(id)

  // TODO: 각각의 영역마다 컴포넌트로 나눠서 관리 할 수 있을듯
  return (
    <CS.DefaultContainer>
      <S.Wrapper>
        <DetailTopTitle title={detail.title} />
        <S.InfoWrapper>
          <div>
            <MatchPoint matchPoint={detail.matchPoint} />
            {/* TODO: 매치 데이터 시각화 조건부 렌더링 구현 */}
            <MatchData />
            <LockMatchData />

            <KakaoMap lat={33.450701} lng={126.570667} />
          </div>
          <JoinGame
            date={detail.date}
            title={detail.title}
            location={detail.location}
          />
        </S.InfoWrapper>
      </S.Wrapper>
    </CS.DefaultContainer>
  )
}
