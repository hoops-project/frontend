import React, { useState } from 'react'
import { AddressProps } from '../types/map.ts'

export const useGameInfo = (
  initialGameTitle = '',
  initialGameContent = '',
  initialAddress: Partial<AddressProps> = {}
) => {
  const [gameTitle, setGameTitle] = useState<string>(initialGameTitle)
  const [gameContent, setGameContent] = useState<string>(initialGameContent)
  const [address, setAddress] = useState<AddressProps>({
    placeName: initialAddress.placeName || '',
    address: initialAddress.address || '',
    lat: initialAddress.lat || '',
    lng: initialAddress.lng || '',
  })

  const handleGameTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value
    setGameTitle(inputValue)
  }

  return {
    gameTitle,
    gameContent,
    address,
    handleGameTitleChange,
    setGameContent,
    setAddress,
  }
}
