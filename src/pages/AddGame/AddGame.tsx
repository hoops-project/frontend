import { CS } from '../../styles/commonStyle.ts'
import TopNavTitle from '../../components/common/TopNavTitle/TopNavTitle.tsx'
import GameSelectList from '../../components/GameSelectList/GameSelectList.tsx'
import { useSelectBox } from '../../hooks/useSelectBox.ts'
import BasicInput from '../../components/common/BasicInput/BasicInput.tsx'
import { S } from './AddGame.style.ts'
import BasicButton from '../../components/common/BasicButton/BasicButton.tsx'
import { theme } from '../../styles/theme.ts'
import { AddressProps } from '../../types/map.ts'
import LocationSearchForm from '../../components/LocationSearchForm/LocationSearchForm.tsx'
import { useState } from 'react'
import BasicTextArea from '../../components/common/BasicTextArea/BasicTextArea.tsx'
import useToast from '../../hooks/useToast.ts'
import { useAddGameQuery } from '../../hooks/query/useAddGameQuery.ts'

export default function AddGame() {
  const [gameTitle, setGameTitle] = useState<string>('')
  const [gameContent, setGameContent] = useState<string>('')

  const [address, setAddress] = useState<AddressProps>({
    placeName: '',
    address: '',
    lat: '',
    lng: '',
  })
  const useGameSelect = useSelectBox()
  const { toastError } = useToast()
  const { addGameMutation } = useAddGameQuery()

  const handleAddGame = () => {
    const headCount = useGameSelect.totalPlayers
    const matchFormat = useGameSelect.gameType

    if (matchFormat === 'THREEONTHREE') {
      if (Number(headCount) < 6 || Number(headCount) > 9) {
        toastError('3대3에서의 인원은 6~9명 사이 입니다.')
        return
      }
    } else if (matchFormat === 'FIVEONFIVE') {
      if (Number(headCount) < 10 || Number(headCount) > 15) {
        toastError('5대5에서의 인원은 10~15명 사이 입니다.')
        return
      }
    }

    const combineData = {
      ...address,
      ...useGameSelect,
      title: gameTitle,
      content: gameContent,
      region: 'temp',
      showOver: 'temp',
    }

    for (const value of Object.values(combineData)) {
      if (typeof value === 'string' && value.trim() === '') {
        toastError('모든 정보를 입력해 주세요!')
        return
      }
    }

    addGameMutation(combineData)
  }

  return (
    <CS.DefaultContainer>
      <S.container>
        <TopNavTitle title={'팀원을 모을 경기를 생성해 보세요!'} />
        <GameSelectList selected={useGameSelect} />
        <div>
          <S.InputWrapper>
            <label htmlFor={'game-title'}>모임 이름</label>
            <BasicInput
              value={gameTitle}
              onChange={(e) => setGameTitle(e.target.value)}
              type={'text'}
              id={'game-title'}
              placeholder={'모임 이름을 설정하세요.'}
            />
            <label htmlFor={'game-content'}>모임 이름</label>
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
      </S.container>
    </CS.DefaultContainer>
  )
}
