import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ProductosProvider } from "./contexts/ProductosContext";

import App from "./App";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ProductosProvider>
      <App />
    </ProductosProvider>
  </BrowserRouter>
);