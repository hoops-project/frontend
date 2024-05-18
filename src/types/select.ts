import React from 'react'

// 공통 속성을 가진 기본 인터페이스
interface BaseSelectedProps {
  gender: string
  gamePlace: string
  gameType: string
  setGender: React.Dispatch<React.SetStateAction<string>>
  setGamePlace: React.Dispatch<React.SetStateAction<string>>
  setGameType: React.Dispatch<React.SetStateAction<string>>
}

interface GameSelected extends BaseSelectedProps {
  time: string
  date: string
  addFriends: string
  totalPlayers: string
  setTime: React.Dispatch<React.SetStateAction<string>>
  setDate: React.Dispatch<React.SetStateAction<string>>
  setAddFriends: React.Dispatch<React.SetStateAction<string>>
  setTotalPlayers: React.Dispatch<React.SetStateAction<string>>
}

interface MainSelected extends BaseSelectedProps {
  region: string
  showOver: string
  setRegion: React.Dispatch<React.SetStateAction<string>>
  setShowOver: React.Dispatch<React.SetStateAction<string>>
}

export interface GameSelectedProps {
  selected: GameSelected
}

export interface MainSelectedProps {
  selected: MainSelected
}

export interface StyleSelectedProps {
  disabled?: boolean
  selected: {
    handleGenderSelect: (index: number) => void
    handleStyleSelect: (index: number) => void
    handleAbilitiesSelect: (index: number) => void
    genderSelected: number
    styleSelected: number
    abilitiesSelected: number
  }
}
