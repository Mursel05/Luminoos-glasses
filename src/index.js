import React from "react";
import ReactDOM from "react-dom/client";
import Router from "./router";
import reportWebVitals from "./reportWebVitals";
import "./Index.scss";
import { CartProvider } from "react-use-cart";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <CartProvider>
    <Router />
  </CartProvider>
);

reportWebVitals();
