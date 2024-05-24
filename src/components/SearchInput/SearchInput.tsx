import { S } from './SearchInput.style.ts'
import SearchIcon from '../../assets/search-icon.svg'
import { useState } from 'react'
import { useDebounce } from '../../hooks/useDebounce.ts'
import { useSearchGameQuery } from '../../hooks/query/useSearchGameQuery.ts'

export default function SearchInput() {
  const [searchValue, setSearchValue] = useState<string>('')

  const query = useDebounce(searchValue, 500)

  const { searchResult } = useSearchGameQuery(query)

  console.log(searchResult)

  return (
    <>
      <S.InputContainer>
        <S.SearchIcon src={SearchIcon} alt='Search icon' />
        <S.Search
          placeholder='지역으로 경기 검색'
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </S.InputContainer>
      {query && <div>{query}</div>}
    </>
  )
}
