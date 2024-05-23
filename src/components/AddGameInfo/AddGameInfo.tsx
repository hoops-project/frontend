import TopNavTitle from '../common/TopNavTitle/TopNavTitle.tsx'
import GameSelectList from '../GameSelectList/GameSelectList.tsx'
import BasicInput from '../common/BasicInput/BasicInput.tsx'
import BasicTextArea from '../common/BasicTextArea/BasicTextArea.tsx'
import LocationSearchForm from '../LocationSearchForm/LocationSearchForm.tsx'
import BasicButton from '../common/BasicButton/BasicButton.tsx'
import { theme } from '../../styles/theme.ts'
import { useGameInfo } from '../../hooks/useGameInfo.ts'
import { useSelectBox } from '../../hooks/useSelectBox.ts'
import useToast from '../../hooks/useToast.ts'
import { useAddGameQuery } from '../../hooks/query/useAddGameQuery.ts'
import { S } from './AddGameInfo.style.ts'
import { validateGameInfo } from '../../helper/validateGameInfo.ts'

export default function AddGameInfo() {
  const {
    gameTitle,
    gameContent,
    address,
    handleGameTitleChange,
    setGameContent,
    setAddress,
  } = useGameInfo()
  const useGameSelect = useSelectBox()
  const { toastError } = useToast()
  const { addGameMutation } = useAddGameQuery()

  const handleAddGame = () => {
    const headCount = useGameSelect.totalPlayers
    const matchFormat = useGameSelect.gameType
    if (
      !validateGameInfo(
        gameTitle,
        gameContent,
        headCount,
        matchFormat,
        toastError
      )
    ) {
      return
    }

    const finalData = {
      ...address,
      ...useGameSelect,
      title: gameTitle,
      content: gameContent,
      region: 'temp',
      showOver: 'temp',
    }

    for (const value of Object.values(finalData)) {
      if (typeof value === 'string' && value.trim() === '') {
        toastError('모든 정보를 입력해 주세요!')
        return
      }
    }

    addGameMutation(finalData)
  }

  return (
    <S.Container>
      <TopNavTitle title={'팀원을 모을 경기를 생성해 보세요!'} />
      <GameSelectList selected={useGameSelect} />
      <div>
        <S.InputWrapper>
          <label htmlFor={'game-title'}>모임 이름</label>
          <BasicInput
            value={gameTitle}
            onChange={handleGameTitleChange}
            type={'text'}
            id={'game-title'}
            placeholder={'모임 이름을 설정하세요.'}
          />
          <label htmlFor={'game-content'}>경기 규칙</label>
          <BasicTextArea
            content={gameContent}
            setContent={setGameContent}
            placeholder={'경기 규칙을 적어주세요.'}
          />
        </S.InputWrapper>
        <LocationSearchForm address={address} setAddress={setAddress} />
      </div>
      <BasicButton
        type={'button'}
        $bgColor={theme.colors.blue}
        $fontcolor={theme.colors.white}
        $width={'100%'}
        onClick={handleAddGame}
      >
        모임 생성
      </BasicButton>
    </S.Container>
  )
}
