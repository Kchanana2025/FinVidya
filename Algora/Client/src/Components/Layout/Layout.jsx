
import NavBar from '../Home/Navbar/NavBar'
import Footer from '../Home/Footer/Footer'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
      <NavBar/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default Layout
