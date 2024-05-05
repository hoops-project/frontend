import { abilities, gender, playStyle } from '../constants/signUpSelect.ts'

export const findSelectIndexes = (
  selectedGender: '남자' | '여자',
  selectedPlayStyle: '공격적' | '벨런스' | '수비적',
  selectedAbilities:
    | '슛'
    | '패스'
    | '드리볼'
    | '체력'
    | '스피드'
    | '피지컬'
    | '리바운드'
) => {
  const genderIndex = gender.indexOf(selectedGender)
  const playStyleIndex = playStyle.indexOf(selectedPlayStyle)
  const abilitiesIndexes = abilities.indexOf(selectedAbilities)

  return [genderIndex, playStyleIndex, abilitiesIndexes]
}
