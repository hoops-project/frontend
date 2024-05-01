import { S } from './Main.style.ts'
import MainNav from '../../components/MainNav/MainNav.tsx'
import MainCarousel from '../../components/MainCarousel/MainCarousel.tsx'
import Calender from '../../components/Calender/Calender.tsx'
import { useMainSelect } from '../../hooks/useMainSelect.ts'
import MainSelectList from '../../components/MainSelectList/MainSelectList.tsx'

export default function Main() {
  const selected = useMainSelect()

  return (
    <S.Container>
      <div>
        <MainNav />
        <MainCarousel />
        <Calender />
        <MainSelectList selected={selected} />
      </div>
    </S.Container>
  )
}
