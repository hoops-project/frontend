import { useState, useEffect } from 'react';
import { S } from './SearchTab.style';
import SearchIcon from '../../assets/search-icon.svg';
import MyFriend from '../common/MyFriend/MyFriend';
import { useDebounce } from '../../hooks/useDebounce.ts';
import SearchFriendList from '../SearchResult/SearchResult.tsx';


export default function SearchTab() {
  const [searchValue, setSearchValue] = useState<string>('');
  const query = useDebounce(searchValue, 500);

  return (
    <S.Wrapper>
      <S.SearchInputContainer>
        <S.Search
          placeholder='더 많은 친구를 검색해보세요!'
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <S.SearchIcon src={SearchIcon} alt='Search icon' />
      </S.SearchInputContainer>
      <MyFriend>
        <SearchFriendList query={query} />
      </MyFriend>
    </S.Wrapper>
  );
}