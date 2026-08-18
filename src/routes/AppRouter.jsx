import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Explorar from "../pages/Explorar";
import Categorias from "../pages/Categorias";
import Detalle from "../pages/Detalle";
import Sobre from "../pages/Sobre";
import NotFound from "../pages/NotFound";
import LayoutApp from "../layout/LayoutApp";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<LayoutApp />}>
        <Route index element={<Home />} />
        <Route path="explorar" element={<Explorar />} />
        <Route path="categorias" element={<Categorias />} />
        <Route path="contenido/:id" element={<Detalle />} />
        <Route path="sobre" element={<Sobre />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
