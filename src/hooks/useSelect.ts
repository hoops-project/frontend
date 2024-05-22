import { useEffect, useState } from 'react'
import { abilities, gender, playStyle } from '../constants/signUpSelect.ts'

interface SelectedInfo {
  gender: string
  playStyle: string
  abilities: string
}

export const useSelect = ({ defaultValue }: { defaultValue: number[] }) => {
  const [defaultGender, defaultPlayStyle, defaultAbilities] = defaultValue
  const [genderSelected, setGenderSelected] = useState<number>(defaultGender)
  const [styleSelected, setStyleSelected] = useState<number>(defaultPlayStyle)
  const [abilitiesSelected, setAbilitiesSelected] =
    useState<number>(defaultAbilities)
  const [select, setSelect] = useState<SelectedInfo>({
    gender: gender[defaultGender],
    playStyle: playStyle[defaultPlayStyle],
    abilities: abilities[defaultAbilities],
  })

  useEffect(() => {
    setSelect({
      gender: gender[defaultGender],
      playStyle: playStyle[defaultPlayStyle],
      abilities: abilities[defaultAbilities],
    })

    setGenderSelected(defaultGender)
    setStyleSelected(defaultPlayStyle)
    setAbilitiesSelected(defaultAbilities)
  }, [defaultGender, defaultPlayStyle, defaultAbilities])

  const handleGenderSelect = (index: number) => {
    setGenderSelected(index)
    setSelect({ ...select, gender: gender[index] })
  }

  const handleStyleSelect = (index: number) => {
    setStyleSelected(index)
    setSelect({ ...select, playStyle: playStyle[index] })
  }

  const handleAbilitiesSelect = (index: number) => {
    setAbilitiesSelected(index)
    setSelect({ ...select, abilities: abilities[index] })
  }

  return {
    handleGenderSelect,
    handleStyleSelect,
    handleAbilitiesSelect,
    genderSelected,
    styleSelected,
    abilitiesSelected,
    select,
  }
}
