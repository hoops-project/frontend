import stadiumIcon from '../../assets/ic_info_stadium.svg'
import genderIcon from '../../assets/ic_info_gender.svg'
import shoesIcon from '../../assets/ic_info_shoes.svg'
import maxPlayerIcon from '../../assets/ic_info_max_player_cnt.svg'
import girl from '../../assets/girl.svg'
import { S } from './MatchPoint.style.ts'

// TODO: 임시 데이터 타입 추후 수정 필요
interface MatchPointProps {
  playType: string
  gender: string
  place: string
  addFriend: string
}

export default function MatchPoint({
  matchPoint,
}: {
  matchPoint: MatchPointProps
}) {
  return (
    <S.MatchPoint>
      <p>매치 포인트</p>
      <S.PointWrapper>
        <S.Point>
          <div>
            <img src={stadiumIcon} alt={'경기 타입 아이콘'} />
            {matchPoint.playType}
          </div>
          <div>
            <img src={genderIcon} alt={'성별 아이콘'} />
            {matchPoint.gender}
          </div>
        </S.Point>
        <S.Point>
          <div>
            <img src={shoesIcon} alt={'실내외여부 아이콘'} />
            {matchPoint.place}
          </div>
          <div>
            <img src={maxPlayerIcon} alt={'초대여부 아이콘'} />
            {matchPoint.addFriend}
          </div>
        </S.Point>
      </S.PointWrapper>
      <S.Girl>
        <img src={girl} alt={'여성 아이콘'} />
        <p>아직 여성 플레이어는 0명이에요.</p>
      </S.Girl>
    </S.MatchPoint>
  )
}
