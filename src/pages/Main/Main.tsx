import { S } from './Main.style.ts'
import MainNav from '../../components/MainNav/MainNav.tsx'
import MainCarousel from '../../components/MainCarousel/MainCarousel.tsx'
import Calender from '../../components/Calender/Calender.tsx'
import { useMainSelect } from '../../hooks/useMainSelect.ts'
import MainSelectList from '../../components/MainSelectList/MainSelectList.tsx'
import { Suspense } from 'react'
import MatchItem from '../../components/MatchItem/MatchItem.tsx'
import IdSearchForm from '../../components/IdSearchForm/IdSearchForm.tsx'
export default function Main() {
  const selected = useMainSelect()

  return (
    <S.Container>
      <div>
        <IdSearchForm />
        <MainNav />
        <MainCarousel />
        <Calender />
        <MainSelectList selected={selected} />
        <Suspense fallback={<div>임시 fallback</div>}>
          {Array.from({ length: 3 }, (_, index) => (
            // NOTICE: 임시 배열 설정
            <MatchItem key={index} time={'01:00'} title={'강남 농구장'} />
          ))}
        </Suspense>
      </div>
    </S.Container>
  )
}
