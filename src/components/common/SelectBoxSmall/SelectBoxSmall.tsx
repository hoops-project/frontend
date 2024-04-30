import { S } from './SelectBoxSmall.style.ts'

interface SelectBoxSmallProps {
  name: string
  options: string[]
}

export default function SelectBoxSmall({ name, options }: SelectBoxSmallProps) {
  return (
    <S.SelectBoxSmall name={name}>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </S.SelectBoxSmall>
  )
}
