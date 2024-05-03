import { CS } from '../../styles/commonStyle.ts'
import TopNavTitle from '../../components/common/TopNavTitle/TopNavTitle.tsx'

export default function AddGame() {
  return (
    <CS.DefaultContainer>
      <TopNavTitle title={'팀원을 모을 경기를 생성해 보세요!'} />
    </CS.DefaultContainer>
  )
}
