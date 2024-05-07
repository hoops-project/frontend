import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { GlobalStyle } from './styles/GlobalStyle.ts'
import { QueryClientProvider } from '@tanstack/react-query'
import { BrowserRouter } from 'react-router-dom'
import { queryClient } from './api/QueryClient.ts'
import { ThemeProvider } from 'styled-components'
import { theme } from './styles/theme.ts'

async function enableMocking() {
  if (!import.meta.env.DEV) {
    return
  }

  // NOTICE: worker 는 비동기로 불러와 처리해야 합니다.
  const { worker } = await import('./mock/setupWorker.ts')

  // NOTICE: onUnhandledRequest 을 bypass 로 설정하여 'intercepted a request without a matching request handler' 경고 해결
  return worker.start({ onUnhandledRequest: 'bypass' })
}

enableMocking().then(() => {
  ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </ThemeProvider>
      </QueryClientProvider>
    </React.StrictMode>
  )
})
