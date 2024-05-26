import { axiosAuth } from '../../api/axiosInstance.ts'
import { END_POINT } from '../../constants/endPoint.ts'
import { useQuery } from '@tanstack/react-query'
import { QUERY_KEYS } from '../../constants/queryKeys.ts'

export const useGameInviteQuery = () => {
  const getGameInviteList = async () => {
    const { data } = await axiosAuth.get(END_POINT.INVITE.INVITE_LIST)
    return data
  }

  const { data: inviteList } = useQuery({
    queryKey: [QUERY_KEYS.GET_INVITE_LIST],
    queryFn: getGameInviteList,
    select: (data) => data.inviteList,
  })

  return { inviteList }
}
