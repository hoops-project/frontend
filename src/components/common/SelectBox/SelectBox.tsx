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
}

export default function SelectBox({
  name,
  options,
  size,
}: SelectBoxSmallProps) {
  const [age, setAge] = useState('')

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value)
  }

  return (
    <S.SelectBox>
      <FormControl sx={{ m: 1, minWidth: 80 }} size={size}>
        <InputLabel
          id='demo-simple-select-autowidth-label'
          style={{ fontSize: 'inherit' }}
        >
          {name}
        </InputLabel>
        <Select
          style={{
            fontSize: 'inherit',
            borderRadius: `${size === 'small' ? '2rem' : ''}`,
          }}
          labelId='demo-simple-select-autowidth-label'
          id={name}
          value={age}
          onChange={handleChange}
          autoWidth
          label={name}
        >
          {options.map((option) => (
            <MenuItem
              key={option}
              value={option}
              style={{ fontSize: '1.4rem' }}
            >
              {option}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </S.SelectBox>
  )
}
