import { useMutation, useQuery } from '@tanstack/react-query'
import { QUERY_KEYS } from '../../constants/queryKeys.ts'
import { axiosAuth } from '../../api/axiosInstance.ts'
import { END_POINT } from '../../constants/endPoint.ts'
import dayjs from 'dayjs'
import {
  convertAttribute,
  convertPlayStyle,
  convertUserGender,
} from '../../helper/convertValueToName.ts'
import useToast from '../useToast.ts'
import { AxiosError } from 'axios'

interface UserInfoProps {
  gender: string
  playStyle: string
  abilities: string
  name: string
  password: string
  nickname: string
  birthday: string
}

export const useUserInfoQuery = () => {
  const { toastError, toastSuccess } = useToast()
  const token = localStorage.getItem('Access-Token')

  const getUserInfo = async () => {
    const { data } = await axiosAuth.get(END_POINT.USER.USER_INFO)
    return data
  }

  const patchUserInfo = async (userInfos: UserInfoProps) => {
    const { data } = await axiosAuth.patch(END_POINT.USER.USER_EDIT, {
      nickName: userInfos.nickname,
      birthday: dayjs(userInfos.birthday).format('YYYYMMDD'),
      gender: convertUserGender(userInfos.gender),
      playStyle: convertPlayStyle(userInfos.playStyle),
      ability: convertAttribute(userInfos.abilities),
      password: userInfos.password,
      name: userInfos.name,
    })
    return data
  }

  const { data: userInfo } = useQuery({
    queryKey: [QUERY_KEYS.GET_USER_INFO],
    queryFn: getUserInfo,
    enabled: !!token,
  })

  const { mutate: patchedUserInfo } = useMutation({
    mutationFn: patchUserInfo,
    onSuccess: () => {
      toastSuccess('회원 수정이 완료되었습니다.')
    },
    onError: (error: AxiosError) => {
      if (error) {
        toastError('오류가 발생했습니다. 다시 시도해 주세요.')
      }
      console.error(error)
    },
  })

  return { userInfo, patchedUserInfo }
}
