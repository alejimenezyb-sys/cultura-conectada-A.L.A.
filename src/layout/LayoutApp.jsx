<<<<<<< HEAD
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const LayoutApp = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col justify-between">
      <div>
        <Navbar />
        <main>
          <Outlet />
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default LayoutApp;
=======
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
>>>>>>> 0fb7b8e4a06243b0c2dd743ad402d9c4ed935556
