import { setupWorker } from 'msw/browser'
import { index } from './index.ts'

export const worker = setupWorker(...index)
