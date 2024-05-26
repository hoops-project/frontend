import { axiosAuth } from '../../api/axiosInstance.ts'
import { END_POINT } from '../../constants/endPoint.ts'
import { useQuery } from '@tanstack/react-query'
import { QUERY_KEYS } from '../../constants/queryKeys.ts'

export const useFriendRequestQuery = () => {
  const getFriendRequest = async () => {
    const { data } = await axiosAuth.get(END_POINT.FRIENDS.REQUEST_FRIENDS_LIST)

    return data
  }

  const { data: requestResult } = useQuery({
    queryKey: [QUERY_KEYS.GET_FRIEND_REQUEST_LIST],
    queryFn: getFriendRequest,
    select: (data) => data.requestFriendList,
  })

  return { requestResult }
}
