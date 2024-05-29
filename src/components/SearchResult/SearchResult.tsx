import React from 'react';
import { useSearchFriendsQuery } from '../../hooks/query/useSearchFriendsQuery.ts';
import { S } from './SearchResult.style.ts';
import { theme } from '../../styles/theme.ts';
import { UserInfoType } from '../../types/auth.ts';
import BasicButton from '../common/BasicButton/BasicButton.tsx';
import useFriendActions from '../../hooks/query/useFriendActions.ts';

interface SearchFriendListProps {
  query: string;
}

const SearchFriendList: React.FC<SearchFriendListProps> = ({ query }) => {
  const { searchResult } = useSearchFriendsQuery(query);
  const { handleAddFriend, handleRemoveFriend, addedFriends, removedFriends } = useFriendActions();

  const friends = searchResult?.content ?? [];
  console.log(friends);

  return (
    query ? (
      <S.ListBox>
        {friends.map((user: UserInfoType) => {
          const isAdded = addedFriends.includes(user.userId);
          const isRemoved = removedFriends.includes(user.userId);
          const isFriend = user.friendId !== null;

          return (
            <S.ListItem key={user.userId}>
              <p>{user.nickName}</p>
              <p>{user.rating}</p>
              <p>{user.gender}</p>
              <p>{user.playStyle}</p>
              <p>{user.ability}</p>
              <BasicButton
                type="button"
                $bgColor={
                  isAdded
                    ? theme.colors.green
                    : isRemoved
                    ? theme.colors.gray_300
                    : isFriend
                    ? theme.colors.red
                    : theme.colors.blue
                }
                $borderColor={theme.colors.white}
                $width="10rem"
                $hoverBgColor={theme.colors.gray_300}
                $fontcolor={theme.colors.white}
                onClick={() => (isFriend ? handleRemoveFriend(user.userId) : handleAddFriend(user.userId))}
                disabled={isAdded || isRemoved}
              >
                {isAdded
                  ? '신청 완료'
                  : isRemoved
                  ? '삭제 완료'
                  : isFriend
                  ? '친구 삭제'
                  : '친구 신청'}
              </BasicButton>
            </S.ListItem>
          );
        })}
      </S.ListBox>
    ) : null
  );
};

export default SearchFriendList;
