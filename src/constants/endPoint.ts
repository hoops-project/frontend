import { deepFreeze } from '../helper/deepFreeze.ts'

export const END_POINT = deepFreeze({
  USER: {
    CHECK_ID: 'api/user/check/id',
    CHECK_NICKNAME: 'api/user/check/nickname',
    CHECK_EMAIL: 'api/user/check/email',
    SIGN_UP: 'api/user/signup',
    EMAIL_CONFIRM: 'api/user/signup/confirm',
    USER_EDIT: 'api/user/edit',
    DEACTIVATE: 'api/user/deactivate',
    FIND_ID: 'api/user/find/id',
    FIND_PASSWORD: 'api/user/find/password',
    USER_INFO: 'api/user/info',
  },
  AUTH: {
    LOGIN: 'api/auth/login',
    LOGOUT: 'api/auth/logout',
    REFRESH_TOKEN: 'api/auth/refresh-token',
    OAUTH: 'api/auth/login/kakao',
  },
  MANAGER: {
    DELETE: 'api/manager',
    BLACK_LIST: 'api/blacklist',
  },
  REPORT: {
    REPORT: 'api/report/user',
  },
  GAME_USER: {
    GAME_SEARCH: 'api/game-user/search',
    ADDRESS_SEARCH: 'api/game-user/search-address?address=',
    FRIEND_INVITE: 'api/game-user/friend-invite',
    GAME_IN_OUT: 'api/game-user/game-out-out',
    RATE_MANNER: 'api/game-user/rate-manner',
    CURRENT_GAME_LIST: 'api/game-user/current/list',
    PAST_GAME_LIST: 'api/game-user/past/list',
  },
  GAME_CREATOR: {
    CREATE_GAME: 'api/game-creator/game/create',
    GAME_DETAILS: 'api/game-creator/game-creator/detail/gameId=?',
    GAME_UPDATE: 'api/game-creator/game/update',
    GAME_DELETE: 'api/game-creator/game/delete',
    GAME_PARTICIPANT_LIST: 'api/game-creator/participant/list/gameId=?',
    ACCEPT_PARTICIPANT: 'api/game-creator/participant/accept',
    REJECT_PARTICIPANT: 'api/game-creator/participant/reject',
    KICK_OUT: 'api/game-creator/participant/kickout',
    GAME_INVITE: 'api/game-creator/game/invite',
  },
  FRIENDS: {
    APPLY_FRIEND: 'api/friends/apply',
    APPLY_CANCEL: 'api/friends/cancel',
    APPLY_ACCEPT: 'api/friends/accept',
    APPLY_REJECT: 'api/friends/reject',
    FRIEND_DELETE: 'api/friends/delete',
    FRIEND_SEARCH: 'api/friends/search',
    FRIEND_LIST: 'api/friends/myfriends',
  },
  CHAT: {
    CREATE_CHAT: 'api/chat/create',
    JOIN_CHAT: '/pub/enter/',
    SEND_CHAT: '/pub/send/',
  },
})