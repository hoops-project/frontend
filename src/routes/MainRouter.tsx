import { Route, Routes } from 'react-router-dom'
import DefaultLayout from '../layout/DefaultLayout/DefaultLayout.tsx'
import Main from '../pages/Main/Main.tsx'

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
    </Routes>
  )
}
