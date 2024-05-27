import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { GlobalStyle } from './styles/GlobalStyle'
import { QueryClientProvider } from '@tanstack/react-query'
import { BrowserRouter } from 'react-router-dom'
import { queryClient } from './api/QueryClient'
import { ThemeProvider } from 'styled-components'
import { theme } from './styles/theme'

// MSW 설정을 제외합니다.
// async function enableMocking() {
//   if (import.meta.env.DEV) {
//     // MSW 설정을 비동기로 로드
//     const { worker } = await import('./mock/setupWorker');
//     return worker.start({ onUnhandledRequest: 'bypass' });
//   }
// }

// enableMocking().then(() => {
ReactDOM.createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={queryClient}>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </QueryClientProvider>
)
// });
