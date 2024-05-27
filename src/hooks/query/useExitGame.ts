import { axiosAuth } from '../../api/axiosInstance.ts'
import { END_POINT } from '../../constants/endPoint.ts'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { QUERY_KEYS } from '../../constants/queryKeys.ts'

export const useExitGame = () => {
  const queryClient = useQueryClient()
  const handleExitRoom = async (gameId: number) => {
    const { data } = await axiosAuth.patch(END_POINT.GAME_CREATOR.GAME_DELETE, {
      gameId,
    })
    return data
  }

  const { mutate: exitGameMutate } = useMutation({
    mutationFn: handleExitRoom,
    onSuccess: () =>
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.GET_GAME_LIST],
      }),
  })

  return { exitGameMutate }
}
