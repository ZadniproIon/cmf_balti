import { Outlet } from 'react-router-dom'
import AboveHeader from './AboveHeader'
import Footer from './Footer'
import Navbar from './Navbar'

const Layout = () => (
  <>
    <AboveHeader />
    <Navbar />
    <Outlet />
    <Footer />
  </>
)

export default Layout
