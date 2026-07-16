import { Link, Outlet } from "react-router-dom";
import { useProductos } from "../contexts/ProductosContext";

function Layout() {
  const { carrito } = useProductos();

  const cantidad = carrito.reduce(
    (total, producto) => total + producto.cantidad,
    0
  );

  return (
    <>
      <header className="header">
        <h1>Tienda Digital</h1>

        <nav>
          <Link to="/">Inicio</Link>

          <Link to="/carrito">
            🛒 Carrito ({cantidad})
          </Link>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>
    </>
  );
}

export default Layout;