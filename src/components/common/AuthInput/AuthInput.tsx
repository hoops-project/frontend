import { S } from './AuthInput.style.ts'
import { Control, Controller } from 'react-hook-form'
import { InputName, SignInType, SignUpType } from '../../../types/auth.ts'

interface InputProps {
  type: 'text' | 'password' | 'email' | 'checkbox' | 'number'
  placeholder?: string
  name: InputName
  control: Control<SignInType & SignUpType>
  // TODO: 이후 올바른 타입 찾아 적용하기
  rules?: any // 유효성 검사 규칙
  id: string
}

export default function AuthInput({
  type,
  placeholder,
  name,
  control,
  rules,
  id,
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
              id={id}
              name={field.name}
              type={type}
              checked={field.value as boolean}
              onChange={field.onChange}
            />
          ) : (
            <S.BasicInput
              id={id}
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
