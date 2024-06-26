import { axiosAuth } from '../../api/axiosInstance.ts'
import { END_POINT } from '../../constants/endPoint.ts'
import { GameData } from '../../types/game.ts'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import useToast from '../useToast.ts'
import { useNavigate } from 'react-router-dom'
import { QUERY_KEYS } from '../../constants/queryKeys.ts'

export const useEditGameQuery = () => {
  const { toastError, toastSuccess } = useToast()
  const navigate = useNavigate()
  const queryClient = useQueryClient()

  const editGame = async (gameData: Partial<GameData>) => {
    const { data } = await axiosAuth.put(END_POINT.GAME_CREATOR.GAME_UPDATE, {
      title: gameData.title,
      content: gameData.content,
      headCount: Number(gameData.totalPlayers),
      fieldStatus: gameData.gamePlace,
      gender: gameData.gender,
      startDateTime: `${gameData.date}T${gameData.time}:00`,
      inviteYn: gameData.addFriends === 'TRUE',
      address: gameData.address,
      matchFormat: gameData.gameType,
      latitude: Number(gameData.lat),
      longitude: Number(gameData.lng),
      placeName: gameData.placeName,
      gameId: gameData.gameId,
    })

    return data
  }

  const { mutate: editGameMutation } = useMutation({
    mutationFn: editGame,
    onSuccess: (data, variables) => {
      if (data.statusCode === 400) {
        toastError(`${data.errorMessage}`)
        return
      }
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.GET_GAME_LIST] })
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.GET_GAME_DETAIL],
      })
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.SEARCH_GAME],
      })
      navigate(`/detail/${variables.gameId}`)
      toastSuccess('경기가 수정되었습니다!')
    },
    onError: (error: AxiosError) => {
      if (error?.response?.status === 400) {
        toastError('오류가 발생했습니다.')
      }
    },
  })

  return { editGameMutation }
}
