import { useState } from 'react'

export const useExample = () => {
  const [value, setValue] = useState<number>(0)
  return { value, setValue }
}
