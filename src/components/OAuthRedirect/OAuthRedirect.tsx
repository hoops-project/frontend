import { useEffect } from 'react'
import { defaultAxios } from '../../api/axiosInstance.ts'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { useAuthStore } from '../../store/store.ts'

export function OAuthRedirect() {
  const navigate = useNavigate()
  const setLoginState = useAuthStore((state) => state.login)

  const [searchParams] = useSearchParams()
  const code = searchParams.get('code')

  useEffect(() => {
    const getUerInfo = async () => {
      try {
        const res = await defaultAxios.get(`/api/oauth2/kakao?code=${code}`)
        const authorizationHeader = res.headers['authorization']
        const authorizationBody = res.data.refreshToken
        const accessToken = authorizationHeader
        const refreshToken = authorizationBody

        localStorage.setItem('Access-Token', accessToken)
        localStorage.setItem('Refresh-Token', refreshToken)
        localStorage.setItem('userPK', String(res.data.userInfo.userId))
        setLoginState()
      } catch (error) {
        console.error('Login failed:', error)
      } finally {
        navigate('/')
      }
    }
    getUerInfo()
  }, [])

  return <div>로그인 중입니다... 잠시만 기다려 주세요.</div>
}
