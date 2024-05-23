import { defaultAxios } from '../../api/axiosInstance.ts'
import { END_POINT } from '../../constants/endPoint.ts'
import { useMutation } from '@tanstack/react-query'
import useToast from '../useToast.ts'
import { AxiosError } from 'axios'

export const useFindUserIdQuery = () => {
  const { toastError } = useToast()
  const getUserIdForEmail = async (email: string) => {
    const { data } = await defaultAxios.get(
      `${END_POINT.USER.FIND_ID}?email=${email}`
    )

    return data
  }

  const { mutate: findUserIdMutation, data: userId } = useMutation({
    mutationFn: getUserIdForEmail,

    onError: (error: AxiosError) => {
      console.error(error)
      toastError('오류가 발생했습니다.')
    },
  })

  return { findUserIdMutation, userId }
}
