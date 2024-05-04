import { CS } from '../../styles/commonStyle.ts'
import { S } from './Detail.style.ts'
import background from '../../assets/Background.png'

export default function Detail() {
  // NOTICE: 임시 데이터
  const detail = {
    title: '강남 농구장',
    matchPoint: {
      playType: '3 vs 3',
      gender: '남녀 모두',
      place: '실내 코트',
      addFriend: true,
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
            <S.MatchPoint></S.MatchPoint>
            <S.MatchData></S.MatchData>
          </div>
          <S.StickyDiv></S.StickyDiv>
        </S.InfoWrapper>
      </S.Wrapper>
    </CS.DefaultContainer>
  )
}
