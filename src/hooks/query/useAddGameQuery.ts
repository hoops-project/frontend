import { axiosAuth } from '../../api/axiosInstance.ts'
import { END_POINT } from '../../constants/endPoint.ts'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { GameData } from '../../types/game.ts'
import useToast from '../useToast.ts'
import { AxiosError } from 'axios'
import { useNavigate } from 'react-router-dom'
import { QUERY_KEYS } from '../../constants/queryKeys.ts'

export const useAddGameQuery = () => {
  const { toastError, toastSuccess } = useToast()
  const navigate = useNavigate()
  const queryClient = useQueryClient()

  const addGame = async (gameData: Partial<GameData>) => {
    const { data } = await axiosAuth.post(END_POINT.GAME_CREATOR.CREATE_GAME, {
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
    })

    return data
  }

  const { mutate: addGameMutation } = useMutation({
    mutationFn: addGame,
    onSuccess: (data) => {
      if (data.statusCode === 400) {
        toastError(`${data.errorMessage}`)
        return
      }
      if (data.gameId) {
        const addNewChat = async (gameId: number) => {
          const { data } = await axiosAuth.post(END_POINT.CHAT.CREATE_CHAT, {
            gameId,
          })

          return data
        }
        addNewChat(data.gameId)
        queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.GET_CHAT_LIST] })
      }
      navigate('/my-game')
      toastSuccess('경기가 생성되었습니다!')
    },
    onError: (error: AxiosError) => {
      if (error?.response?.status === 400) {
        toastError('오류가 발생했습니다.')
      }
    },
  })

  return { addGameMutation }
}
