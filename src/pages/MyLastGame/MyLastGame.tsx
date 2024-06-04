import { SEO } from '../../components/SEO'
import MyLastGame from '../../components/common/MyLastGame/MyLastGame'

export default function MyLastGameList() {
  return (
    <div>
      <SEO title="지난 경기 리스트" description="지난 경기 리스트를 확인하고, 팀원을 평가할 수 있어요." />
      <MyLastGame />
    </div>
  )
}
