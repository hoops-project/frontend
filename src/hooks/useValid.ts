import { useEffect, useState } from 'react'

export const useValid = (email: string, password: string) => {
  const [isValidEmail, setIsValidEmail] = useState<boolean>(true)
  const [isValidPassword, setIsValidPassword] = useState<boolean>(true)

  useEffect(() => {
    const emailRegex: RegExp = /^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/
    const passwordRegex = /^(?=.*[!@#$%^&*(),.?":{}|<>]).{6,}$/
    setIsValidEmail(emailRegex.test(email))
    setIsValidPassword(passwordRegex.test(password))
  }, [email, password])

  return { isValidEmail, isValidPassword }
}
