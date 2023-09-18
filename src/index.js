import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./Index.scss";
import { CartProvider } from "react-use-cart";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import { WishlistProvider } from "react-use-wishlist";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <WishlistProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </WishlistProvider>
  </Provider>
);
