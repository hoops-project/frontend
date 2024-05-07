import { http, HttpResponse } from 'msw'
import { END_POINT } from '../../../constants/endPoint.ts'

export const applyFriend = http.get(END_POINT.FRIENDS.APPLY_FRIEND, () => {
  return HttpResponse.json([
    {
      id: 1,
      name: 'Ham',
    },
  ])
})
