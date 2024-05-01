import React from 'react'

type Select = {
  region: string
  showOver: string
  gender: string
  gamePlace: string
  gameType: string
  setRegion: React.Dispatch<React.SetStateAction<string>>
  setShowOver: React.Dispatch<React.SetStateAction<string>>
  setGender: React.Dispatch<React.SetStateAction<string>>
  setGamePlace: React.Dispatch<React.SetStateAction<string>>
  setGameType: React.Dispatch<React.SetStateAction<string>>
}

export interface Selected {
  selected: Select
}
