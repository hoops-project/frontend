import { useMutation } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'
import { axiosAuth } from '../../api/axiosInstance'
import { END_POINT } from '../../constants/endPoint'
import useToast from '../useToast'
import { QUERY_KEYS } from '../../constants/queryKeys'
import { AxiosError } from 'axios'

const fetchAPI = async (gameId: string) => {
  const res = await axiosAuth.post(`${END_POINT.GAME_USER.GAME_IN_OUT}`, {
    gameId,
  })
  return res.data
}

const useJoinGameQuery = () => {
  const navigate = useNavigate()
  const { toastSuccess, toastError } = useToast()

  const { mutate: joinGame } = useMutation({
    mutationKey: [QUERY_KEYS.JOIN_GAME],
    mutationFn: (gameId: string) => fetchAPI(gameId),
    onSuccess: (_data, variables) => {
      toastSuccess('경기 참가 신청이 완료되었습니다🏀')
      navigate(`/detail/${variables}`)
    },
    onError: (error) => {
      if (error instanceof AxiosError) {
        toastError(error.response?.data.errorMessage)
      }
    },
  })

  return { joinGame }
}

export default useJoinGameQuery
