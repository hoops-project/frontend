export interface SignInType {
  id: string
  password: string
  rememberMe: boolean
}

export interface SignUpType {
  id: string
  email: string
  password: string
  passwordConfirm: string
  name: string
  nick_name: string
  birthday: string
}

export type InputName =
  | 'password'
  | 'passwordConfirm'
  | 'email'
  | 'name'
  | 'id'
  | 'nick_name'
  | 'birthday'
  | 'rememberMe'
