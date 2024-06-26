import { Map, MapMarker } from 'react-kakao-maps-sdk'
import { useSearchPlaces } from '../../../hooks/useSearchPlacesOptions.ts'
import { S } from './SearchPlaceKakaoMap.style.ts'
import BasicButton from '../../common/BasicButton/BasicButton.tsx'
import { theme } from '../../../styles/theme.ts'
import React, { useState } from 'react'
import { AddressProps } from '../../../types/map.ts'

export default function SearchPlaceKakaoMap({
  query,
  setAddress,
}: {
  query: string
  setAddress: React.Dispatch<React.SetStateAction<AddressProps>>
}) {
  const [isSelect, setIsSelect] = useState<boolean>(false)
  const { info, setInfo, markers, setMap } = useSearchPlaces({
    query: query ? query : '강남 농구장',
  })

  return (
    <>
      <Map
        center={{ lat: 37.566826, lng: 126.9786567 }}
        style={{ width: '100%', height: '350px' }}
        level={3}
        onCreate={setMap}
      >
        {markers.map((marker) => (
          <MapMarker
            key={`marker-${marker.content}-${marker.position.lat},${marker.position.lng}`}
            position={marker.position}
            onClick={() => {
              setIsSelect(false)
              setInfo(marker)
            }}
          >
            {info && info.content === marker.content && (
              <S.PlaceInfo key={marker.content.id}>
                <p>{marker.content.placeName}</p>
                <BasicButton
                  type={'button'}
                  $bgColor={
                    isSelect ? theme.colors.blue_100 : theme.colors.blue
                  }
                  $fontcolor={theme.colors.white}
                  $width={'5rem'}
                  onClick={() => {
                    setIsSelect(true)
                    setAddress({
                      address: marker.content.address,
                      lat: marker.content.lat,
                      lng: marker.content.lng,
                      placeName: marker.content.placeName,
                    })
                  }}
                >
                  선택
                </BasicButton>
              </S.PlaceInfo>
            )}
          </MapMarker>
        ))}
      </Map>
    </>
  )
}
