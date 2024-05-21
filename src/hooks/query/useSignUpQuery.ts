import { useMutation } from '@tanstack/react-query'
import { defaultAxios } from '../../api/axiosInstance.ts'
import { END_POINT } from '../../constants/endPoint.ts'
import { SignUpSelectInfo, SignUpType } from '../../types/auth.ts'
import { useDuplicate } from '../useDuplicate.ts'
import useToast from '../useToast.ts'
import {
  convertAttribute,
  convertPlayStyle,
} from '../../helper/convertValueToName.ts'
import { useNavigate } from 'react-router-dom'

export const useSignUpQuery = () => {
  const { toastError, toastSuccess } = useToast()
  const navigate = useNavigate()
  const {
    emailPassed,
    idPassed,
    nicknamePassed,
    setNicknamePassed,
    setIdPassed,
    setEmailPassed,
  } = useDuplicate()

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
      `${END_POINT.USER.CHECK_NICKNAME}?nickName=${nickName}`
    )
    return data
  }

  const signUp = async (signUpData: SignUpType & SignUpSelectInfo) => {
    const { data } = await defaultAxios.post(END_POINT.USER.SIGN_UP, {
      id: signUpData.id,
      email: signUpData.email,
      password: signUpData.password,
      passwordCheck: signUpData.passwordConfirm,
      gender: signUpData.gender === '남자' ? 'MALE' : 'FEMALE',
      nickName: signUpData.nickname,
      name: signUpData.nickname,
      birthday: signUpData.birthday,
      playStyle: convertPlayStyle(signUpData.playStyle),
      ability: convertAttribute(signUpData.abilities),
    })
    return data
  }

  const { mutate: idDuplicateMutation } = useMutation({
    mutationFn: checkId,
    onSuccess: (data) => {
      if (data === true) {
        setIdPassed(true)
        toastSuccess('사용가능한 아이디 입니다.')
      } else {
        toastError('이미 존재하는 아이디 입니다.')
      }
    },
    onError: (error) => {
      toastError('일시적 오류가 발생했습니다.')
      throw error
    },
  })

  const { mutate: emailDuplicateMutation } = useMutation({
    mutationFn: checkEmail,
    onSuccess: (data) => {
      if (data === true) {
        setEmailPassed(true)
        toastSuccess('사용가능한 이메일 입니다.')
      } else {
        toastError('이미 존재하는 이메일 입니다.')
      }
    },
    onError: (error) => {
      toastError('일시적 오류가 발생했습니다.')
      throw error
    },
  })

  const { mutate: nickNameDuplicateMutation } = useMutation({
    mutationFn: checkNickName,
    onSuccess: (data) => {
      if (data === true) {
        setNicknamePassed(true)
        toastSuccess('사용가능한 닉네임 입니다.')
      } else {
        toastError('이미 존재하는 닉네임 입니다.')
      }
    },
    onError: (error) => {
      toastError('일시적 오류가 발생했습니다.')
      throw error
    },
  })

  const { mutate: signUpMutation } = useMutation({
    mutationFn: signUp,
    onSuccess: () => {
      toastSuccess('회원가입 성공. 가입한 메일함을 확인해 주세요.')
      navigate('/')
    },
    onError: (error) => {
      toastError('회원가입중 일시적 문제가 발생했습니다.')
      throw error
    },
  })

  return {
    idDuplicateMutation,
    emailDuplicateMutation,
    nickNameDuplicateMutation,
    signUpMutation,
    emailPassed,
    idPassed,
    nicknamePassed,
  }
}
