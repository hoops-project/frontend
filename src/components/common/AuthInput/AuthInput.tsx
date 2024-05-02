import { S } from './AuthInput.style.ts'
import { Control, Controller } from 'react-hook-form'
import { InputName, SignInType, SignUpType } from '../../../types/auth.ts'

interface InputProps {
  type: 'text' | 'password' | 'email' | 'checkbox'
  placeholder?: string
  name: InputName
  control: Control<SignInType & SignUpType>
  rules?: any // 유효성 검사 규칙
}

export default function AuthInput({
  type,
  placeholder,
  name,
  control,
  rules,
}: InputProps) {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field }) => (
        <>
          {type === 'checkbox' ? (
            <S.BasicCheckbox
              name={field.name}
              type={type}
              checked={field.value as boolean}
              onChange={field.onChange}
            />
          ) : (
            <S.BasicInput
              autoComplete='off'
              onChange={field.onChange}
              value={field.value as string}
              name={field.name}
              type={type}
              placeholder={placeholder}
            />
          )}
        </>
      )}
    />
  )
}
