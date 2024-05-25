import React from 'react';
import { useSearchFriendsQuery } from '../../hooks/query/useSearchFriendsQuery.ts';
import { axiosAuth } from '../../api/axiosInstance.ts';
import { S } from './SearchResult.style.ts';
import { END_POINT } from '../../constants/endPoint.ts';
import { theme } from '../../styles/theme.ts';
import { UserInfoType } from '../../types/auth.ts';

import BasicButton from '../common/BasicButton/BasicButton.tsx';

interface SearchFriendListProps {
  query: string;
}

const SearchFriendList: React.FC<SearchFriendListProps> = ({ query }) => {
  const { searchResult } = useSearchFriendsQuery(query);

  const handleAddFriend = async (friendId: number) => {
    try {
      const response = await axiosAuth.post(`${END_POINT.FRIENDS.APPLY_FRIEND}`, { friendId });
      console.log('Friend added:', response.data);
      // 데이터 갱신 로직 추가 가능
    } catch (error) {
      console.error('Error adding friend:', error);
    }
  };
  const friends = searchResult?.content ?? [];
  console.log(friends);


  return (
    query ? <S.ListBox>
      {friends.map((user: UserInfoType) => (
        <S.ListItem key={user.userId}>
          <p>{user.nickName}</p>
          <p>{user.rating}</p>
          <p>{user.gender}</p>
          <p>{user.playStyle}</p>
          <p>{user.ability}</p>
          <BasicButton
            type="button"
            $bgColor={user.friendId === null ? theme.colors.blue : theme.colors.red}
            $borderColor={theme.colors.white}
            $width="10rem"
            $hoverBgColor={theme.colors.gray_300}
            $fontcolor={theme.colors.white}
            onClick={() => handleAddFriend(user.userId)}
          >
            {user.friendId === null ? '친구 신청' : '친구 삭제'}
          </BasicButton>
        </S.ListItem>
      ))}
    </S.ListBox>: null
  );
};

export default SearchFriendList;
