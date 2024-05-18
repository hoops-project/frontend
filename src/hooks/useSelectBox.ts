import { useState } from 'react'

export const useSelectBox = () => {
  const [region, setRegion] = useState<string>('')
  const [showOver, setShowOver] = useState<string>('')
  const [gender, setGender] = useState<string>('')
  const [gamePlace, setGamePlace] = useState<string>('')
  const [gameType, setGameType] = useState<string>('')
  const [time, setTime] = useState<string>('')
  const [date, setDate] = useState<string>('')
  const [addFriends, setAddFriends] = useState<string>('')
  const [totalPlayers, setTotalPlayers] = useState<string>('')

  return {
    region,
    showOver,
    gender,
    gamePlace,
    gameType,
    time,
    date,
    addFriends,
    totalPlayers,
    setRegion,
    setShowOver,
    setGender,
    setGamePlace,
    setGameType,
    setTime,
    setDate,
    setAddFriends,
    setTotalPlayers,
  }
}
