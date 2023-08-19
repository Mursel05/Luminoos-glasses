import React from "react";
import Navbar from "../components/Navbar";
import Section from "../components/Section";
import Footer from "../components/Footer";
import Details from "../components/Details";
import Recommend from "../components/Recommend";
import { useParams } from "react-router-dom";

const Detail = () => {
  let id = useParams();
  return (
    <div className="details-page">
      <Navbar />
      <Section />
      <Details />
      <Recommend id={id} />
      <Footer />
    </div>
  );
};

export default Detail;
