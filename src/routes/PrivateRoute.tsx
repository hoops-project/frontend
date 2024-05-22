import { Navigate, Outlet } from 'react-router-dom'
import { useToast } from '../hooks/useToast'


const PrivateRoute = () => {
  const { toastError } = useToast()
  const isAuthenticated = localStorage.getItem('Access-Token')
  
    if (!isAuthenticated) {
      toastError('로그인을 진행해주세요!')
      return <Navigate to= '/sign-in' />
    }
    return <Outlet />
  }


export default PrivateRoute;
