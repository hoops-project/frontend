import { defaultAxios } from '../../api/axiosInstance.ts'
import { END_POINT } from '../../constants/endPoint.ts'
import { useQuery } from '@tanstack/react-query'
import { QUERY_KEYS } from '../../constants/queryKeys.ts'

interface GameListProps {
  gameFilter: {
    localData: string
    cityName?: string
    fieldStatus?: string
    gender?: string
    matchFormat?: string
  }
}

export const useGameList = ({ gameFilter }: GameListProps) => {
  const getGameList = async () => {
    try {
      const res = await defaultAxios.get(
        `${END_POINT.GAME_USER.GAME_SEARCH}?localDate=${gameFilter.localData}&cityName=${gameFilter.cityName}&fieldStatus=${gameFilter.fieldStatus}&gender=${gameFilter.gender}&matchFormat=${gameFilter.matchFormat}`
      )
      return res.data
    } catch (e: unknown) {
      console.error(e)
    }
  }

  const { data } = useQuery({
    queryKey: [QUERY_KEYS.GET_GAME_LIST],
    queryFn: getGameList,
  })

  return data
}
