export interface SignIn {
  id: string
  password: string
}

export interface SignUp {
  id: string
  email: string
  password: string
  password_confirm: string
  name: string
  nick_name: string
  birthday: string
}

export type InputName =
  | 'password'
  | 'password_confirm'
  | 'email'
  | 'name'
  | 'id'
  | 'nick_name'
  | 'birthday'
