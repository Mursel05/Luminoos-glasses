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
import NewPassword from "./components/NewPassword";
import Faq from "./pages/faq";
import Cart from "./pages/cart";
import Wishlist from "./pages/wishlist";
import Products from "./pages/products";
import Thank from "./pages/thank";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "./redux/dataPost";
import { useState } from "react";
import supabase from "./supabase";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Account from "./pages/account";

export const SortContext = createContext();
export const LanguageContext = createContext();
export const LoginContext = createContext();

const Router = () => {
  async function signOut() {
    const { error } = await supabase.auth.signOut();
  }

  const [sortedData, setSortedData] = useState([]);
  const [language, setLanguage] = useState(
    localStorage.getItem("language") ? localStorage.getItem("language") : "en"
  );
  const [session, setSession] = useState(null);
  const theme = localStorage.getItem("mode");
  const loading = useSelector((state) => state.fetchReducer.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getData());
    if (localStorage.getItem("mode") == undefined) {
      localStorage.setItem("mode", "light");
    }
    if (localStorage.getItem("language") == undefined) {
      localStorage.setItem("language", "en");
    }
    // signOut()
  }, []);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  if (loading) {
    return (
      <div className="loading">
        <img src="/images/backgrounds/loading-image.gif" alt="loading" />
      </div>
    );
  }

  return (
    <div className={theme}>
      <LanguageContext.Provider value={{ language, setLanguage }}>
        <SortContext.Provider value={{ sortedData, setSortedData }}>
          <LoginContext.Provider value={session}>
            <BrowserRouter>
              <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
              />
              <ToastContainer />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/About Us" element={<AboutUs />} />
                <Route path="/Contact Us" element={<ContactUs />} />
                <Route path="/Thank" element={<Thank />} />
                <Route path="/My Account" element={<Account />} />
                <Route path="/Service" element={<Service />} />
                <Route path="/Eyeglasses" element={<Eyeglasses />} />
                <Route path="/Products" element={<Products />} />
                <Route path="/New Password" element={<NewPassword />} />
                <Route path="/Game Glasses" element={<GameGlasses />} />
                <Route path="/Sunglasses" element={<Sunglasses />} />
                <Route path="/Details/:id" element={<Details />} />
                <Route path="/FAQ" element={<Faq />} />
                <Route path="/Cart" element={<Cart />} />
                <Route path="/Wishlist" element={<Wishlist />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </BrowserRouter>
          </LoginContext.Provider>
        </SortContext.Provider>
      </LanguageContext.Provider>
    </div>
  );
};

export default Router;
