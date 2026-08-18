import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section className="max-w-4xl mx-auto px-6 py-20 text-center">
      <h1 className="text-7xl font-extrabold text-indigo-500 mb-4">404</h1>
      <p className="text-xl text-slate-300 mb-8">
        Página no encontrada. La ruta que intentás visitar no existe.
      </p>
      <Link
        to="/"
        className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-6 py-3 rounded-lg text-base transition"
      >
        Volver al inicio
      </Link>
    </section>
  );
};

export default NotFound;
