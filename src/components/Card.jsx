import { Link } from "react-router-dom";

const Card = ({ contenido }) => {
  return (
    <article className="bg-slate-800 border border-slate-700 rounded-lg overflow-hidden flex flex-col justify-between">
      <img
        src={contenido.imagen}
        alt={contenido.alt || contenido.titulo}
        className="w-full h-44 object-cover"
      />
      <div className="p-4 flex-1 flex flex-col justify-between">
        <div>
          {contenido.genero && (
            <span className="text-xs text-indigo-400 font-semibold uppercase tracking-wide">
              {contenido.genero}
            </span>
          )}
          <h3 className="text-lg font-bold text-white mt-1">
            {contenido.titulo}
          </h3>
          {(contenido.desarrollador || contenido.anio) && (
            <p className="text-xs text-slate-400 mt-1">
              {[contenido.desarrollador, contenido.anio]
                .filter(Boolean)
                .join(" — ")}
            </p>
          )}
          {contenido.precio && (
            <p className="text-sm text-emerald-400 font-bold mt-1">
              {contenido.precio}
            </p>
          )}
          <p className="text-sm text-slate-300 mt-2 line-clamp-2">
            {contenido.descripcion}
          </p>
        </div>
        <Link
          to={`/contenido/${contenido.id}`}
          className="mt-4 block text-center bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium py-2 rounded transition"
        >
          Ver más
        </Link>
      </div>
    </article>
  );
};

export default Card;
