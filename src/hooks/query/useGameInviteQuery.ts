import { axiosAuth } from '../../api/axiosInstance.ts'
import { END_POINT } from '../../constants/endPoint.ts'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { QUERY_KEYS } from '../../constants/queryKeys.ts'
import useToast from '../useToast.ts'

export const useGameInviteQuery = () => {
  const { toastSuccess, toastError } = useToast()
  const queryClient = useQueryClient()

  const getGameInviteList = async () => {
    const { data } = await axiosAuth.get(END_POINT.INVITE.INVITE_LIST)
    return data
  }

  const acceptInvite = async (inviteId: number) => {
    const { data } = await axiosAuth.patch(END_POINT.INVITE.ACCEPT, {
      inviteId,
    })
    return data
  }

  const denyInvite = async (inviteId: number) => {
    const { data } = await axiosAuth.patch(END_POINT.INVITE.REJECT, {
      inviteId,
    })
    return data
  }

  const { data: inviteList } = useQuery({
    queryKey: [QUERY_KEYS.GET_INVITE_LIST],
    queryFn: getGameInviteList,
    select: (data) => data.inviteList,
  })

  const { mutate: acceptInviteMutation } = useMutation({
    mutationFn: acceptInvite,
    onSuccess: () => {
      toastSuccess('수락되었습니다.')
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.GET_INVITE_LIST] })
    },
  })

  const { mutate: denyMutation } = useMutation({
    mutationFn: denyInvite,
    onSuccess: () => {
      toastSuccess('거절 되었습니다.')
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.GET_INVITE_LIST] })
    },
  })

  return { inviteList, acceptInviteMutation, denyMutation }
}
