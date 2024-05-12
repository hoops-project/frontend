import { Route, Routes } from 'react-router-dom'
import SignIn from '../pages/SignIn/SignIn.tsx'
import SignUp from '../pages/SignUp/SignUp.tsx'
import AddGame from '../pages/AddGame/AddGame.tsx'
import Detail from '../pages/Detail/Detail.tsx'
import Admin from '../pages/Admin/Admin.tsx'
import ChangeBgLayout from '../layout/ChangeBgLayout/ChangeBgLayout.tsx'
import { theme } from '../styles/theme.ts'
import MyPage from '../pages/MyPage/MyPage.tsx'
import DefaultLayout from '../layout/DefaultLayout/DefaultLayout.tsx'
import Report from '../pages/Report/Report.tsx'
import Main from '../pages/Main/Main.tsx'

export default function MainRouter() {
  return (
    <Routes>
      <Route element={<DefaultLayout />}>
        <Route path={'/'} element={<Main />}></Route>
        <Route path={'/sign-in'} element={<SignIn />} />
        <Route path={'/sign-up'} element={<SignUp />} />
        <Route path={'/add-game'} element={<AddGame />} />
        <Route path={'/admin'} element={<Admin />} />
        <Route path={'/admin/report'} element={<Report />} />
        <Route
          path={'/detail/:id'}
          element={
            <ChangeBgLayout $bg={theme.colors.default_gray_bg}>
              <Detail />
            </ChangeBgLayout>
          }
        />
        <Route
          path={'/my-page'}
          element={
            <ChangeBgLayout $bg={theme.colors.default_gray_bg}>
              <MyPage />
            </ChangeBgLayout>
          }
        />
      </Route>
    </Routes>
  )
}
