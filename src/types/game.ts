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

export interface GameData {
  addFriends: string
  address: string
  date: string
  gamePlace: string
  gameType: string
  gender: string
  lat: string
  lng: string
  placeName: string
  region: string
  showOver: string
  time: string
  title: string
  content: string
  totalPlayers: string
  gameId?: number
}
