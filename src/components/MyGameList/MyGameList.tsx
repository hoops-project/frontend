import { S } from './MyGameList.style.ts'
import MyGameItem from '../MyGameItem/MyGameItem.tsx'
import React, { useState } from 'react'
import { Pagination, Stack } from '@mui/material'
import GameUserList from '../GameUserList/GameUserList.tsx'

export default function MyGameList() {
  const [selected, setSelected] = useState<number>(0)
  const [page, setPage] = React.useState(1)

  const handlePageChange = (
    _event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setPage(value)
  }

  const TestData = [
    {
      gameId: 1,
      title: '강남 농구장',
      startDateTime: '2020.1.1',
    },
    {
      gameId: 2,
      title: '노원 농구장',
      startDateTime: '2020.2.1',
    },
    {
      gameId: 3,
      title: '한강 농구장',
      startDateTime: '2020.2.1',
    },
    {
      gameId: 4,
      title: '잠실 농구장',
      startDateTime: '2020.2.1',
    },
    {
      gameId: 5,
      title: '의정부 농구장',
      startDateTime: '2020.2.1',
    },
  ]

  const TestData2 = [
    {
      userId: 1,
      gameId: 1,
      name: '오신웅',
      rate: 4.5,
    },
    {
      userId: 2,
      gameId: 1,
      name: '김영찬',
      rate: 4.5,
    },
    {
      userId: 3,
      gameId: 1,
      name: '이솔',
      rate: 4.5,
    },
  ]

  return (
    <S.Wrapper>
      <p>나의 경기</p>
      <S.ListContainer>
        <div>
          {TestData.map((gameItem) => (
            <MyGameItem
              key={gameItem.gameId}
              gameInfo={gameItem}
              selected={selected}
              setSelected={setSelected}
            />
          ))}
        </div>
        <div>
          <Stack spacing={1}>
            <Pagination count={5} page={page} onChange={handlePageChange} />
          </Stack>
        </div>
      </S.ListContainer>
      <GameUserList userInfo={TestData2} />
    </S.Wrapper>
  )
}
