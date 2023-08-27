import React, { createContext, useEffect } from "react";
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
import { getData } from "./redux/dataPost";
import { useState } from "react";

export const SortContext = createContext();

const Router = () => {
  const [sortedData, setSortedData] = useState([]);
  const theme = localStorage.getItem("mode");
    const loading = useSelector((state) => state.fetchReducer.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getData());
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
      <SortContext.Provider value={{ sortedData, setSortedData }}>
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
      </SortContext.Provider>
    </div>
  );
};

export default Router;
