export const generateGameTimeObjects = () => {
  const gameTimeObjects: { NAME: string; VALUE: string }[] = []

  for (let hour = 6; hour <= 24; hour++) {
    const time = `${('0' + hour).slice(-2)}:00`
    gameTimeObjects.push({ NAME: time, VALUE: time })
  }

  return gameTimeObjects
}

export const generateNextTwoWeeksDates = () => {
  const datesArray: { NAME: string; VALUE: string }[] = []
  const currentDate = new Date()

  for (let i = 0; i < 14; i++) {
    const date = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      currentDate.getDate() + i
    )

    const formattedDate = `${date.getFullYear()}-${('0' + (date.getMonth() + 1)).slice(-2)}-${('0' + date.getDate()).slice(-2)}`

    datesArray.push({ NAME: formattedDate, VALUE: formattedDate })
  }

  return datesArray
}

export const generateTotalPlayersObjects = () => {
  const totalPlayers = []

  for (let i = 6; i <= 15; i++) {
    totalPlayers.push({ NAME: `${i}명`, VALUE: `${i}` })
  }

  totalPlayers.push({ NAME: '선택취소', VALUE: '' })

  return totalPlayers
}
