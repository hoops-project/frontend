import { Route, Routes } from 'react-router-dom'
import SignIn from '../pages/SignIn/SignIn.tsx'
import SignUp from '../pages/SignUp/SignUp.tsx'
import AddGame from '../pages/AddGame/AddGame.tsx'
import Detail from '../pages/Detail/Detail.tsx'
import ChangeBgLayout from '../layout/ChangeBgLayout/ChangeBgLayout.tsx'
import { theme } from '../styles/theme.ts'
import MyPage from '../pages/MyPage/MyPage.tsx'
import DefaultLayout from '../layout/DefaultLayout/DefaultLayout.tsx'
import Report from '../pages/Report/Report.tsx'
import Main from '../pages/Main/Main.tsx'
import MyGame from '../pages/MyGame/MyGame.tsx'
import GameChat from '../components/GameChat/GameChat.tsx'
import WaitChatSelect from '../components/WaitChatSelect/WaitChatSelect.tsx'
import SearchTab from '../components/SearchTab/SearchTab.tsx'
import MyLastGameList from '../pages/MyLastGame/MyLastGame.tsx'
import PrivateRoute from '../routes/PrivateRoute.tsx'
import EditGame from '../pages/EditGame/EditGame.tsx'
import FindUserId from '../pages/FindUserId/FindUserId.tsx'

export default function MainRouter() {
  return (
    <Routes>
      <Route element={<DefaultLayout />}>
        <Route path={'/'} element={<Main />}></Route>
        <Route path={'/sign-in'} element={<SignIn />} />
        <Route path={'/sign-up'} element={<SignUp />} />
        <Route path={'/account'} element={<FindUserId />} />
        <Route
          path={'/detail/:id'}
          element={
            <ChangeBgLayout $bg={theme.colors.default_gray_bg}>
              <Detail />
            </ChangeBgLayout>
          }
        />
        <Route element={<PrivateRoute />}>
          <Route path={'/add-game'} element={<AddGame />} />
          <Route path={'/admin/report'} element={<Report />} />
          <Route path={'/search'} element={<SearchTab />} />
          <Route path={'/my-last-game'} element={<MyLastGameList />} />
          <Route path={'/edit-game/:id'} element={<EditGame />} />
          <Route
            path={'/my-page'}
            element={
              <ChangeBgLayout $bg={theme.colors.default_gray_bg}>
                <MyPage />
              </ChangeBgLayout>
            }
          />
          <Route
            path={'/my-game'}
            element={
              <ChangeBgLayout $bg={theme.colors.default_gray_bg}>
                <MyGame />
              </ChangeBgLayout>
            }
          >
            <Route path={'/my-game'} element={<WaitChatSelect />} />
            <Route path={'/my-game/:id'} element={<GameChat />} />
          </Route>
        </Route>
      </Route>
    </Routes>
  )
}
