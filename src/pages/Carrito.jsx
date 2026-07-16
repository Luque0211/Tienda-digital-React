import { useProductos } from "../contexts/ProductosContext";

function Carrito() {
  const {
    carrito,
    aumentarCantidad,
    disminuirCantidad,
  } = useProductos();

  const total = carrito.reduce(
    (acumulado, producto) =>
      acumulado + producto.price * producto.cantidad,
    0
  );

  return (
    <div>
      <h2>Carrito</h2>

      {carrito.length === 0 && <p>El carrito está vacío.</p>}

      {carrito.map((producto) => (
        <div key={producto.id}>
          <h3>{producto.title}</h3>

          <p>${producto.price}</p>

          <p>Cantidad: {producto.cantidad}</p>

          <button onClick={() => disminuirCantidad(producto.id)}>
            -
          </button>

          <button onClick={() => aumentarCantidad(producto.id)}>
            +
          </button>
        </div>
      ))}

      <hr />

      <h2>Total: ${total.toFixed(2)}</h2>
    </div>
  );
}

export default Carrito;