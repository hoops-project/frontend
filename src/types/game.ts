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
    ability: string
    createdDateTime: string
    gender: string
    mannerPoint: number | null
    nickName: string
    participantId: number
    playStyle: string
    status: string
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

export interface GameListData {
  gameId: number
  gameOwnerId: number
  myId: number
  title: string
  content: string
  headCount: number
  fieldStatus: string
  gender: string
  startDateTime: string
  createdDateTime: string
  deletedDateTime: string
  inviteYn: boolean
  address: string
  latitude: number
  longitude: number
  cityName: string
  matchFormat: string
}
