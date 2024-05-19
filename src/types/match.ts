// NOTICE: 임시 타입 설정 추후 변경 필요

export type Match = {
  address: string
  cityName: string
  content: string
  createdDateTime: string | null
  deletedDateTime: string | null
  fieldStatus: 'INDOOR' | 'OUTDOOR'
  gameId: number
  gameOwnerId: number
  gender: string
  headCount: number
  inviteYn: boolean
  latitude: number
  longitude: number
  matchFormat: string
  myId: string | null
  startDateTime: string
  title: string
}

export interface MatchData {
  match: Match
}
