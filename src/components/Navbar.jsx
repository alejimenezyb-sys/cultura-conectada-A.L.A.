import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-slate-900 border-b border-slate-800 px-6 py-3.5 flex items-center gap-4">
      <NavLink to="/" className="text-white font-bold text-lg mr-auto">
        🎮 Game Zone
      </NavLink>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive
            ? "bg-indigo-600 text-white px-3 py-1.5 rounded-md text-sm font-medium"
            : "text-slate-300 hover:text-white px-3 py-1.5 rounded-md text-sm font-medium"
        }
      >
        Inicio
      </NavLink>
      <NavLink
        to="/explorar"
        className={({ isActive }) =>
          isActive
            ? "bg-indigo-600 text-white px-3 py-1.5 rounded-md text-sm font-medium"
            : "text-slate-300 hover:text-white px-3 py-1.5 rounded-md text-sm font-medium"
        }
      >
        Explorar
      </NavLink>
      <NavLink
        to="/categorias"
        className={({ isActive }) =>
          isActive
            ? "bg-indigo-600 text-white px-3 py-1.5 rounded-md text-sm font-medium"
            : "text-slate-300 hover:text-white px-3 py-1.5 rounded-md text-sm font-medium"
        }
      >
        Categorías
      </NavLink>
      <NavLink
        to="/sobre"
        className={({ isActive }) =>
          isActive
            ? "bg-indigo-600 text-white px-3 py-1.5 rounded-md text-sm font-medium"
            : "text-slate-300 hover:text-white px-3 py-1.5 rounded-md text-sm font-medium"
        }
      >
        Sobre el proyecto
      </NavLink>
    </nav>
  );
};

export default Navbar;
