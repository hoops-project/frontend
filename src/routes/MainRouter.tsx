import { Route, Routes } from 'react-router-dom'
import DefaultLayout from '../layout/DefaultLayout/DefaultLayout.tsx'
import Main from '../pages/Main/Main.tsx'
import SignIn from '../pages/SignIn/SignIn.tsx'

export default function MainRouter() {
  return (
    <Routes>
      <Route
        index
        element={
          <DefaultLayout isGray={false}>
            <Main />
          </DefaultLayout>
        }
      />
      <Route
        path={'/sign-in'}
        element={
          <DefaultLayout isGray={false}>
            <SignIn />
          </DefaultLayout>
        }
      ></Route>
    </Routes>
  )
}
