import { useMutation } from '@tanstack/react-query'
import { defaultAxios } from '../../api/axiosInstance.ts'
import { END_POINT } from '../../constants/endPoint.ts'
import { SignUpSelectInfo, SignUpType } from '../../types/auth.ts'
import { useDuplicate } from '../useDuplicate.ts'

export const useSignUpQuery = () => {
  const { setNicknamePassed, setIdPassed, setEmailPassed } = useDuplicate()

  const checkId = async (id: string) => {
    const { data } = await defaultAxios.get(
      `${END_POINT.USER.CHECK_ID}?id=${id}`
    )
    return data
  }

  const checkEmail = async (email: string) => {
    const { data } = await defaultAxios.get(
      `${END_POINT.USER.CHECK_EMAIL}?email=${email}`
    )
    return data
  }

  const checkNickName = async (nickName: string) => {
    const { data } = await defaultAxios.get(
      `${END_POINT.USER.CHECK_NICKNAME}?nickname=${nickName}`
    )
    return data
  }

  const signUp = async (signUpData: SignUpType & SignUpSelectInfo) => {
    const { data } = await defaultAxios.post(END_POINT.USER.SIGN_UP, {
      signUpData,
    })
    return data
  }

  const { mutate: idDuplicateMutation } = useMutation({
    mutationFn: checkId,
    onSuccess: () => {
      console.log('성공')
      setIdPassed(true)
    },
    onError: (error) => console.error(error),
  })

  const { mutate: emailDuplicateMutation } = useMutation({
    mutationFn: checkEmail,
    onSuccess: () => {
      console.log('성공')
      setEmailPassed(true)
    },
    onError: (error) => console.error(error),
  })

  const { mutate: nickNameDuplicateMutation } = useMutation({
    mutationFn: checkNickName,
    onSuccess: () => {
      console.log('성공')
      setNicknamePassed(true)
    },
    onError: (error) => console.error(error),
  })

  const { mutate: signUpMutation } = useMutation({
    mutationFn: signUp,
    onSuccess: () => console.log('성공'),
    onError: (error) => console.error(error),
  })

  return {
    idDuplicateMutation,
    emailDuplicateMutation,
    nickNameDuplicateMutation,
    signUpMutation,
  }
}
