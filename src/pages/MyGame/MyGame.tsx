import { CS } from '../../styles/commonStyle.ts'
import { S } from './MyGame.style.ts'
import MyGameList from '../../components/MyGameList/MyGameList.tsx'

export default function MyGame() {
  return (
    <CS.LargeContainer>
      <S.Wrapper>
        <MyGameList />
        <div></div>
        <div></div>
      </S.Wrapper>
    </CS.LargeContainer>
  )
}
