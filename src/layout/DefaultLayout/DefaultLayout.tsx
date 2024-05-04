import Header from '../Header/Header.tsx'
import Footer from '../Footer/Footer.tsx'
import { Outlet } from 'react-router-dom'

export default function DefaultLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}
