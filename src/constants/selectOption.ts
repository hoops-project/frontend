import { generateNextTwoWeeksDates } from '../helper/dateGenerater.ts'

export const OPTIONS = {
  REGION: [
    { NAME: '서울', VALUE: 'SEOUL' },
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
  TOTAL_PLAYERS: [
    { NAME: '1명', VALUE: '1' },
    { NAME: '2명', VALUE: '2' },
    { NAME: '3명', VALUE: '3' },
    { NAME: '4명', VALUE: '4' },
    { NAME: '5명', VALUE: '5' },
    { NAME: '6명', VALUE: '6' },
    { NAME: '7명', VALUE: '7' },
    { NAME: '8명', VALUE: '8' },
    { NAME: '9명', VALUE: '9' },
    { NAME: '10명', VALUE: '10' },
    { NAME: '11명', VALUE: '11' },
    { NAME: '12명', VALUE: '12' },
    { NAME: '선택취소', VALUE: '' },
  ],
  ADD_FRIEND: [
    { NAME: '허용', VALUE: 'ALLOW' },
    { NAME: '불가', VALUE: 'DISALLOW' },
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
