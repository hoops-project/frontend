import { InviteFriendType } from '../../types/auth.ts'
import { S } from '../FriendList/FriendList.style.ts'
import BasicButton from '../common/BasicButton/BasicButton.tsx'
import { theme } from '../../styles/theme.ts'
import React from 'react'
import {
  convertAttributeToKorean,
  convertGenderToKorean,
  convertPlayStyleToKorean,
} from '../../helper/convertValueToName.ts'
import { useInviteFriendQuery } from '../../hooks/query/useInviteFriendQuery.ts'
import { useParams } from 'react-router-dom'
import { useInfiniteScroll } from '../../hooks/useInfiniteScroll.ts'

export default function InviteFriendList() {
  const { id: gameId } = useParams()

  const { data, fetchNextPage, hasNextPage, InviteFriendMutate } =
    useInviteFriendQuery(gameId)
  const { loader } = useInfiniteScroll({
    fetchNextPage,
    hasNextPage,
  })

  const handleInviteFriend = (userId: number) => {
    InviteFriendMutate(userId)
  }

  return (
    <S.ListBox>
      {data?.pages?.map((page, index) => (
        <div key={index}>
          {page?.content?.map((user: InviteFriendType) => (
            <S.ListItem key={user.userId}>
              <p>{user.nickName}</p>
              <p>{user.mannerPoint || '0.0'}</p>
              <p>{convertGenderToKorean(user.gender)}</p>
              <p>{convertPlayStyleToKorean(user.playStyle)}</p>
              <p>{convertAttributeToKorean(user.ability)}</p>
              <BasicButton
                type='button'
                $bgColor={user.status ? theme.colors.red : theme.colors.blue}
                $borderColor={theme.colors.white}
                $width='10rem'
                $fontcolor={theme.colors.white}
                onClick={() => handleInviteFriend(user.userId)}
              >
                {user.status ? '초대완료' : '초대'}
              </BasicButton>
            </S.ListItem>
          ))}
        </div>
      ))}
      <div ref={loader} />
    </S.ListBox>
  )
}
