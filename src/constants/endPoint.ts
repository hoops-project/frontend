import { deepFreeze } from '../helper/deepFreeze.ts'

export const END_POINT = deepFreeze({
  USER: {
    CHECK_ID: 'api/user/check/id',
    CHECK_NICKNAME: 'api/user/check/nickname',
    CHECK_EMAIL: 'api/user/check/email',
    SIGN_UP: 'api/user/signup',
    EMAIL_CONFIRM: 'api/user/signup/confirm',
    USER_EDIT: 'api/auth/user/edit',
    DEACTIVATE: 'api/auth/deactivate',
    FIND_ID: 'api/user/find/id',
    FIND_PASSWORD: 'api/user/find/password',
    USER_INFO: 'api/auth/user/info',
  },
  AUTH: {
    LOGIN: 'api/auth/login',
    LOGOUT: 'api/auth/logout',
    REFRESH_TOKEN: 'api/auth/refresh-token',
    OAUTH: 'api/oauth2/login/kakao',
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
    GAME_IN_OUT: 'api/game-user/game-in-out',
    RATE_MANNER: 'api/game-user/rate-manner',
    CURRENT_GAME_LIST: 'api/game-user/my-current-game-list',
    PAST_GAME_LIST: 'api/game-user/my-last-game-list',
    INVITE_FRIENDS_LIST: 'api/friend/invite/list?gameId=',
  },
  GAME_CREATOR: {
    CREATE_GAME: 'api/game-creator/game/create',
    GAME_DETAILS: 'api/game-creator/game/detail?gameId=',
    GAME_UPDATE: 'api/game-creator/game/update',
    GAME_DELETE: 'api/game-creator/game/delete',
    GAME_PARTICIPANT_LIST: 'api/game-creator/participant/list?gameId=',
    GAME_JOINED_USER: 'api/game-creator/participant/accept/list?gameId=',
    ACCEPT_PARTICIPANT: 'api/game-creator/participant/accept',
    REJECT_PARTICIPANT: 'api/game-creator/participant/reject',
    KICK_OUT: 'api/game-creator/participant/kickout',
    GAME_INVITE: 'api/game-creator/game/invite',
  },
  FRIENDS: {
    APPLY_FRIEND: 'api/friend/apply',
    APPLY_CANCEL: 'api/friend/cancel',
    APPLY_ACCEPT: 'api/friend/accept',
    APPLY_REJECT: 'api/friend/reject',
    FRIEND_DELETE: 'api/friend/delete',
    FRIEND_SEARCH: 'api/friend/search?nickName=',
    FRIEND_LIST: 'api/friend/myfriends?',
    REQUEST_FRIENDS_LIST: 'api/friend/requestFriendList',
  },
  CHAT: {
    CREATE_CHAT: 'api/chat/create',
    JOIN_CHAT: '/pub/enter/',
    SEND_CHAT: '/pub/send/',
  },
  INVITE: {
    REQUEST: 'api/invite/request',
  },
  NOTIFICATION: {
    SUBSCRIBE: 'api/subscribe',
    GET_NOTIFICATION: 'api/notifications',
  },
})
