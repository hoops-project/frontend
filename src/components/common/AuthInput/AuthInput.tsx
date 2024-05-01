import { S } from './AuthInput.style.ts'
import { Control, useController } from 'react-hook-form'
import { InputName, SignInType, SignUpType } from '../../../types/signIn.ts'

interface InputProps {
  type: 'text' | 'password' | 'email'
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
