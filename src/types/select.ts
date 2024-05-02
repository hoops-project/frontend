import React from 'react'

export interface Selected {
  selected: {
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
}

export interface StyleSelectedProps {
  selected: {
    handleGenderSelect: (index: number) => void
    handleStyleSelect: (index: number) => void
    handleAbilitiesSelect: (index: number) => void
    genderSelected: number
    styleSelected: number
    abilitiesSelected: number
  }
}
