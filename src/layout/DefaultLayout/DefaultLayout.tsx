import Header from '../Header/Header.tsx'
import Footer from '../Footer/Footer.tsx'
import { Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

export default function DefaultLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
      {/* 토스트 컨테이너 */}
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        limit={1}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  )
}
