import { axiosAuth } from '../../api/axiosInstance.ts'
import { END_POINT } from '../../constants/endPoint.ts'
import {
  useInfiniteQuery,
  useMutation,
  useQueryClient,
} from '@tanstack/react-query'
import { QUERY_KEYS } from '../../constants/queryKeys.ts'
import useToast from '../useToast.ts'

export const useInviteFriendQuery = (gameId: string | undefined) => {
  const { toastSuccess, toastError } = useToast()
  const queryClient = useQueryClient()

  const getInviteFriendList = async (page = 1, size = 10) => {
    const { data } = await axiosAuth.get(
      `${END_POINT.GAME_USER.INVITE_FRIENDS_LIST}${gameId}&page=${page}&size=${size}`
    )
    return data
  }

  const inviteFriend = async (friendId: number) => {
    const { data } = await axiosAuth.post(END_POINT.INVITE.REQUEST, {
      gameId: Number(gameId),
      receiverUserId: friendId,
    })
    return data
  }

  const { data, fetchNextPage, hasNextPage } = useInfiniteQuery({
    queryKey: [QUERY_KEYS.GET_INVITE_FRIENDS_LIST, gameId],
    queryFn: ({ pageParam = 0 }) => getInviteFriendList(pageParam, 10),
    getNextPageParam: (lastPage, allPages) => {
      const nextPage = allPages.length + 1
      const maxPage = lastPage.totalPages
      return nextPage <= maxPage ? nextPage : undefined
    },
    initialPageParam: 0,
    enabled: !!gameId,
  })

  const { mutate: InviteFriendMutate } = useMutation({
    mutationFn: inviteFriend,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.GET_INVITE_FRIENDS_LIST, gameId],
      })
      toastSuccess('친구 초대 요청 완료')
    },
    onError: () => {
      toastError('초대가 불가능한 경기 입니다.')
    },
  })

  return { data, fetchNextPage, hasNextPage, InviteFriendMutate }
}
