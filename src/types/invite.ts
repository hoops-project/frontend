export interface Invite {
  inviteId: number
  inviteStatus: string
  requestedDateTime: string
  senderUserId: number
  senderUserBirthday: string
  senderUserGenderType: string
  senderUserNickName: string
  senderUserPlayStyle: string
  senderUserAbility: string
  senderUserStringAverageRating: number | null
  receiverUserNickName: string
  gameId: number
  title: string
  content: string
  headCount: number
  fieldStatus: 'INDOOR' | 'OUTDOOR'
  gender: 'ALL' | 'MALE' | 'FEMALE'
  startDateTime: string
  inviteYn: boolean
  address: string
  latitude: number
  longitude: number
  cityName: string
  matchFormat: string
}
