export interface ParticipantUser {
  userId: number
  genderType: string
  nickName: string
  playStyle: string
  ability: string
}

export interface GameDetails {
  address: string
  cityName: string
  content: string
  createdDateTime: string
  deletedDateTime: string | null
  fieldStatus: string
  gameId: number
  gender: string
  headCount: number
  inviteYn: boolean
  latitude: number
  longitude: number
  matchFormat: string
  nickName: string
  participantUserList: ParticipantUser[]
  startDateTime: string
  title: string
  userId: number
}
