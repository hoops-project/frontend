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
    case '드리볼':
      return 'DRIBBLE'
    case '체력':
      return 'HEALTH'
    case '스피드':
      return 'SPEED'
    case '피지컬':
      return 'PHYSICAL'
    case '리바운드':
      return 'REBOUND'
    default:
      throw new Error('Invalid attribute')
  }
}

export const convertUserGender = (gender: string) => {
  switch (gender) {
    case '남자':
      return 'MALE'
    case '여자':
      return 'FEMALE'
    default:
      return ''
  }
}

export const convertGenderToKorean = (gender: string) => {
  switch (gender) {
    case 'MALE':
      return '남자'
    case 'FEMALE':
      return '여자'
    default:
      return ''
  }
}

export const convertAttributeToKorean = (englishAttribute: string) => {
  switch (englishAttribute) {
    case 'SHOOT':
      return '슛'
    case 'PASS':
      return '패스'
    case 'DRIBBLE':
      return '드리볼'
    case 'HEALTH':
      return '체력'
    case 'SPEED':
      return '스피드'
    case 'PHYSICAL':
      return '피지컬'
    case 'REBOUND':
      return '리바운드'
    default:
      return ''
  }
}

export const convertPlayStyleToKorean = (style: string) => {
  switch (style) {
    case 'AGGRESSIVE':
      return '공격적'
    case 'BALANCE':
      return '벨런스'
    case 'DEFENSIVE':
      return '수비적'
    default:
      return ''
  }
}
