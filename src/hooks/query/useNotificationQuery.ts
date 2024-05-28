import { axiosAuth } from '../../api/axiosInstance.ts'
import { END_POINT } from '../../constants/endPoint.ts'
import { useQuery } from '@tanstack/react-query'
import { QUERY_KEYS } from '../../constants/queryKeys.ts'

export const useNotificationQuery = () => {
  const getNotification = async () => {
    const { data } = await axiosAuth.get(
      END_POINT.NOTIFICATION.GET_NOTIFICATION
    )
    return data
  }

  const { data: notificationsResult } = useQuery({
    queryKey: [QUERY_KEYS.GET_NOTIFICATION],
    queryFn: getNotification,
    staleTime: 5000,
  })

  return { notificationsResult }
}
