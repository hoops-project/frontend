import { S } from './BasicInput.style.ts'
import { Control, useController } from 'react-hook-form'
import { InputName, SignIn, SignUp } from '../../../types/signIn.ts'

interface InputProps {
  type: 'text' | 'password' | 'email'
  placeholder?: string
  name: InputName
  control: Control<SignIn & SignUp>
}

export default function BasicInput({
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
