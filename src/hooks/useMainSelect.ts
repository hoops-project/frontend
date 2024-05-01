import { useState } from 'react'

export const useMainSelect = () => {
  const [region, setRegion] = useState<string>('')
  const [showOver, setShowOver] = useState<string>('')
  const [gender, setGender] = useState<string>('')
  const [gamePlace, setGamePlace] = useState<string>('')
  const [gameType, setGameType] = useState<string>('')

  return {
    region,
    showOver,
    gender,
    gamePlace,
    gameType,
    setRegion,
    setShowOver,
    setGender,
    setGamePlace,
    setGameType,
  }
}
