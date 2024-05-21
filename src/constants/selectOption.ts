import {
  generateGameTimeObjects,
  generateNextTwoWeeksDates,
  generateTotalPlayersObjects,
} from '../helper/generateObjectsArray.ts'

export const OPTIONS = {
  REGION: [
    { NAME: '서울', VALUE: 'SEOUL' },
    { NAME: '경기', VALUE: 'GYEONGGI' },
    { NAME: '인천', VALUE: 'INCHEON' },
    { NAME: '강원', VALUE: 'GANGWON' },
    { NAME: '대전', VALUE: 'DAEJEON' },
    { NAME: '세종', VALUE: 'SEJONG' },
    { NAME: '충남', VALUE: 'CHUNGNAM' },
    { NAME: '충북', VALUE: 'CHUNGBUK' },
    { NAME: '대구', VALUE: 'DAEGU' },
    { NAME: '경북', VALUE: 'GYEONGBUK' },
    { NAME: '부산', VALUE: 'BUSAN' },
    { NAME: '울산', VALUE: 'ULSAN' },
    { NAME: '경남', VALUE: 'GYEONGNAM' },
    { NAME: '광주', VALUE: 'GWANGJU' },
    { NAME: '전남', VALUE: 'JEONNAM' },
    { NAME: '전북', VALUE: 'JEONBUK' },
    { NAME: '제주', VALUE: 'JEJU' },
    { NAME: '선택취소', VALUE: '' },
  ],
  GENDER: [
    { NAME: '남성', VALUE: 'MALEONLY' },
    { NAME: '여성', VALUE: 'FEMALEONLY' },
    { NAME: '혼성', VALUE: 'ALL' },
    { NAME: '선택취소', VALUE: '' },
  ],
  GAME_TYPE: [
    { NAME: '3 vs 3', VALUE: 'THREEONTHREE' },
    { NAME: '5 vs 5', VALUE: 'FIVEONFIVE' },
    { NAME: '선택취소', VALUE: '' },
  ],
  GAME_TIME: generateGameTimeObjects(),
  TOTAL_PLAYERS: generateTotalPlayersObjects(),
  ADD_FRIEND: [
    { NAME: '허용', VALUE: 'TRUE' },
    { NAME: '불가', VALUE: 'FALSE' },
    { NAME: '선택취소', VALUE: '' },
  ],
  GAME_PLACE: [
    { NAME: '실내', VALUE: 'INDOOR' },
    { NAME: '야외', VALUE: 'OUTDOOR' },
    { NAME: '선택취소', VALUE: '' },
  ],
  GAME_DATE: generateNextTwoWeeksDates(),
  GAME_OVER: [
    { NAME: '표시', VALUE: 'SHOW' },
    { NAME: '가리기', VALUE: 'HIDE' },
    { NAME: '선택취소', VALUE: '' },
  ],
}

Object.freeze(OPTIONS)
