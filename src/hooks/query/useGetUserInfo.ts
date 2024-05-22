import { axiosAuth } from '../../api/axiosInstance.ts'
import { END_POINT } from '../../constants/endPoint.ts'
import { useQuery } from '@tanstack/react-query'

export const useGetUserInfo = () => {
  const token = localStorage.getItem('Access-Token')
  const getUserInfo = async () => {
    const { data } = await axiosAuth.get(END_POINT.USER.USER_INFO)
    return data
  }

  const { data: userInfo } = useQuery({
    queryKey: ['s'],
    queryFn: getUserInfo,
    enabled: !!token,
  })

  return { userInfo }
}
