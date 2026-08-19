import { useSearchParams } from "react-router-dom";
import { contenidos, categorias } from "../data/contenidos";
import Card from "../components/Card";

const Explorar = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoriaSeleccionada = searchParams.get("categoria") || "";

  const juegosFiltrados = categoriaSeleccionada
    ? contenidos.filter((item) => item.genero === categoriaSeleccionada)
    : contenidos;

  const seleccionarCategoria = (nombre) => {
    if (nombre) {
      setSearchParams({ categoria: nombre });
    } else {
      setSearchParams({});
    }
  };

  return (
    <section className="max-w-6xl mx-auto px-6 py-8">
      <h1 className="text-3xl font-bold text-white mb-2">Explorar juegos</h1>
      <p className="text-slate-400 mb-6">
        Explora todos los títulos disponibles o filtra por tu categoría favorita.
      </p>

      {/* Filtros de Categoría */}
      <div className="flex flex-wrap items-center gap-2 mb-8">
        <button
          onClick={() => seleccionarCategoria("")}
          className={`px-3 py-1.5 rounded-full text-xs font-medium border transition cursor-pointer ${
            !categoriaSeleccionada
              ? "bg-indigo-600 border-indigo-500 text-white"
              : "bg-slate-800 border-slate-700 text-slate-300 hover:bg-indigo-600 hover:text-white hover:border-indigo-500"
          }`}
        >
          Todos
        </button>
        {categorias.map((cat) => (
          <button
            key={cat.id}
            onClick={() => seleccionarCategoria(cat.nombre)}
            className={`px-3 py-1.5 rounded-full text-xs font-medium border transition cursor-pointer ${
              categoriaSeleccionada === cat.nombre
                ? "bg-indigo-600 border-indigo-500 text-white"
                : "bg-slate-800 border-slate-700 text-slate-300 hover:bg-indigo-600 hover:text-white hover:border-indigo-500"
            }`}
          >
            {cat.icono} {cat.nombre}
          </button>
        ))}
      </div>

      {/* Grilla de Contenidos */}
      {juegosFiltrados.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {juegosFiltrados.map((item) => (
            <Card key={item.id} contenido={item} />
          ))}
        </div>
      ) : (
        <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-8 text-center">
          <p className="text-slate-400">
            No se encontraron juegos en la categoría{" "}
            <strong className="text-white">{categoriaSeleccionada}</strong>.
          </p>
          <button
            onClick={() => seleccionarCategoria("")}
            className="mt-4 text-sm text-indigo-400 hover:underline"
          >
            Ver todos los juegos
          </button>
        </div>
      )}
    </section>
  );
};

export default Explorar;
