import { defaultAxios } from '../../api/axiosInstance.ts'
import { END_POINT } from '../../constants/endPoint.ts'
import { useInfiniteQuery } from '@tanstack/react-query'
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
  const getGameList = async (page = 1, size = 2) => {
    try {
      const response = await defaultAxios.get(
        `${END_POINT.GAME_USER.GAME_SEARCH}?localDate=${gameFilter.localData}&cityName=${gameFilter.cityName}&fieldStatus=${gameFilter.fieldStatus}&gender=${gameFilter.gender}&matchFormat=${gameFilter.matchFormat}&page=${page}&size=${size}`
      )
      return response.data
    } catch (e: unknown) {
      console.error(e)
    }
  }

  const { data, fetchNextPage, hasNextPage } = useInfiniteQuery({
    queryKey: [QUERY_KEYS.GET_GAME_LIST],
    queryFn: ({ pageParam = 1 }) => getGameList(pageParam, 2),
    getNextPageParam: (lastPage, allPages) => {
      const nextPage = allPages.length + 1
      const maxPage = lastPage.totalPages

      return nextPage <= maxPage ? nextPage : undefined
    },
    initialPageParam: 1,
  })

  return { data, fetchNextPage, hasNextPage }
}
