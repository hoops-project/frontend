import { useInfiniteQuery } from '@tanstack/react-query'
import { axiosAuth } from '../../api/axiosInstance.ts'
import { END_POINT } from '../../constants/endPoint.ts'
import { QUERY_KEYS } from '../../constants/queryKeys.ts'

export const useGetReportList = () => {
  const getReportList = async (page = 0, size = 10) => {
    const { data } = await axiosAuth.get(
      `${END_POINT.REPORT.REPORT}?page=${page}&size=${size}`
    )
    return data
  }

  const {
    data: reportedList,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteQuery({
    queryKey: [QUERY_KEYS.GET_REPORT_LIST],

    queryFn: ({ pageParam = 1 }) => getReportList(pageParam, 10),

    getNextPageParam: (lastPage, allPages) => {
      const nextPage = allPages.length + 1
      const maxPage = lastPage.totalPages
      return nextPage <= maxPage ? nextPage : undefined
    },

    initialPageParam: 0,
  })

  return { reportedList, fetchNextPage, hasNextPage }
}
