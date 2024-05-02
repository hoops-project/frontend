import { Route, Routes } from 'react-router-dom'
import Main from '../pages/Main/Main.tsx'
import SignIn from '../pages/SignIn/SignIn.tsx'
import SignUp from '../pages/SignUp/SignUp.tsx'

export default function MainRouter() {
  return (
    <Routes>
      <Route index element={<Main />} />
      <Route path={'/sign-in'} element={<SignIn />} />
      <Route path={'/sign-up'} element={<SignUp />} />
    </Routes>
  )
}
