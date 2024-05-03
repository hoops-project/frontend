import { useEffect, useState } from 'react'
import { useKakaoLoader } from 'react-kakao-maps-sdk'

interface UseSearchPlacesOptions {
  query?: string
}

export interface Marker {
  position: {
    lat: number
    lng: number
  }
  content: {
    placeName: string
    address: string
    id: string
    lat: string
    lng: string
  }
}

export const useSearchPlaces = ({ query }: UseSearchPlacesOptions) => {
  const [,] = useKakaoLoader({
    appkey: import.meta.env.VITE_KAKAO_MAP_APP_KEY,
    libraries: ['services'],
  })

  const [map, setMap] = useState<kakao.maps.Map>()
  const [info, setInfo] = useState<Marker | null>(null)
  const [markers, setMarkers] = useState<Marker[]>([])

  useEffect(() => {
    if (!map) return

    const ps = new kakao.maps.services.Places()

    ps.keywordSearch(
      query ? query : '강남 농구장',
      (data, status, _pagination) => {
        if (status === kakao.maps.services.Status.OK) {
          console.log(data)
          const newMarkers: Marker[] = []
          const bounds = new kakao.maps.LatLngBounds()

          for (let i = 0; i < data.length; i++) {
            const { y, x, place_name, address_name, id } = data[i]

            newMarkers.push({
              position: {
                lat: Number(y),
                lng: Number(x),
              },
              content: {
                placeName: place_name,
                address: address_name,
                id: id,
                lat: y,
                lng: x,
              },
            })

            bounds.extend(new kakao.maps.LatLng(Number(y), Number(x)))
          }

          setMarkers(newMarkers)
          map.setBounds(bounds)
        } else if (status === kakao.maps.services.Status.ZERO_RESULT) {
          alert('검색 결과가 존재하지 않습니다.')
          return
        } else if (status === kakao.maps.services.Status.ERROR) {
          alert('검색 결과 중 오류가 발생했습니다.')
          return
        }
      }
    )
  }, [map, query])

  return { info, setInfo, markers, setMap }
}
