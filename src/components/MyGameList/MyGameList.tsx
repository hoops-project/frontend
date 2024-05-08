import { S } from './MyGameList.style.ts'
import MyGameItem from '../MyGameItem/MyGameItem.tsx'
import { useState } from 'react'
import { Pagination } from '@mui/material'

export default function MyGameList() {
  const [selected, setSelected] = useState<number>(0)
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
        <Pagination count={5} />
      </S.ListContainer>
    </S.Wrapper>
  )
}
