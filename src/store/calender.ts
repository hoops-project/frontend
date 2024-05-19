import { create } from 'zustand'

type Date = {
  date: string
  setDate: (date: string) => void
}

const currentDate = new Date()
const year = currentDate.getFullYear()
const month = String(currentDate.getMonth() + 1).padStart(2, '0')
const day = String(currentDate.getDate()).padStart(2, '0')
const initialDate = `${year}-${month}-${day}`

export const useDateStore = create<Date>((set) => ({
  date: initialDate,
  setDate: (date: string) => set(() => ({ date })),
}))
