import { Outlet } from "react-router";
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"


const LayoutApp = () => {
  return (

    <>
    <Navbar />
    <main>
<Outlet />
    </main>
    
    <Footer />
    </>
  )
}

export default LayoutApp