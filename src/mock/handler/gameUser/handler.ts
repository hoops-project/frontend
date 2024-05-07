import { http, HttpResponse } from 'msw'
import { END_POINT } from '../../../constants/endPoint.ts'

export const currentGameList = http.get(
  END_POINT.GAME_USER.CURRENT_GAME_LIST,
  () => {
    return HttpResponse.json([
      {
        id: 1,
        name: 'Ham',
      },
    ])
  }
)
