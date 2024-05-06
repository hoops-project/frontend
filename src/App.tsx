import MainRouter from './routes/MainRouter.tsx'
import { S } from './App.style.ts'
import { useEffect } from 'react'
import axios from 'axios'

export default function App() {
  useEffect(() => {
    const test = async () => {
      const data = await axios.get('/users')
      console.log(data.data)
    }
    test()
  }, [])

  return (
    <S.RootContainer>
      <MainRouter />
    </S.RootContainer>
  )
}
