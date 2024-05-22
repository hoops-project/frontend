import { defaultAxios } from '../../api/axiosInstance.ts'
import { END_POINT } from '../../constants/endPoint.ts'
import { useQuery } from '@tanstack/react-query'
import { QUERY_KEYS } from '../../constants/queryKeys.ts'

export const useGameDetailQuery = (gameId: string) => {
  const getGameDetail = async () => {
    const { data } = await defaultAxios.get(
      `${END_POINT.GAME_CREATOR.GAME_DETAILS}${gameId}`
    )
    return data
  }

  const { data } = useQuery({
    queryKey: [QUERY_KEYS.GET_GAME_DETAIL],
    queryFn: getGameDetail,
  })

  return { data }
}
