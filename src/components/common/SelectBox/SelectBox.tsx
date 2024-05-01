import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import { useState } from 'react'
import { S } from './SelectBox.style.ts'

interface SelectBoxSmallProps {
  name: string
  options: string[]
  size?: 'small' | 'medium'
  width?: number
  fontSize?: number
}

export default function SelectBox({
  name,
  options = [],
  size = 'medium',
  width = 900,
  fontSize = 1.4,
}: SelectBoxSmallProps) {
  const [age, setAge] = useState('')

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value)
  }

  return (
    <S.SelectBox>
      <FormControl sx={{ m: 1, width: width }} size={size} fullWidth>
        <InputLabel style={{ fontSize: `${fontSize}rem` }}>{name}</InputLabel>
        <Select
          style={{
            fontSize: `${fontSize}rem`,
            borderRadius: `${size === 'small' ? '2rem' : ''}`,
          }}
          labelId='demo-simple-select-label'
          id='demo-simple-select'
          value={age}
          label='Age'
          onChange={handleChange}
        >
          {options.map((option) => (
            <MenuItem
              key={option}
              style={{ fontSize: `${fontSize}rem` }}
              value={option}
            >
              {option}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </S.SelectBox>
  )
}
