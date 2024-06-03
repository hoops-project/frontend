import { CS } from '../../styles/commonStyle.ts'
import AddGameInfo from '../../components/AddGameInfo/AddGameInfo.tsx'
import { SEO } from '../../components/SEO/index.tsx'

export default function AddGame() {
  return (
    <CS.DefaultContainer>
      <SEO title="경기 생성" description="경기를 생성하고 새로운 팀원들을 만나요." />
      <AddGameInfo />
    </CS.DefaultContainer>
  )
}
