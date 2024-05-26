import { S } from './MyGameList.style.ts'
import MyGameItem from '../MyGameItem/MyGameItem.tsx'
import React, { useState } from 'react'
import { Pagination, Stack } from '@mui/material'
import GameUserList from '../GameUserList/GameUserList.tsx'
import { useGetChatListQuery } from '../../hooks/query/useGetChatListQuery.ts'
import { GameListData } from '../../types/game.ts'
import { useParams } from 'react-router-dom'

export default function MyGameList() {
  const { id } = useParams()
  const [selected, setSelected] = useState<number>(0)
  const [page, setPage] = React.useState(1)

  const handlePageChange = (
    _event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setPage(value)
  }

  const { chatList, joinUser } = useGetChatListQuery(page, 5, id)

  return (
    <S.Wrapper>
      <p>나의 경기</p>
      <S.ListContainer>
        <div>
          {chatList ? (
            <>
              {chatList?.map((gameItem: GameListData) => (
                <MyGameItem
                  key={gameItem.gameId}
                  gameInfo={gameItem}
                  selected={selected}
                  setSelected={setSelected}
                />
              ))}
            </>
          ) : (
            <S.Loading>
              {/* TODO: 로당을 위한 컴포넌트 추가해서 교체할것*/}
              로딩중...
            </S.Loading>
          )}
        </div>
        <div>
          <Stack spacing={1}>
            <Pagination
              size={'large'}
              count={5}
              page={page}
              onChange={handlePageChange}
            />
          </Stack>
        </div>
      </S.ListContainer>
      <GameUserList userInfo={joinUser} />
    </S.Wrapper>
  )
}
