const sobre = () => {
  return (
    <section className="max-w-4xl mx-auto px-6 py-8 space-y-6">
      <h1 className="text-3xl font-bold text-white mb-6">Sobre el proyecto</h1>

      <div className="bg-slate-800 border-l-4 border-indigo-500 p-5 rounded-r-lg">
        <h2 className="text-xl font-semibold text-white mb-2">
          Objetivo de la aplicación
        </h2>
        <p className="text-slate-300">
          Game Zone es una SPA desarrollada para explorar el mundo de los
          videojuegos. Su objetivo es actuar como punto de encuentro entre
          jugadores y creadores.
        </p>
      </div>

      <div className="bg-slate-800 border-l-4 border-indigo-500 p-5 rounded-r-lg">
        <h2 className="text-xl font-semibold text-white mb-2">
          ¿Qué significa esta plataforma?
        </h2>
        <p className="text-slate-300">
          Una plataforma simple para navegar por distintos juegos, conocer sus
          desarrolladores, géneros y años de lanzamiento.
        </p>
      </div>

      <div className="bg-slate-800 border-l-4 border-indigo-500 p-5 rounded-r-lg">
        <h2 className="text-xl font-semibold text-white mb-2">
          ¿Quiénes desarrollaron este proyecto?
        </h2>
        <p className="text-slate-300">
          Este proyecto fue construido como trabajo práctico en equipo.
        </p>
      </div>
    </section>
  );
};

export default Sobre;
