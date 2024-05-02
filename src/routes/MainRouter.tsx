import { Route, Routes } from 'react-router-dom'
import Main from '../pages/Main/Main.tsx'
import SignIn from '../pages/SignIn/SignIn.tsx'
import SignUp from '../pages/SignUp/SignUp.tsx'
import AddGame from '../pages/AddGame/AddGame.tsx'
import ChangeBgLayout from '../layout/ChangeBgLayout/ChangeBgLayout.tsx'
import { theme } from '../styles/theme.ts'

export default function MainRouter() {
  return (
    <Routes>
      <Route index element={<Main />} />
      <Route path={'/sign-in'} element={<SignIn />} />
      <Route path={'/sign-up'} element={<SignUp />} />
      <Route
        path={'/add-game'}
        element={
          <ChangeBgLayout $bg={theme.colors.gray_300}>
            <AddGame />
          </ChangeBgLayout>
        }
      />
    </Routes>
  )
}
