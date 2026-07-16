import { Link } from "react-router-dom";
import { useProductos } from "../contexts/ProductosContext";

function Home() {
  const { productos } = useProductos();

  return (
    <div>
      <h2>Productos</h2>

      <div className="productos">
        {productos.map((producto) => (
          <div className="card" key={producto.id}>
            <img
              src={producto.image}
              alt={producto.title}
            />

            <h3>{producto.title}</h3>

            <p>${producto.price}</p>

            <Link to={`/product/${producto.id}`}>
              Ver producto
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;