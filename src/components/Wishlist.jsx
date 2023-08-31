import React from "react";
import { NavLink } from "react-router-dom";
import { useWishlist } from "react-use-wishlist";
import Product from "./Product";

const Wishlist = () => {
  const { isWishlistEmpty, items } = useWishlist();
  if (isWishlistEmpty)
    return (
      <div className="wishlist">
        <div className="empty-text">
          <p>Your cart is empty</p>
          <NavLink className="navLink">
            <span>Continue Shopping</span>
          </NavLink>
        </div>
      </div>
    );
  return (
    <div className="wishlist">
      <p>Your Wishlist</p>
      <div className="wishlist-products">
        {items.map((product) => {
          return (
            <div>
              <Product product={product} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Wishlist;
