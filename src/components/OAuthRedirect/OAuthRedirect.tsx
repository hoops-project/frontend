import { useEffect } from 'react'
import { defaultAxios } from '../../api/axiosInstance.ts'
import { useNavigate, useSearchParams } from 'react-router-dom'

export function OAuthRedirect() {
  const navigate = useNavigate()

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
      } catch (error) {
        console.error('Login failed:', error)
      } finally {
        navigate('/')
      }
    }
    getUerInfo()
  }, [])

  return <div>리다이렉트 중... 코드</div>
}