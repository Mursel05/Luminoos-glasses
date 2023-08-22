import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import AboutUs from "./pages/aboutUs";
import ContactUs from "./pages/contactUs";
import Service from "./pages/service";
import Eyeglasses from "./pages/eyeglasses";
import GameGlasses from "./pages/gameGlasses";
import Sunglasses from "./pages/sunglasses";
import Details from "./pages/Detail";
import NotFound from "./components/NotFound";
import Faq from "./pages/faq";
import Cart from "./pages/cart";
import Wishlist from "./pages/wishlist";
import Thank from "./pages/thank";
import { useDispatch, useSelector } from "react-redux";
import { getAll } from "./redux/allPost";

const Router = () => {
  const theme = localStorage.getItem("mode");
  const loading = useSelector((state) => state.allReducer.loading);
  const data = useSelector((state) => state.allReducer.products);
  const dispatch = useDispatch();
  console.log(data);
  useEffect(() => {
    dispatch(getAll());
  }, []);

  if (localStorage.getItem("mode") == undefined) {
    localStorage.setItem("mode", "light");
  }
  if (loading) {
    return (
      <div className="loading">
        <img src="/images/backgrounds/loading-image.gif" alt="loading" />
      </div>
    );
  }
  return (
    <div className={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About Us" element={<AboutUs />} />
          <Route path="/Contact Us" element={<ContactUs />} />
          <Route path="/Thank" element={<Thank />} />
          <Route path="/Service" element={<Service />} />
          <Route path="/Eyeglasses" element={<Eyeglasses />} />
          <Route path="/Game Glasses" element={<GameGlasses />} />
          <Route path="/Sunglasses" element={<Sunglasses />} />
          <Route path="/Details/:id" element={<Details />} />
          <Route path="/Faq" element={<Faq />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/Wishlist" element={<Wishlist />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Router;
