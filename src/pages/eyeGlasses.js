import React from 'react'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import EyeGlasses from "../components/EyeGlasses";
import Search from '../components/Search';
const eyeGlasses = () => {
  return (
    <div>
      <Navbar/>
      <Search/>
      <EyeGlasses/>
      <Footer/>
    </div>
  )
}

export default eyeGlasses