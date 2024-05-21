import { create } from 'zustand'
import { UserInfoType } from '../types/auth';

type Store = {
  count: number
  inc: () => void
}

// NOTICE: 예시 store 이후 프로젝트 시작시 스토어 별로 정리 예정
export const useStore = create<Store>()((set) => ({
  count: 1,
  inc: () => set((state) => ({ count: state.count + 1 })),
}))

interface UserState {
  userState: UserInfoType | null;
  setUserState: (user: UserInfoType) => void;
  updateUser: (userInfo: Partial<UserInfoType>) => void;
  userReset: () => void;
}

export const useUserStore =  create<UserState>((set) => ({
  userState: null,
  setUserState: (user) => set({ userState: user }),
  updateUser: (userInfo) => set((state) => ({
    userState: { ...state.userState, ...userInfo } as UserInfoType
  })),
  userReset: () => set({ userState: null }),
}));
