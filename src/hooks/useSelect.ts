import { useState } from 'react'
import { abilities, gender, playStyle } from '../constants/signUpSelect.ts'

interface SelectedInfo {
  gender: string
  playStyle: string
  abilities: string
}

export const useSelect = () => {
  const [genderSelected, setGenderSelected] = useState<number>(0)
  const [styleSelected, setStyleSelected] = useState<number>(0)
  const [abilitiesSelected, setAbilitiesSelected] = useState<number>(0)
  const [select, setSelect] = useState<SelectedInfo>({
    gender: '남자',
    playStyle: '공격적',
    abilities: '벨러스',
  })

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
