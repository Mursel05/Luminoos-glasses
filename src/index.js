import React from "react";
import ReactDOM from "react-dom/client";
import Router from "./Router";
import "./Index.scss";
import { CartProvider } from "react-use-cart";
import { store } from "./redux/store";
import { Provider } from "react-redux";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <CartProvider>
      <Router />
    </CartProvider>
  </Provider>
);

