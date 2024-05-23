import { defaultAxios } from '../../api/axiosInstance.ts'
import { END_POINT } from '../../constants/endPoint.ts'
import { useMutation } from '@tanstack/react-query'
import useToast from '../useToast.ts'
import { AxiosError } from 'axios'
import { useNavigate } from 'react-router-dom'

export const useFindAccount = () => {
  const { toastError, toastSuccess } = useToast()
  const navigate = useNavigate()
  const getUserIdForEmail = async (email: string) => {
    const { data } = await defaultAxios.get(
      `${END_POINT.USER.FIND_ID}?email=${email}`
    )

    return data
  }

  const getUserPasswordForId = async (id: string) => {
    const { data } = await defaultAxios.get(
      `${END_POINT.USER.FIND_PASSWORD}?id=${id}`
    )

    return data
  }

  const {
    mutate: findUserIdMutation,
    data: userId,
    isPending: idPending,
  } = useMutation({
    mutationFn: getUserIdForEmail,

    onError: (error: AxiosError) => {
      console.error(error)
      toastError('오류가 발생했습니다.')
    },
  })

  const {
    mutate: findUserPasswordMutation,
    data: userPassword,
    isPending: pswPending,
  } = useMutation({
    mutationFn: getUserPasswordForId,
    onSuccess: (data) => {
      if (data.statusCode === 404) {
        toastError(data.errorMessage)
        return
      }

      toastSuccess('가입한 이메일로 새로운 비밀번호가 전송되었습니다.')
      navigate('/sign-in')
    },
    onError: (error: AxiosError) => {
      console.error(error)
      toastError('오류가 발생했습니다.')
    },
  })

  return {
    findUserIdMutation,
    userId,
    userPassword,
    findUserPasswordMutation,
    pswPending,
    idPending,
  }
}
