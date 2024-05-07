import { http, HttpResponse } from 'msw'
import { END_POINT } from '../../../constants/endPoint.ts'

export const creatChat = http.get(END_POINT.CHAT.CREATE_CHAT, () => {
  return HttpResponse.json([
    {
      id: 1,
      name: 'Ham',
    },
  ])
})
