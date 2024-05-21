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

export const convertPlayStyle = (style: string) => {
  switch (style) {
    case '공격적':
      return 'AGGRESSIVE'
    case '벨런스':
      return 'BALANCE'
    case '수비적':
      return 'DEFENSIVE'
    default:
      throw new Error('Invalid play style')
  }
}

export const convertAttribute = (attribute: string) => {
  switch (attribute) {
    case '슛':
      return 'SHOOT'
    case '패스':
      return 'PASS'
    case '드리블':
      return 'DRIBBLE'
    case '체력':
      return 'HEALTH'
    case '속도':
      return 'SPEED'
    case '피지컬':
      return 'PHYSICAL'
    case '리바운드':
      return 'REBOUND'
    default:
      throw new Error('Invalid attribute')
  }
}
