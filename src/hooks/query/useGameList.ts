import { defaultAxios } from '../../api/axiosInstance.ts'
import { END_POINT } from '../../constants/endPoint.ts'
import { useInfiniteQuery, useQueryClient } from '@tanstack/react-query'
import { QUERY_KEYS } from '../../constants/queryKeys.ts'
import { useEffect } from 'react'

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
  const queryClient = useQueryClient()
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

  useEffect(() => {
    queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.GET_GAME_LIST] })
  }, [
    gameFilter.localData,
    gameFilter.cityName,
    gameFilter.fieldStatus,
    gameFilter.gender,
    gameFilter.matchFormat,
    queryClient,
  ])

  return { data, fetchNextPage, hasNextPage }
}
