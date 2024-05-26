import { axiosAuth } from '../../api/axiosInstance.ts'
import { END_POINT } from '../../constants/endPoint.ts'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { QUERY_KEYS } from '../../constants/queryKeys.ts'
import useToast from '../useToast.ts'

export const useFriendRequestQuery = () => {
  const { toastSuccess, toastError } = useToast()
  const userPK = localStorage.getItem('userPK') as string
  const queryClient = useQueryClient()

  const getFriendRequest = async () => {
    const { data } = await axiosAuth.get(END_POINT.FRIENDS.REQUEST_FRIENDS_LIST)

    return data
  }

  const acceptRequest = async (friendId: number) => {
    const { data } = await axiosAuth.patch(END_POINT.FRIENDS.APPLY_ACCEPT, {
      friendId,
    })
    return data
  }

  const denyRequest = async (friendId: number) => {
    const { data } = await axiosAuth.patch(END_POINT.FRIENDS.APPLY_REJECT, {
      friendId,
    })
    return data
  }

  const { data: requestResult } = useQuery({
    queryKey: [QUERY_KEYS.GET_FRIEND_REQUEST_LIST, userPK],
    queryFn: getFriendRequest,
    select: (data) => data.requestFriendList,
  })

  const { mutate: acceptRequestMutation } = useMutation({
    mutationFn: acceptRequest,
    onSuccess: () => {
      toastSuccess('친구 신청이 완료 되었습니다!')
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.GET_FRIEND_REQUEST_LIST],
      })
    },
    onError: () => {
      toastError('문제가 발생했습니다.')
    },
  })

  const { mutate: denyRequestMutation } = useMutation({
    mutationFn: denyRequest,
    onSuccess: () => {
      toastSuccess('거절 완료 되었습니다!')
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.GET_FRIEND_REQUEST_LIST],
      })
    },
    onError: () => {
      toastError('문제가 발생했습니다.')
    },
  })

  return { requestResult, acceptRequestMutation, denyRequestMutation }
}
