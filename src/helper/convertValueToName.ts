export const convertGender = (gender: string) => {
  switch (gender) {
    case 'MALEONLY':
      return '남성만'
    case 'FEMALEONLY':
      return '여성만'
    case 'ALL':
      return '혼성'
    default:
      return null
  }
}

export const convertGameType = (value: string) => {
  switch (value) {
    case 'THREEONTHREE':
      return '3 vs 3'
    case 'FIVEONFIVE':
      return '5 vs 5'
    default:
      return null
  }
}
