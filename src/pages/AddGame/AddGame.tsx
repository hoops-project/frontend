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

export default function AddGame() {
  const [gameTitle, setGameTitle] = useState<string>('')

  const [address, setAddress] = useState<AddressProps>({
    placeName: '',
    address: '',
    lat: '',
    lng: '',
  })
  const useGameSelect = useSelectBox()

  const handleAddGame = () => {
    // NOTICE: 서버에 보내야할 정보는 address 와 useGameSelect,gameTitle 에 담겨 있음
    // TODO: 빈값 체크 후 서버에 보내는 로직을 이 아래부터 작성
    console.log(gameTitle, address, useGameSelect)
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
