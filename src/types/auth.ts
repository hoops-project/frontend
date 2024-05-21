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
  nickname: string
  birthday: string
}

export type InputName =
  | 'password'
  | 'passwordConfirm'
  | 'email'
  | 'name'
  | 'id'
  | 'nickname'
  | 'birthday'
  | 'rememberMe'

  export interface UserInfoType {
  userId: number
	id: string
	password: string
	email: string
	name: string
	birthday: string
	gender: string
	nickName: string
	createdAt: string
	playStyle: string
	ability: string
	refreshToken: string
	roles: string
  isLogin: boolean
  }
  export interface TokenType {
    authorization: string;
  }
  
  export interface SignInResponseType {
    accessToken: string
    headers: TokenType
    userInfo: UserInfoType
  }