import { S } from './SearchInput.style.ts'
import SearchIcon from '../../assets/search-icon.svg'
import { useState } from 'react'
import { useDebounce } from '../../hooks/useDebounce.ts'
import { useSearchGameQuery } from '../../hooks/query/useSearchGameQuery.ts'
import { GameListData } from '../../types/game.ts'
import { CS } from '../../styles/commonStyle.ts'
import {
  convertGameType,
  convertGender,
} from '../../helper/convertValueToName.ts'

export default function SearchInput() {
  const [searchValue, setSearchValue] = useState<string>('')

  const query = useDebounce(searchValue, 500)

  const { searchResult } = useSearchGameQuery(query)

  const handleResultClick = () => {
    setSearchValue('')
  }

  return (
    <S.InputContainer>
      <S.SearchIcon src={SearchIcon} alt='Search icon' />
      <S.Search
        placeholder='지역으로 경기 검색'
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      {query && (
        <S.SearchResult>
          <S.QueryTitle>
            <span>{query}</span>
            <span> 매치</span>
          </S.QueryTitle>
          {searchResult?.length !== 0 ? (
            <>
              {searchResult?.map((result: GameListData) => (
                <CS.Link
                  key={result.gameId}
                  onClick={handleResultClick}
                  to={`/detail/${result.gameId}`}
                >
                  <span>{result.title}</span>
                  <div>
                    <span>{convertGameType(result.matchFormat)}</span>
                    <span>{convertGender(result.gender)}</span>
                    <span>{result.inviteYn ? '초대 가능' : '초대 불가능'}</span>
                  </div>
                </CS.Link>
              ))}
            </>
          ) : (
            <S.NoResult>결과 없음</S.NoResult>
          )}
        </S.SearchResult>
      )}
    </S.InputContainer>
  )
}
