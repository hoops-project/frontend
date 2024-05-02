import { S } from './AuthInput.style.ts'
import { Control, useController } from 'react-hook-form'
import { InputName, SignInType, SignUpType } from '../../../types/auth.ts'

interface InputProps {
  type: 'text' | 'password' | 'email' | 'checkbox'
  placeholder?: string
  name: InputName
  control: Control<SignInType & SignUpType>
}

export default function AuthInput({
  type,
  placeholder,
  name,
  control,
}: InputProps) {
  const { field } = useController({
    name,
    control,
  })

  if (type === 'checkbox') {
    return (
      <S.BasicCheckbox
        name={field.name}
        type={type}
        checked={field.value as boolean}
        onChange={field.onChange}
      ></S.BasicCheckbox>
    )
  }

  return (
    <S.BasicInput
      autoComplete='off'
      onChange={field.onChange}
      value={field.value as string}
      name={field.name}
      type={type}
      placeholder={placeholder}
    ></S.BasicInput>
  )
}
