import { S } from './SearchTab.style'
import SearchIcon from '../../assets/search-icon.svg'
import MyFriend from '../common/MyFriend/MyFriend'
import FriendList from '../FriendList/FriendList.tsx'

export default function SearchTab() {
  return (
    <S.Wrapper>
      <S.SearchInputContainer>
        <S.Search placeholder='더 많은 친구를 검색해보세요!' />
        <S.SearchIcon src={SearchIcon} alt='Search icon' />
      </S.SearchInputContainer>
      <MyFriend>
        <FriendList isAddFriend />
      </MyFriend>
    </S.Wrapper>
  )
}
