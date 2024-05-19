export const generateGameTimeObjects = () => {
  const gameTimeObjects = []

  for (let hour = 6; hour <= 24; hour++) {
    const time = `${('0' + hour).slice(-2)}:00`
    gameTimeObjects.push({ NAME: time, VALUE: time })
  }

  return gameTimeObjects
}
