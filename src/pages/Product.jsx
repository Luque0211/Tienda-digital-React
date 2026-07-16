import { useParams } from "react-router-dom";
import { useProductos } from "../contexts/ProductosContext";

function Product() {
  const { id } = useParams();
  const { productos, agregarAlCarrito } = useProductos();
  const producto = productos.find((p) => p.id === Number(id));

  if (!producto) {
    return <h2>Cargando...</h2>;
  }

  return (
    <div>
      <h2>{producto.title}</h2>

      <img src={producto.image} alt={producto.title} width="250" />

      <p>{producto.description}</p>

      <h3>${producto.price}</h3>

      <button onClick={() => agregarAlCarrito(producto)}>
        Agregar al carrito
      </button>

      <p>Categoría: {producto.category}</p>

      <p>{producto.rating.rate}</p>
    </div>
  );
}

export default Product;