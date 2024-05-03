import { CS } from '../../styles/commonStyle.ts'
import TopNavTitle from '../../components/common/TopNavTitle/TopNavTitle.tsx'
import GameSelectList from '../../components/GameSelectList/GameSelectList.tsx'
import { useSelectBox } from '../../hooks/useSelectBox.ts'
import BasicInput from '../../components/common/BasicInput/BasicInput.tsx'
import React, { useState } from 'react'
import { S } from './AddGame.style.ts'
import BasicButton from '../../components/common/BasicButton/BasicButton.tsx'
import { theme } from '../../styles/theme.ts'
import SearchPlaceKakaoMap from '../../components/KakaoMap/SearchPlaceKakaoMap/SearchPlaceKakaoMap.tsx'
import checkIcon from '../../assets/check-mark.webp'

export interface AddressProps {
  placeName: string
  address: string
  lat: string
  lng: string
}

export default function AddGame() {
  const [gameTitle, setGameTitle] = useState<string>('')
  const [query, setQuery] = useState<string>('')
  const [searchValue, setSearchValue] = useState<string>('')
  const [address, setAddress] = useState<AddressProps>({
    placeName: '',
    address: '',
    lat: '',
    lng: '',
  })
  const useGameSelect = useSelectBox()

  const submitQuery = (e: React.FocusEvent<HTMLFormElement>) => {
    e.preventDefault()
    setQuery(searchValue)
  }

  const handleAddGame = () => {
    // NOTICE: 서버에 보내야할 정보는 address 와 useGameSelect,gameTitle 에 담겨 있음
    // TODO: 빈값 체크 후 서버에 보내는 로직을 이 아래부터 작성
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
          <S.Form onSubmit={submitQuery}>
            <S.Location>
              <label htmlFor={'game-place'}>위치</label>
              {address.address !== '' && (
                <div>
                  <span>{address.address}</span>
                  <span>{address.placeName}</span>
                  <img src={checkIcon} alt={'체크 아이콘'} />
                </div>
              )}
            </S.Location>
            <div>
              <BasicInput
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                type={'text'}
                id={'game-place'}
                placeholder={'장소명으로 검색해 주세요.'}
              />
              <BasicButton
                type={'submit'}
                $bgColor={theme.colors.blue_100}
                $width={'20rem'}
                $fontcolor={theme.colors.blue}
              >
                검색
              </BasicButton>
            </div>
            <S.KakaoMap>
              <SearchPlaceKakaoMap query={query} setAddress={setAddress} />
            </S.KakaoMap>
          </S.Form>
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
