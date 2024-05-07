import { http, HttpResponse } from 'msw'
import { END_POINT } from '../../../constants/endPoint.ts'

export const report = http.get(END_POINT.REPORT.REPORT, () => {
  return HttpResponse.json([
    {
      id: 1,
      name: 'Ham',
    },
  ])
})
