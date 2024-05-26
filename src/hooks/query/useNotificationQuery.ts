import { axiosAuth } from '../../api/axiosInstance.ts'
import { END_POINT } from '../../constants/endPoint.ts'
import { useQuery } from '@tanstack/react-query'

export const useNotificationQuery = () => {
  const getNotification = async () => {
    const { data } = await axiosAuth.get(
      END_POINT.NOTIFICATION.GET_NOTIFICATION
    )
    return data
  }

  const { data: notificationsResult } = useQuery({
    queryKey: [''],
    queryFn: getNotification,
  })

  return { notificationsResult }
}
