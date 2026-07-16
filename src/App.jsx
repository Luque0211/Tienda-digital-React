import { Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Carrito from "./pages/Carrito";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="product/:id" element={<Product />} />
        <Route path="carrito" element={<Carrito />} />
      </Route>
    </Routes>
  );
}

export default App;