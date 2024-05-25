import { axiosAuth } from '../../api/axiosInstance.ts'
import { END_POINT } from '../../constants/endPoint.ts'
import { useQuery } from '@tanstack/react-query'
import { QUERY_KEYS } from '../../constants/queryKeys.ts'

export const useGetChatListQuery = (page = 1, size = 5) => {
  const getUserChatList = async () => {
    const { data } = await axiosAuth.get(
      `${END_POINT.GAME_USER.CURRENT_GAME_LIST}?page=${page}&size=${size}`
    )

    return data
  }

  const { data: chatList } = useQuery({
    queryKey: [QUERY_KEYS.GET_GAME_LIST, page],
    queryFn: getUserChatList,
    select: (data) => data.content,
  })

  return { chatList }
}
