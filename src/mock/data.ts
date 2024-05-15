
// 게시물 상세 mockData
export const reportDetail = [
  {
    gameId: 1,
    memberId: 1,
    title: "OOO 농구장 모여라",
    content: "매치 규칙",
    headCount: 10,
    startDate : "2024-07-09T12:30:00.000000",
    createdDate : "2024-07-09T12:30:00.000000",
    address : "서울 용산구 이촌동 380",
    latitude : 33.450701,
    longitude : 126.570667,
    matchPoint: {
      playType: 'FIVEONFIVE',
      gender: 'FEMALEONLY',
      field_status: "OUTDOOR",
      inviteYn : true,
    },
    city : "SEOUL",
    nickName : "별명"
  },
  {
    gameId: 2,
    memberId: 2,
    title: "OOO 농구장 모여라",
    content: "매치 규칙",
    headCount: 10,
    startDate : "2024-07-09T12:30:00.000000",
    createdDate : "2024-07-09T12:30:00.000000",
    address : "서울 용산구 이촌동 380",
    latitude : 33.450701,
    longitude : 126.570667,
    matchPoint: {
      playType: 'FIVEONFIVE',
      gender: 'MALEONLY',
      place: 'INDOOR',
      inviteYn : true,
    },
    city : "SEOUL",
    nickName : "별명"
  },  
  {
    gameId: 3,
    memberId: 3,
    title: "OOO 농구장 모여라",
    content: "매치 규칙",
    headCount: 10,
    startDate : "2024-07-09T12:30:00.000000",
    createdDate : "2024-07-09T12:30:00.000000",
    address : "서울 용산구 이촌동 380",
    latitude : 33.450701,
    longitude : 126.570667,
    matchPoint: {
      playType: 'THREEONTHREE',
      gender: 'MALEONLY',
      place: 'OUTDOOR',
      inviteYn : true,
    },
    city : "SEOUL",
    nickName : "별명"
  },
]

// 경기 참가 리스트
export const participantGameUserList = [
  {
    participantId : 1,
    status : "APPLY",
    createdDate : "2024-05-08T12:30:00.000000",
    gender : "MALE",
    nickName : "별명",
    playStyle : "AGGRESSIVE",
    ability : "SHOOT",
    point : 3.0
  },
  {
    participantId : 2,
    status : "APPLY",
    createdDate : "2024-05-08T12:30:00.000000",
    gender : "FEMALE",
    nickName : "별명",
    playStyle : "DEFENSIVE",
    ability : "PASS",
    point : 3.0
  },
  {
    participantId : 3,
    status : "APPLY",
    createdDate : "2024-05-08T12:30:00.000000",
    gender : "MALE",
    nickName : "별명",
    playStyle : "BALANCE",
    ability : "DRIBBLE",
    point : 3.0
  },
  {
    participantId : 1,
    status : "APPLY",
    createdDate : "2024-05-08T12:30:00.000000",
    gender : "MALE",
    nickName : "별명",
    playStyle : "AGGRESSIVE",
    ability : "SHOOT",
    point : 3.0
  },
]

export const userInfoData = [
  {
  userId: 10,
  birthday: "2024-04-28",
  gender: "MALE",
  nickName: "시눙하이",
  playStyle: "AGGRESSIVE",
  rating:4.5,
  ability: "SHOOT",
  isRequestFriend: true,
  },
  {
  userId: 11,
  birthday: "2024-04-28",
  gender: "FEMALE",
  nickName: "Pinn",
  playStyle: "DEFFENSIVE",
  rating:4.5,
  ability: "DRIBBLE",
  isRequestFriend: false,
  },
  {
  userId: 12,
  birthday: "2024-04-28",
  gender: "MALE",
  nickName: "김영찬",
  playStyle: "AGGRESSIVE",
  rating:4.5,
  ability: "SHOOT",
  isRequestFriend: true,
  },
]