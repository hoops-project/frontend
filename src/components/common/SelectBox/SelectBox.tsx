import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import React from 'react'
import { S } from './SelectBox.style.ts'

interface SelectBoxProps {
  name: string
  options: {
    NAME: string
    VALUE: string
  }[]
  size?: 'small' | 'medium'
  width?: number
  fontSize?: number
  value?: string
  setValue: React.Dispatch<React.SetStateAction<string>>
}

export default function SelectBox({
  name,
  options = [],
  size = 'medium',
  width = 900,
  fontSize = 1.4,
  value,
  setValue,
}: SelectBoxProps) {
  const handleChange = (event: SelectChangeEvent) => {
    setValue(event.target.value)
  }

  return (
    <S.SelectBox>
      <FormControl sx={{ m: 1, width: width }} size={size} fullWidth>
        <InputLabel style={{ fontSize: `${fontSize}rem` }}>{name}</InputLabel>
        <Select
          aria-labelledby={name}
          defaultValue={name}
          style={{
            fontSize: `${fontSize}rem`,
            borderRadius: `${size === 'small' ? '2rem' : ''}`,
          }}
          id={name}
          value={value}
          label={name}
          onChange={handleChange}
        >
          {options.map((option) => (
            <MenuItem
              aria-label={option.VALUE}
              key={option.NAME}
              style={{ fontSize: `${fontSize}rem` }}
              value={option.VALUE}
            >
              {option.NAME}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </S.SelectBox>
  )
}
