# 🎮 GameZone

Una SPA (Single Page Application) desarrollada con **React**, **React Router** y **Tailwind CSS** que funciona como catálogo de videojuegos. Los usuarios pueden explorar juegos, ver detalles de cada uno y navegar por categorías.

---

## Tecnologías usadas

- [React](https://react.dev/) — librería para construir interfaces
- [React Router](https://reactrouter.com/) — manejo de rutas del lado del cliente
- [Tailwind CSS](https://tailwindcss.com/) — framework CSS de clases de utilidad
- [Vite](https://vitejs.dev/) — bundler y servidor de desarrollo

---

## Estructura del proyecto

```
src/
├── components/
│   ├── Navbar.jsx          # Barra de navegación compartida con NavLink
│   ├── Card.jsx            # Card reutilizable para cada juego
│   └── Footer.jsx          # Pie de página compartido
├── data/
│   └── contenidos.js       # Array de juegos y categorías (datos locales)
├── layout/
│   └── LayoutApp.jsx       # Layout con Navbar + Outlet + Footer
├── routes/
│   └── AppRouter.jsx       # Definición de rutas principales
├── pages/
│   ├── Home.jsx            # Pantalla de inicio con hero y destacados
│   ├── Explorar.jsx        # Catálogo completo de juegos
│   ├── Categorias.jsx      # Grilla de categorías/géneros
│   ├── Detalle.jsx         # Detalle de un juego por ID
│   ├── sobre.jsx           # Info sobre el proyecto
│   └── NotFound.jsx        # Página de error 404
├── index.css               # Importación de Tailwind CSS
└── main.jsx                # Punto de entrada de la aplicación
```

---

## Rutas disponibles

| Ruta | Vista | Descripción |
|------|-------|-------------|
| `/` | Home | Inicio con hero, categorías y juegos destacados |
| `/explorar` | Explorar | Todos los juegos |
| `/categorias` | Categorias | Grilla de categorías |
| `/contenido/:id` | Detalle | Detalle de un juego por ID dinámico (`useParams`) |
| `/sobre` | sobre | Información del proyecto |
| `*` | NotFound | Página no encontrada |

---

## Cómo ejecutar el proyecto

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

Abre [http://localhost:5173](http://localhost:5173) en el navegador.

---

## Conceptos clave aplicados

- **Rutas anidadas**: uso de `<Route>` dentro de un `LayoutApp` común.
- **Ruta dinámica**: parametrización `:id` para `Detalle`.
- **`useParams`**: extracción de parámetros de la URL en React Router.
- **`NavLink`**: estado `isActive` para resaltar la opción seleccionada.
- **`Outlet`**: punto donde se renderizan las sub-rutas dentro del layout.
- **Tailwind CSS**: estilado mediante clases utilitarias limpias y semánticas.
