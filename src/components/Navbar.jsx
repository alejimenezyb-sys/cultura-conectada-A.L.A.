import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="bg-slate-900 border-b border-slate-800 px-4 sm:px-6 py-3">
      <nav className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        <NavLink to="/" className="text-white font-bold text-lg">
          🎮 Game Zone
        </NavLink>
        <div className="flex flex-wrap items-center justify-center gap-1 sm:gap-2">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "bg-indigo-600 text-white px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-md text-xs sm:text-sm font-medium"
                : "text-slate-300 hover:text-white px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-md text-xs sm:text-sm font-medium"
            }
          >
            Inicio
          </NavLink>
          <NavLink
            to="/explorar"
            className={({ isActive }) =>
              isActive
                ? "bg-indigo-600 text-white px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-md text-xs sm:text-sm font-medium"
                : "text-slate-300 hover:text-white px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-md text-xs sm:text-sm font-medium"
            }
          >
            Explorar
          </NavLink>
          <NavLink
            to="/categorias"
            className={({ isActive }) =>
              isActive
                ? "bg-indigo-600 text-white px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-md text-xs sm:text-sm font-medium"
                : "text-slate-300 hover:text-white px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-md text-xs sm:text-sm font-medium"
            }
          >
            Categorías
          </NavLink>
          <NavLink
            to="/sobre"
            className={({ isActive }) =>
              isActive
                ? "bg-indigo-600 text-white px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-md text-xs sm:text-sm font-medium"
                : "text-slate-300 hover:text-white px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-md text-xs sm:text-sm font-medium"
            }
          >
            Sobre el proyecto
          </NavLink>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
