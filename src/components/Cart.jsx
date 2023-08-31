import React, { useEffect, useState } from "react";
import { useCart } from "react-use-cart";
import Product from "./Product";
import { NavLink, useNavigate } from "react-router-dom";
import supabase from "../supabase";
import { useContext } from "react";
import { LanguageContext, LoginContext } from "../Router";
import langData from "../languageData";
import { toast } from "react-toastify";
const Cart = () => {
  const { language } = useContext(LanguageContext);
  const session = useContext(LoginContext);
  const [data, setData] = useState(langData[language].cart);

  useEffect(() => {
    setData(langData[language].cart);
  }, [language]);
  const navigate = useNavigate();
  const [datas, setDatas] = useState("");
  const fetchData = async () => {
    try {
      const { data, error } = await supabase
        .from("promo-code")
        .select("*")
        .limit(1);
      if (error) throw error;
      if (data !== "") setDatas(data);
    } catch (error) {
      window.location.reload();
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  const { isEmpty, cartTotal, totalItems, items, emptyCart } = useCart();
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
          <p>{data.empty}</p>
          <NavLink className="navLink">
            <span>Continue Shopping</span>
          </NavLink>
        </div>
      </div>
    );
  return (
    <div className="cart">
      <p>{data.header}</p>
      <div className="cart-products">
        {items.map((product) => {
          return (
            <div key={product.id}>
              <Product product={product} active={"active"} />
            </div>
          );
        })}
      </div>
      <div>
        <div className="cart-buy">
          <div className="cart-info">
            <span className="cart-items">
              {totalItems} {data.item}
            </span>
            <span className="cart-total">
              {data.sum}: ${price}
            </span>
          </div>
          <button
            onClick={() => {
              if (session) {
                emptyCart();
                navigate("/Thank");
              } else {
                toast.warning("You should sign in to buy glasses!");
              }
            }}
          >
            {data.mainBtn}
          </button>
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
            <label htmlFor="promo-checkbox">{data.code}</label>
          </div>
          {isChecked == true && (
            <div>
              <form
                action="/"
                onSubmit={(e) => {
                  e.preventDefault();
                  if (datas != "") {
                    datas.some((item) => {
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
                  <button type="submit">{data.codeBtn}</button>
                </div>
              </form>
              <div>
                <span className={errorAppearance}>{data.error}</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
