import { useState } from 'react'

export const useDuplicate = () => {
  const [emailPassed, setEmailPassed] = useState<boolean>(false)
  const [idPassed, setIdPassed] = useState<boolean>(false)
  const [nicknamePassed, setNicknamePassed] = useState<boolean>(false)

  return {
    emailPassed,
    idPassed,
    nicknamePassed,
    setNicknamePassed,
    setIdPassed,
    setEmailPassed,
  }
}
