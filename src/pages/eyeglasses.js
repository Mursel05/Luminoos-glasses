import React from 'react'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import EyeGlasses from "../components/Eyeglasses";
import Sort from "../components/Sort";
import Section from '../components/Section';
import { Helmet } from 'react-helmet';
const eyeglasses = () => {
  return (
    <div>
      <Helmet>
        <title>{"Eyeglasses"}</title>
      </Helmet>
      <Navbar />
      <Section />
      <Sort />
      <EyeGlasses />
      <Footer />
    </div>
  );
}

export default eyeglasses