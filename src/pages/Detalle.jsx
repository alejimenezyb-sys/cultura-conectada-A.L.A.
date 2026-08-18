import { useParams, Link } from "react-router-dom";
import { contenidos } from "../data/contenidos";

const Detalle = () => {
  const { id } = useParams();
  const juego = contenidos.find((item) => item.id === Number(id));

  if (!juego) {
    return (
      <div className="max-w-3xl mx-auto px-6 py-12 text-center">
        <h2 className="text-2xl font-bold text-white mb-4">
          Juego no encontrado
        </h2>
        <Link
          to="/explorar"
          className="text-indigo-400 hover:underline text-sm"
        >
          ← Volver a explorar
        </Link>
      </div>
    );
  }

  return (
    <section className="max-w-3xl mx-auto px-6 py-8">
      <Link
        to="/explorar"
        className="inline-block text-sm text-indigo-400 hover:underline mb-6"
      >
        ← Volver a Explorar
      </Link>

      <div className="bg-slate-800 border border-slate-700 rounded-lg p-6 flex flex-col md:flex-row gap-6">
        <img
          src={juego.imagen}
          alt={juego.titulo}
          className="w-full md:w-1/2 h-64 object-cover rounded-md"
        />
        <div className="flex flex-col justify-between space-y-3">
          <div>
            <span className="text-xs text-indigo-400 font-semibold uppercase tracking-wider">
              {juego.genero}
            </span>
            <h1 className="text-2xl font-bold text-white mt-1">
              {juego.titulo}
            </h1>
            <p className="text-xs text-slate-400 mt-1">
              {juego.desarrollador} — {juego.anio}
            </p>
            <p className="text-sm text-slate-300 mt-3">{juego.descripcion}</p>
          </div>
          <div>
            <p className="text-lg font-bold text-emerald-400">
              {juego.precio}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Detalle;
