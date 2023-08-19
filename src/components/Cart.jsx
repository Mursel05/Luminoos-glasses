import React, { useEffect, useState } from "react";
import { useCart } from "react-use-cart";
import Product from "./Product";
import { NavLink, useNavigate } from "react-router-dom";
import supabase from "../supabase";
const Cart = () => {
  const navigate = useNavigate();
  const [data, setData] = useState("");
  const fetchData = async () => {
    try {
      const { data, error } = await supabase
        .from("promo-code")
        .select("*")
        .limit(1);
      if (error) throw error;
      if (data !== "") setData(data);
    } catch (error) {
      window.location.reload();
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  const { isEmpty, cartTotal, totalItems, items } = useCart();
  const [price, setPrice] = useState(cartTotal);
  const [code, setCode] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [errorAppearance, setErrorAppearance] = useState("code-error hidden");
  const trueCode = () => {
    isChecked ? setPrice((cartTotal / 2).toFixed(2)) : setPrice(cartTotal);
    setErrorAppearance("code-error hidden");
  };
  const falseCode = () => {
    setPrice(cartTotal);
    setErrorAppearance("code-error");
  };
  if (isEmpty)
    return (
      <div className="cart">
        <div className="empty-text">
          <p>Your cart is empty</p>
          <NavLink className="navLink">
            <span>Continue Shopping</span>
          </NavLink>
        </div>
      </div>
    );
  return (
    <div className="cart">
      <p>Your cart</p>
      <div className="cart-products">
        {items.map((product) => {
          return (
            <div>
              <Product product={product} active={"active"} />
            </div>
          );
        })}
      </div>
      <div className="">
        <div className="cart-buy">
          <div className="cart-info">
            <span className="cart-items">{totalItems} product</span>
            <span className="cart-total">Total: ${price}</span>
          </div>
          <button onClick={() => navigate("/Thank")}>Buy</button>
        </div>
        <div className="discount-code">
          <div className="promo-code">
            <input
              type="checkbox"
              checked={isChecked}
              onChange={() => {
                setIsChecked(!isChecked);
                if (isChecked) {
                  setPrice(cartTotal);
                }
              }}
              id="promo-checkbox"
            />
            <label htmlFor="promo-checkbox">Enter promo code</label>
          </div>
          {isChecked == true && (
            <div>
              <form
                action="/"
                onSubmit={(e) => {
                  e.preventDefault();
                  if (data != "") {
                    data.some((item) => {
                      return item.code == code;
                    })
                      ? trueCode()
                      : falseCode();
                  }
                }}
              >
                <div className="enter-promo-code">
                  <input
                    type="text"
                    value={code}
                    onChange={(e) => {
                      setCode(e.target.value);
                    }}
                  />
                  <button type="submit">Get discount</button>
                </div>
              </form>
              <div>
                <span className={errorAppearance}>Wrong code</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
