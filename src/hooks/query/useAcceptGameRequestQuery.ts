import { axiosAuth } from '../../api/axiosInstance.ts'
import { END_POINT } from '../../constants/endPoint.ts'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import useToast from '../useToast.ts'
import { QUERY_KEYS } from '../../constants/queryKeys.ts'

export const useAcceptGameRequestQuery = () => {
  const { toastSuccess, toastError } = useToast()
  const queryClient = useQueryClient()

  const acceptRequest = async (participantId: number) => {
    const { data } = await axiosAuth.patch(
      END_POINT.GAME_CREATOR.ACCEPT_PARTICIPANT,
      { participantId }
    )
    return data
  }

  const denyRequest = async (participantId: number) => {
    const { data } = await axiosAuth.patch(
      END_POINT.GAME_CREATOR.REJECT_PARTICIPANT,
      { participantId }
    )
    return data
  }

  const { mutate: acceptMutate } = useMutation({
    mutationFn: acceptRequest,
    onSuccess: () => {
      toastSuccess('수락이 완료 되었습니다!')
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.GET_PARTICIPANT_REQUEST_LIST],
      })
    },
    onError: () => {
      toastError('문제가 발생했습니다.')
    },
  })

  const { mutate: denyMutate } = useMutation({
    mutationFn: denyRequest,
    onSuccess: () => {
      toastSuccess('거절 완료 되었습니다!')
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.GET_PARTICIPANT_REQUEST_LIST],
      })
    },
    onError: () => {
      toastError('문제가 발생했습니다.')
    },
  })

  return { acceptMutate, denyMutate }
}
