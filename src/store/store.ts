import { create } from 'zustand'

type Store = {
  count: number
  inc: () => void
}

// NOTICE: 예시 store 이후 프로젝트 시작시 스토어 별로 정리 예정
export const useStore = create<Store>()((set) => ({
  count: 1,
  inc: () => set((state) => ({ count: state.count + 1 })),
}))
