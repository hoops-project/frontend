import { S } from './Main.style.ts'
import MainNav from '../../components/MainNav/MainNav.tsx'
import MainCarousel from '../../components/MainCarousel/MainCarousel.tsx'
import Calender from '../../components/Calender/Calender.tsx'

export default function Main() {
  return (
    <S.Container>
      <div>
        <MainNav />
        <MainCarousel />
        <Calender />
      </div>
    </S.Container>
  )
}
