import { useParams } from "react-router-dom";

const Detalle = () => {
  const { id } = useParams();
  return (
    <section className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold text-white">Detalle de contenido</h1>
      <p className="text-slate-400 mt-2">ID: {id}</p>
    </section>
  );
};

export default Detalle;
