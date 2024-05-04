import MainRouter from './routes/MainRouter.tsx'
import { S } from './App.style.ts'

export default function App() {
  return (
    <S.RootContainer>
      <MainRouter />
    </S.RootContainer>
  )
}
