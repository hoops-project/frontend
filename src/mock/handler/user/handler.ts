import { http, HttpResponse } from 'msw'

export const getUser = http.get('/user', () => {
  return HttpResponse.json([
    {
      id: 1,
      name: 'Ham',
    },
  ])
})
