import { CS } from '../../styles/commonStyle.ts'
import TopNavTitle from '../../components/common/TopNavTitle/TopNavTitle.tsx'
import GameSelectList from '../../components/GameSelectList/GameSelectList.tsx'
import { useSelectBox } from '../../hooks/useSelectBox.ts'

export default function AddGame() {
  const useGameSelect = useSelectBox()

  return (
    <CS.DefaultContainer>
      <TopNavTitle title={'팀원을 모을 경기를 생성해 보세요!'} />
      <GameSelectList selected={useGameSelect} />
    </CS.DefaultContainer>
  )
}
