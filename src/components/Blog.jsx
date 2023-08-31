import React from "react";
import { useContext } from "react";
import { LanguageContext } from "../Router";
import langData from "../languageData";
import { useState } from "react";
import { useEffect } from "react";

const Blog = () => {
  const { language } = useContext(LanguageContext);
  const [data, setData] = useState(langData[language].blogs);

  useEffect(() => {
    setData(langData[language].blogs);
  }, [language]);
  const datas = [
    {
      id: 1,
      image: "/images/blog/blog-right-frame.webp",
      header: "How To Choose The Right Glasses Frame Colour?",
      answer:
        "Not sure what your glasses measurements are or how to find them? Keep reading, you’ll find all the information you need! The better your frames fit, the better they flatter your face. Consider searching for your glasses as you would for a pair of shoes – first, you need to know your size. From lens width to bridge width, each of your glass’s features play an important part in determining the right frame size for you. In order to find a pair that fits perfectly, here’s a guide to help you find your glasses measurement. Scroll through the different sections of this guide to find your glasses features: How to Measure Your Glasses Lens width: Between 31-60 mm Bridge width: Between 12-31 mm Temple length: Between 115-155 mm It’s easiest to find a pair of glasses that fit you already — whether they’re your current prescription pair, a set of sunglasses, or even your friend’s glasses (if you don’t yet have your own) and get the sizing from there. If you’re not familiar with the process, here’s how to measure your glasses. Use Temple (Arm) Measurements Look at the inside temple of your frame and check for the numbers indicated above. You can usually find them on the left-hand side, though some may be displayed on the ear piece or the bridge of your nose. Typically, you’ll see three numbers: one 2-digit figure which represents the lens width, one 2-digit figure that represents the bridge width, and a 3-digit figure that measures the length of your frame arms. Did you know that your lens thickness changes according to its width? Indeed, the larger the lens width, the thicker the lenses will be! This also applies to lens height- if your new frame is much taller than the shape you’re currently wearing you can expect thicker lenses. For prescriptions with a minus in the SPH portion the thickness is greatest at the edges of the lenses. For plus prescriptions that thickness is greatest at the middle of the lenses.",
      date: "02.06",
    },
    {
      id: 2,
      image: "/images/blog/blog-adjust.jpg",
      header: "How To Adjust Glasses?",
      answer:
        "Not sure what your glasses measurements are or how to find them? Keep reading, you’ll find all the information you need! The better your frames fit, the better they flatter your face. Consider searching for your glasses as you would for a pair of shoes – first, you need to know your size. From lens width to bridge width, each of your glass’s features play an important part in determining the right frame size for you. In order to find a pair that fits perfectly, here’s a guide to help you find your glasses measurement. Scroll through the different sections of this guide to find your glasses features: How to Measure Your Glasses Lens width: Between 31-60 mm Bridge width: Between 12-31 mm Temple length: Between 115-155 mm It’s easiest to find a pair of glasses that fit you already — whether they’re your current prescription pair, a set of sunglasses, or even your friend’s glasses (if you don’t yet have your own) and get the sizing from there. If you’re not familiar with the process, here’s how to measure your glasses. Use Temple (Arm) Measurements Look at the inside temple of your frame and check for the numbers indicated above. You can usually find them on the left-hand side, though some may be displayed on the ear piece or the bridge of your nose. Typically, you’ll see three numbers: one 2-digit figure which represents the lens width, one 2-digit figure that represents the bridge width, and a 3-digit figure that measures the length of your frame arms. Did you know that your lens thickness changes according to its width? Indeed, the larger the lens width, the thicker the lenses will be! This also applies to lens height- if your new frame is much taller than the shape you’re currently wearing you can expect thicker lenses. For prescriptions with a minus in the SPH portion the thickness is greatest at the edges of the lenses. For plus prescriptions that thickness is greatest at the middle of the lenses.",
      date: "04.26",
    },
    {
      id: 3,
      image: "/images/blog/blog-service.webp",
      header: "How To ask for help from service?",
      answer:
        "Not sure what your glasses measurements are or how to find them? Keep reading, you’ll find all the information you need! We're here to make your experience with our eyeglasses as smooth as possible. If you have any questions or need assistance, our customer service team is ready to help. Here's how you can ask for help. Choose Your Method of Contact. We offer multiple ways to get in touch. Call us at during our business hours for immediate assistance. Send an email to if you prefer written communication. We'll respond as quickly as possible. Once we receive your inquiry, our customer service team will review the information and respond as soon as we can. Our goal is to address your concerns effectively and provide you with a satisfactory solution. We're dedicated to assisting you throughout your eyeglasses journey. Don't hesitate to ask for help – we're here to ensure you have the best experience possible!",
      service: "active",
      date: "03.26",
    },
  ];
  return (
    <div className="blog">
      <h1>{data.header}</h1>
      <div className="blogs">
        {datas.map((blog) => {
          return (
            <div className="blogs-part" key={blog.id}>
              <img src={blog.image} alt="blog" />
              <div className="blog-details">
                <span className="blog-date">{blog.date}</span>
                <p className="blog-question">{blog.header}</p>
                <span className="blog-answer">
                  "Not sure what your glasses measurements are or how to find
                  them? Keep reading, you’ll find all the information you need!
                  The...
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Blog;
