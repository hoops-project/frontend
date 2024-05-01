import { S } from './Main.style.ts'
import MainNav from '../../components/MainNav/MainNav.tsx'

export default function Main() {
  return (
    <S.Container>
      <div>
        <MainNav />
      </div>
    </S.Container>
  )
}
