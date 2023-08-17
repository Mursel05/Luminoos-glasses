import React, { useContext } from "react";
import { useCart } from "react-use-cart";
import { DataContext } from "../router";
import Product from "./Product";
const Cart = () => {
  const { isEmpty, totalUniqueItems, items, updateItemQuantity, removeItem } =
    useCart();
  return items.map((product) => {
    return (
      <div>
        <Product product={product} />
      </div>
    );
  });
};

export default Cart;
