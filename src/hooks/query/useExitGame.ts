import { axiosAuth } from '../../api/axiosInstance.ts'
import { END_POINT } from '../../constants/endPoint.ts'
import { useMutation } from '@tanstack/react-query'

export const useExitGame = () => {
  const handleExitRoom = async (gameId: number) => {
    const { data } = await axiosAuth.patch(END_POINT.GAME_CREATOR.GAME_DELETE, {
      gameId,
    })
    return data
  }

  const { mutate: exitGameMutate } = useMutation({ mutationFn: handleExitRoom })

  return { exitGameMutate }
}
