import React from 'react'
import BasicButton from '../common/BasicButton/BasicButton.tsx'
import { theme } from '../../styles/theme.ts'
import { S } from './FriendList.style.ts'
import useGetFriendsListQuery from '../../hooks/query/useGetFriendListQuery.ts'
import { axiosAuth } from '../../api/axiosInstance.ts'
import { END_POINT } from '../../constants/endPoint.ts'
import { UserInfoType } from '../../types/auth.ts'
import {
  convertAttributeToKorean,
  convertGenderToKorean,
  convertPlayStyleToKorean,
} from '../../helper/convertValueToName.ts'

const FriendList = () => {
  const { friendsListData, friendsListIsLoading, friendsListFetchNextPage } =
    useGetFriendsListQuery()

  const handleAddFriend = async (friendId: number) => {
    try {
      const response = await axiosAuth.post(
        `${END_POINT.FRIENDS.APPLY_FRIEND}`,
        { friendId }
      )
      console.log('Friend added:', response.data)
      friendsListFetchNextPage() // 데이터 갱신
    } catch (error) {
      console.error('Error adding friend:', error)
    }
  }

  if (friendsListIsLoading) {
    return <p>Loading...🏀</p>
  }

  const friends =
    friendsListData?.pages.flatMap((page) => page.myFriendList) ?? []

  // 친구 목록 / 검색 결과

  return (
    <S.ListBox>
      {friends.map((user: UserInfoType) => (
        <S.ListItem key={user.userId}>
          <p>{user.nickName}</p>
          <p>{user.rating || '0'}</p>
          <p>{convertGenderToKorean(user.gender)}</p>
          <p>{convertPlayStyleToKorean(user.playStyle)}</p>
          <p>{convertAttributeToKorean(user.ability)}</p>
          <BasicButton
            type='button'
            $bgColor={
              user.friendId === null ? theme.colors.blue : theme.colors.red
            }
            $borderColor={theme.colors.white}
            $width='10rem'
            $hoverBgColor={
              user.isRequestFriend
                ? theme.colors.gray_300
                : theme.colors.gray_300
            }
            $fontcolor={theme.colors.white}
            onClick={() => handleAddFriend(user.userId)}
          >
            {user.friendId === null ? '친구 신청' : '친구 삭제'}
          </BasicButton>
        </S.ListItem>
      ))}
    </S.ListBox>
  )
}

export default FriendList
