import React from 'react'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import EyeGlasses from "../components/EyeGlasses";
import Section from '../components/Section';
const eyeGlasses = () => {
  return (
    <div>
      <Navbar/>
      <Section/>
      <EyeGlasses/>
      <Footer/>
    </div>
  )
}

export default eyeGlasses