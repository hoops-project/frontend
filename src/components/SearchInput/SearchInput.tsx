import { S } from './SearchInput.style.ts'
import SearchIcon from '../../assets/search-icon.svg'

export default function SearchInput() {
  return (
    <S.InputContainer>
      <S.SearchIcon src={SearchIcon} alt='Search icon' />
      <S.Search placeholder='지역, 모임 이름으로 검색' />
    </S.InputContainer>
  )
}
