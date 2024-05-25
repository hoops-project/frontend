import { axiosAuth } from '../../api/axiosInstance.ts'
import { END_POINT } from '../../constants/endPoint.ts'
import { useQuery } from '@tanstack/react-query'
import { QUERY_KEYS } from '../../constants/queryKeys.ts'

export const useSearchFriendsQuery = (query: string | undefined) => {
  const searchFriend = async () => {
    const { data } = await axiosAuth.get(
      `${END_POINT.FRIENDS.FRIEND_SEARCH}${query}`
    )
    return data
  }

  const { data: searchResult } = useQuery({
    queryKey: [QUERY_KEYS.SEARCH_FRIENDS, query],
    queryFn: searchFriend,
    enabled: !!query,
  })

  return { searchResult }
}
