import { S } from '../BasicInput/BasicInput.style.ts'
import { Controller } from 'react-hook-form'
import { AuthInputProps } from '../../../types/input.ts'

export default function AuthInput({
  type,
  placeholder,
  name,
  control,
  rules,
  id,
}: AuthInputProps) {
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
