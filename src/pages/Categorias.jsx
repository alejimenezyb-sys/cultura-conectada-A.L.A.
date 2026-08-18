import { Link } from "react-router-dom";
import { categorias } from "../data/contenidos";

const Categorias = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 py-8">
      <h1 className="text-3xl font-bold text-white mb-2">Categorías</h1>
      <p className="text-slate-400 mb-6">
        Selecciona una categoría para explorar los juegos disponibles.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4">
        {categorias.map((cat) => (
          <Link
            key={cat.id}
            to={`/explorar?categoria=${encodeURIComponent(cat.nombre)}`}
            className="bg-slate-800 border border-slate-700 hover:border-indigo-500 p-5 rounded-lg text-center transition flex flex-col items-center justify-center space-y-2 group"
          >
            <span className="text-3xl group-hover:scale-110 transition-transform">
              {cat.icono}
            </span>
            <span className="text-slate-200 group-hover:text-indigo-400 font-medium text-sm">
              {cat.nombre}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Categorias;
