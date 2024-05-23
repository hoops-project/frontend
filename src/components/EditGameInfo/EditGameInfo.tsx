import { S } from '../AddGameInfo/AddGameInfo.style.ts'
import TopNavTitle from '../common/TopNavTitle/TopNavTitle.tsx'
import GameSelectList from '../GameSelectList/GameSelectList.tsx'
import BasicInput from '../common/BasicInput/BasicInput.tsx'
import BasicTextArea from '../common/BasicTextArea/BasicTextArea.tsx'
import LocationSearchForm from '../LocationSearchForm/LocationSearchForm.tsx'
import BasicButton from '../common/BasicButton/BasicButton.tsx'
import { theme } from '../../styles/theme.ts'
import { useParams } from 'react-router-dom'
import { GameDetails } from '../../types/detail.ts'
import { useGameDetailQuery } from '../../hooks/query/useGameDetailQuery.ts'
import useToast from '../../hooks/useToast.ts'
import { useGameInfo } from '../../hooks/useGameInfo.ts'
import { useSelectBox } from '../../hooks/useSelectBox.ts'
import { validateGameInfo } from '../../helper/validateGameInfo.ts'
import { useEffect } from 'react'
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'
import dayjs from 'dayjs'
import { useEditGameQuery } from '../../hooks/query/useEditGameQuery.ts'

dayjs.extend(utc)
dayjs.extend(timezone)

export default function EditGameInfo() {
  const { id } = useParams()
  const { editGameMutation } = useEditGameQuery()
  const { gameDetail }: { gameDetail: GameDetails } = useGameDetailQuery(id)
  const { toastError } = useToast()

  const {
    gameTitle,
    gameContent,
    address,
    handleGameTitleChange,
    setGameContent,
    setAddress,
  } = useGameInfo(gameDetail?.title, gameDetail?.content, {
    placeName: gameDetail?.placeName,
    address: gameDetail?.address,
    lat: String(gameDetail?.latitude),
    lng: String(gameDetail?.latitude),
  })
  const useGameSelect = useSelectBox()

  const handleAddGame = () => {
    if (
      !validateGameInfo(
        gameTitle,
        gameContent,
        useGameSelect.totalPlayers,
        useGameSelect.gameType,
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
      gameId: gameDetail?.gameId,
    }

    for (const value of Object.values(finalData)) {
      if (typeof value === 'string' && value.trim() === '') {
        toastError('모든 정보를 입력해 주세요!')
        return
      }
    }

    console.log(finalData)
    editGameMutation(finalData)
  }

  useEffect(() => {
    if (gameDetail) {
      useGameSelect.setGender(gameDetail.gender)
      useGameSelect.setGameType(gameDetail.matchFormat)
      useGameSelect.setTotalPlayers(String(gameDetail.headCount))
      useGameSelect.setAddFriends(gameDetail.inviteYn ? 'TRUE' : 'FALSE')
      useGameSelect.setGamePlace(gameDetail.fieldStatus)
      useGameSelect.setDate(
        dayjs(gameDetail.startDateTime).format('YYYY-MM-DD')
      )
      useGameSelect.setTime(dayjs(gameDetail.startDateTime).format('HH:mm'))
    }
  }, [gameDetail])

  return (
    <S.Container>
      <TopNavTitle title={'생성한 경기를 수정합니다.'} />
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
        모임 수정
      </BasicButton>
    </S.Container>
  )
}
