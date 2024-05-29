import { S } from './MyGameList.style.ts'
import MyGameItem from '../MyGameItem/MyGameItem.tsx'
import React, { useState } from 'react'
import { Grid, Pagination } from '@mui/material'
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
          {chatList?.content?.length > 0 ? (
            <>
              {chatList?.content.map((gameItem: GameListData) => (
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
              <p>아직 경기가 없습니다.</p>
            </S.Loading>
          )}
        </div>
        <>
          <Grid container justifyContent='center'>
            <Grid item>
              <Pagination
                className='custom-pagination'
                size={'large'}
                count={chatList?.totalPages}
                page={page}
                onChange={handlePageChange}
              />
            </Grid>
          </Grid>
        </>
      </S.ListContainer>
      <GameUserList userInfo={joinUser} />
    </S.Wrapper>
  )
}
