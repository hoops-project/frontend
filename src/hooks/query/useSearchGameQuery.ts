import { defaultAxios } from '../../api/axiosInstance.ts'
import { END_POINT } from '../../constants/endPoint.ts'
import { useQuery } from '@tanstack/react-query'
import { QUERY_KEYS } from '../../constants/queryKeys.ts'

export const useSearchGameQuery = (query: string | undefined) => {
  const searchGame = async () => {
    const { data } = await defaultAxios.get(
      `${END_POINT.GAME_USER.ADDRESS_SEARCH}${query}`
    )
    return data
  }

  const { data: searchResult } = useQuery({
    queryKey: [QUERY_KEYS.SEARCH_GAME, query],
    queryFn: searchGame,
    enabled: !!query,
  })

  return { searchResult }
}
