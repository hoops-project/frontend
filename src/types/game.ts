import React from 'react'

export interface MyGameItemProps {
  gameInfo: {
    gameId: number
    title: string
    startDateTime: string
  }
  selected: number
  setSelected: React.Dispatch<React.SetStateAction<number>>
}

export interface MyGameUserList {
  userInfo: {
    userId: number
    name: string
    gameId: number
    rate: number
  }[]
}
