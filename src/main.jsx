
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import ProductProvider from "./contexts/ProductContext";
import SidebarProvider from "./contexts/SidebarContext";
import CartProvider from "./contexts/CartContext";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
  <SidebarProvider>
    <CartProvider>
      <ProductProvider>
        <React.StrictMode>
          <App/>
        </React.StrictMode>
      </ProductProvider>
    </CartProvider>
  </SidebarProvider>
  </BrowserRouter>
);