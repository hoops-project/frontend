import Header from './layout/Header/Header.tsx'
import MainRouter from './routes/MainRouter.tsx'
import Footer from './layout/Footer/Footer.tsx'
import { S } from './App.style.ts'

export default function App() {
  return (
    <S.RootContainer>
      <Header />
      <MainRouter />
      <Footer />
    </S.RootContainer>
  )
}
