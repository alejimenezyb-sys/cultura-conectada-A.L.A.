import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const LayoutApp = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col justify-between overflow-x-hidden">
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