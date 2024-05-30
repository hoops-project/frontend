export interface SignInType {
  id: string
  password: string
  rememberMe: boolean
}

export interface SignUpSelectInfo {
  gender: string
  playStyle: string
  abilities: string
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
  friendId: number | null
  rating: number
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
  statusCode?: number
  errorMessage?: string
  isRequestFriend: boolean
}

export interface TokenType {
  authorization: string
}

export interface SignInResponseType {
  refreshToken: string
  accessToken: string
  headers: TokenType
  userInfo: UserInfoType
}

export interface InviteFriendType {
  userId: number
  birthday: string
  gender: 'MALE' | 'FEMALE'
  nickName: string
  playStyle: string
  ability: string
  mannerPoint?: number | null
  status?: 'REQUEST' | null
}

export interface ReportedUser extends InviteFriendType {
  playStyle: string
  ability: string
  userName: string
  reportId: number
}
