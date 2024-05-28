import { axiosAuth } from '../../api/axiosInstance.ts'
import { END_POINT } from '../../constants/endPoint.ts'
import { useQuery } from '@tanstack/react-query'
import { QUERY_KEYS } from '../../constants/queryKeys.ts'

export const useParticipantGameQuery = (gameId: number, userId: number) => {
  const userPK = localStorage.getItem('userPK')

  const getParticipantRequest = async () => {
    const { data } = await axiosAuth.get(
      `${END_POINT.GAME_CREATOR.GAME_JOIN_REQUEST_LIST}${gameId}`
    )
    return data
  }

  const { data: participantRequestList } = useQuery({
    queryKey: [QUERY_KEYS.GET_PARTICIPANT_REQUEST_LIST, gameId],
    queryFn: getParticipantRequest,
    enabled: Number(userPK) === userId,
  })
  return { participantRequestList }
}
