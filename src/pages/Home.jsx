import { Link } from "react-router-dom";
import { contenidos, categorias } from "../data/contenidos";
import Card from "../components/Card";

const Home = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 py-8">
      <h1 className="text-3xl font-bold text-white mb-2">Game Zone</h1>
      <p className="text-slate-400 mb-6">
        Una plataforma donde los usuarios pueden descubrir diferentes
        videojuegos actuales.
      </p>

      <h2 className="text-xl font-semibold text-white mb-3">
        Categorías destacadas
      </h2>
      <ul className="flex flex-wrap gap-2 mb-8">
        {categorias.map((cat) => (
          <li key={cat.id}>
            <Link
              to="/explorar"
              className="bg-slate-800 text-slate-200 hover:bg-indigo-600 hover:text-white px-3 py-1.5 rounded-full text-sm font-medium border border-slate-700 transition"
            >
              {cat.icono} {cat.nombre}
            </Link>
          </li>
        ))}
      </ul>

      <h2 className="text-xl font-semibold text-white mb-4">
        Contenidos destacados
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {contenidos.slice(0, 3).map((item) => (
          <Card key={item.id} contenido={item} />
        ))}
      </div>
    </section>
  );
};

export default Home;
