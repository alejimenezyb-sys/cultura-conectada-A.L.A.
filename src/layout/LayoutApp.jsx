import { Outlet } from "react-router-dom";
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