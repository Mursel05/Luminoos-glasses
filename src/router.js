import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import AboutUs from "./pages/aboutUs";
import ContactUs from "./pages/contactUs";
import Service from "./pages/service";
import EyeGlasses from "./pages/eyeGlasses";
import GameGlasses from "./pages/gameGlasses";
import SunGlasses from "./pages/sunGlasses";
import Details from "./pages/details";
import NotFound from "./components/NotFound";
import Faq from "./pages/faq";
import Cart from "./pages/cart";
import Wishlist from "./pages/wishlist";
const router = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About Us" element={<AboutUs />} />
          <Route path="/Contact Us" element={<ContactUs />} />
          <Route path="/Service" element={<Service />} />
          <Route path="/Eyeglasses" element={<EyeGlasses />} />
          <Route path="/Game Glasses" element={<GameGlasses />} />
          <Route path="/Sunglasses" element={<SunGlasses />} />
          <Route path="" element={<Details />} />
          <Route path="/Faq" element={<Faq />} />
          <Route path="/Shopping Cart" element={<Cart />} />
          <Route path="/Wishlist" element={<Wishlist />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default router;
