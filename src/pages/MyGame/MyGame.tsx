import { CS } from '../../styles/commonStyle.ts'
import { S } from './MyGame.style.ts'
import MyGameList from '../../components/MyGameList/MyGameList.tsx'
import { Outlet } from 'react-router-dom'
import ParticipationGameList from '../../components/ParticipationGameList/ParticipationGameList.tsx'
import { SEO } from '../../components/SEO/index.tsx'

export default function MyGame() {
  return (
    <CS.LargeContainer>
      <SEO title="나의 경기 리스트" description="경기에ㅔ 참여하고 팀원들과 소통해요." />
      <S.Wrapper>
        <MyGameList />
        <Outlet />
        <ParticipationGameList />
      </S.Wrapper>
    </CS.LargeContainer>
  )
}
