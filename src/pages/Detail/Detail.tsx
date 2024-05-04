import { CS } from '../../styles/commonStyle.ts'
import { S } from './Detail.style.ts'
import background from '../../assets/Background.png'
import genderIcon from '../../assets/ic_info_gender.svg'
import stadiumIcon from '../../assets/ic_info_stadium.svg'
import shoesIcon from '../../assets/ic_info_shoes.svg'
import maxPlayerIcon from '../../assets/ic_info_max_player_cnt.svg'
import girl from '../../assets/girl.svg'

export default function Detail() {
  // NOTICE: 임시 데이터
  const detail = {
    title: '강남 농구장',
    matchPoint: {
      playType: '3 vs 3',
      gender: '남녀 모두',
      place: '실내 코트',
      addFriend: '초대 가능',
    },
  }

  return (
    <CS.DefaultContainer>
      <S.Wrapper>
        <S.TopBackDiv>
          <img src={background} alt={'배경사진'} />
          <S.TopTitleDiv>
            <h2>{detail.title}</h2>
          </S.TopTitleDiv>
        </S.TopBackDiv>
        <S.InfoWrapper>
          <div>
            <S.MatchPoint>
              <p>매치 포인트</p>
              <S.PointWrapper>
                <S.Point>
                  <div>
                    <img src={stadiumIcon} alt={'경기 타입 아이콘'} />
                    {detail.matchPoint.playType}
                  </div>
                  <div>
                    <img src={genderIcon} alt={'성별 아이콘'} />
                    {detail.matchPoint.gender}
                  </div>
                </S.Point>
                <S.Point>
                  <div>
                    <img src={shoesIcon} alt={'실내외여부 아이콘'} />
                    {detail.matchPoint.place}
                  </div>
                  <div>
                    <img src={maxPlayerIcon} alt={'초대여부 아이콘'} />
                    {detail.matchPoint.addFriend}
                  </div>
                </S.Point>
              </S.PointWrapper>
              <S.Girl>
                <img src={girl} alt={'여성 아이콘'} />
                <p>아직 여성 플레이어는 0명이에요.</p>
              </S.Girl>
            </S.MatchPoint>
            <S.MatchData>
              <p>메치 데이터</p>
              <div>
                <p></p>
              </div>
            </S.MatchData>
          </div>
          <S.StickyDiv></S.StickyDiv>
        </S.InfoWrapper>
      </S.Wrapper>
    </CS.DefaultContainer>
  )
}
