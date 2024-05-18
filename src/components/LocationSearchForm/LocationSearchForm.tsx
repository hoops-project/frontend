import checkIcon from '../../assets/check-mark.webp'
import BasicInput from '../common/BasicInput/BasicInput.tsx'
import BasicButton from '../common/BasicButton/BasicButton.tsx'
import { theme } from '../../styles/theme.ts'
import SearchPlaceKakaoMap from '../KakaoMap/SearchPlaceKakaoMap/SearchPlaceKakaoMap.tsx'
import React, { useState } from 'react'
import { AddressProps } from '../../types/map.ts'
import { S } from './LocationSearchForm.style.ts'

export default function LocationSearchForm({
  address,
  setAddress,
}: {
  address: AddressProps
  setAddress: React.Dispatch<React.SetStateAction<AddressProps>>
}) {
  const [query, setQuery] = useState<string>('')
  const [searchValue, setSearchValue] = useState<string>('')

  const submitQuery = (e: React.FocusEvent<HTMLFormElement>) => {
    e.preventDefault()
    setQuery(searchValue)
  }

  return (
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
  )
}
