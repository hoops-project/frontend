import MainNav from '../../components/MainNav/MainNav.tsx'
import MainCarousel from '../../components/MainCarousel/MainCarousel.tsx'
import Calender from '../../components/Calender/Calender.tsx'
import { useSelectBox } from '../../hooks/useSelectBox.ts'
import MainSelectList from '../../components/MainSelectList/MainSelectList.tsx'
import { Suspense } from 'react'
import MatchItem from '../../components/MatchItem/MatchItem.tsx'
import { CS } from '../../styles/commonStyle.ts'
import { S } from './Main.style.ts'

export default function Main() {
  const selected = useSelectBox()

  // NOTICE: 임시 데이터
  const match = {
    id: 1,
    time: '13:00',
    title: '강남 농구장',
  }

  return (
    <CS.DefaultContainer>
      <S.Wrapper>
        <MainNav />
        <MainCarousel />
        <Calender />
        <MainSelectList selected={selected} />
        <Suspense fallback={<div>임시 fallback</div>}>
          {Array.from({ length: 10 }, (_, index) => (
            // NOTICE: 임시 배열 설정
            <MatchItem key={index} match={match} />
          ))}
        </Suspense>
      </S.Wrapper>
    </CS.DefaultContainer>
  )
}
