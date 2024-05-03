import { InputName, SignInType, SignUpType } from './auth.ts'
import { Control } from 'react-hook-form'
import React from 'react'

export interface BasicInputProps {
  type: 'text' | 'password' | 'email' | 'checkbox' | 'number'
  placeholder?: string
  id: string
  value?: string | number | readonly string[] | undefined
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  defaultValue?: string | number | readonly string[] | undefined
}

export interface AuthInputProps extends BasicInputProps {
  name: InputName
  control: Control<SignInType & SignUpType>
  // TODO: 이후 올바른 타입 찾아 적용하기
  rules?: any // 유효성 검사 규칙
}
