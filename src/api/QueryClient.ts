import { QueryClient } from '@tanstack/react-query'

// 옵션 설정은 자유롭게
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false, // 개발중 서버 부하를 줄이기 위해 임시로 false로 설정
      staleTime: 1000 * 60 * 5,
      retry: 1,
    },
  },
})
