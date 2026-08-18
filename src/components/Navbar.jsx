import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="flex items-center justify-between px-6 md:px-12 py-6 bg-[#16213A] text-[#F6F1E7]">
      <Link to="/" className="text-lg font-semibold tracking-wide">
        🎮 GameZone
      </Link>
      <nav className="flex gap-6 text-sm">
        <Link to="/explorar" className="hover:text-[#C9A227] transition-colors">
          Explorar
        </Link>
        <Link to="/categorias" className="hover:text-[#C9A227] transition-colors">
          Categorías
        </Link>
        <Link to="/sobre" className="hover:text-[#C9A227] transition-colors">
          Sobre
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;