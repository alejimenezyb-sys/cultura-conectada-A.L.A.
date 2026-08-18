import { contenidos } from "../data/contenidos";
import Card from "../components/Card";

const Explorar = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 py-8">
      <h1 className="text-3xl font-bold text-white mb-2">Explorar juegos</h1>
      <p className="text-slate-400 mb-8">
        Todos los juegos disponibles en el catálogo.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {contenidos.map((item) => (
          <Card key={item.id} contenido={item} />
        ))}
      </div>
    </section>
  );
};

export default Explorar;
