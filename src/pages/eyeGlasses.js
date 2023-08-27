import React from 'react'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import EyeGlasses from "../components/Eyeglasses";
import Sort from "../components/Sort";
import Section from '../components/Section';
const eyeglasses = () => {
  return (
    <div>
      <Navbar/>
      <Section/>
      <Sort/>
      <EyeGlasses/>
      <Footer/>
    </div>
  )
}

export default eyeglasses