import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./router/Router.jsx";
import CartProvider from "./Contexts/CartContext.jsx";
import SidebarProvider from "./Contexts/SidebarContext.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SidebarProvider>
      <CartProvider>
        <RouterProvider router={router}>
          <App />
        </RouterProvider>
      </CartProvider>
    </SidebarProvider>
  </React.StrictMode>
);
