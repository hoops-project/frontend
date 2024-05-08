import { CS } from '../../styles/commonStyle.ts'
import { S } from './MyGame.style.ts'
import MyGameList from '../../components/MyGameList/MyGameList.tsx'
import { Outlet } from 'react-router-dom'

export default function MyGame() {
  return (
    <CS.LargeContainer>
      <S.Wrapper>
        <MyGameList />
        <Outlet />
        <div></div>
      </S.Wrapper>
    </CS.LargeContainer>
  )
}
