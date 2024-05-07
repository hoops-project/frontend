import { http, HttpResponse } from 'msw'
import { END_POINT } from '../../../constants/endPoint.ts'

export const deleteGame = http.get(END_POINT.MANAGER.DELETE, () => {
  return HttpResponse.json([
    {
      id: 1,
      name: 'Ham',
    },
  ])
})
