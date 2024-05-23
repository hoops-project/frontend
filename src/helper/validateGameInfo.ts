export const validateGameInfo = (
  gameTitle: string,
  gameContent: string,
  totalPlayers: string,
  gameType: string,
  toastError: (msg: string) => void
) => {
  if (gameTitle.length > 50) {
    toastError('경기 제목은 500자 이하로 작성해 주세요.')
    return false
  }

  if (gameContent.length > 500) {
    toastError('경기 규칙은 500자 이하로 작성해 주세요.')
    return false
  }

  if (gameType === 'THREEONTHREE') {
    if (Number(totalPlayers) < 6 || Number(totalPlayers) > 9) {
      toastError('3대3에서의 인원은 6~9명 사이 입니다.')
      return false
    }
  } else if (gameType === 'FIVEONFIVE') {
    if (Number(totalPlayers) < 10 || Number(totalPlayers) > 15) {
      toastError('5대5에서의 인원은 10~15명 사이 입니다.')
      return false
    }
  }

  return true
}
