import { getUser } from './handler/user/handler.ts'
import { createGame } from './handler/gmaeCreator/handler.ts'
import { applyFriend } from './handler/firends/handler.ts'
import { creatChat } from './handler/chat/handler.ts'
import { logIn } from './handler/auth/handler.ts'
import { report } from './handler/report/handler.ts'
import { deleteGame } from './handler/manager/handler.ts'
import { currentGameList } from './handler/gameUser/handler.ts'

export const index = [
  getUser,
  createGame,
  applyFriend,
  creatChat,
  logIn,
  report,
  currentGameList,
  deleteGame,
]
