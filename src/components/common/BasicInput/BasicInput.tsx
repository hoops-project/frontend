import { S } from './BasicInput.style.ts'
import { BasicInputProps } from '../../../types/input.ts'

export default function BasicInput({
  type,
  placeholder,
  id,
  value,
  onChange,
  defaultValue,
}: BasicInputProps) {
  return (
    <S.BasicInput
      defaultValue={defaultValue}
      value={value}
      id={id}
      autoComplete='off'
      type={type}
      placeholder={placeholder}
      onChange={onChange}
    ></S.BasicInput>
  )
}
