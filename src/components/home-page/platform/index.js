import React, { useEffect, useState } from "react";

import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

import style from "./style.module.css";
import Laptop from "../../../assets/home-laptop.png";
import LaptopAr from "../../../assets/Dell.png";
import Mobile from "../../../assets/iPhone 12 Pro.png";
import MobileText from "./mobile-text";
import LaptopText from "./laptop-text";

import "./motion.css";

const Platform = () => {
  const { t } = useTranslation();

  const _lang = useSelector((state) => state.lang);
  const [language, setLanguage] = useState();

  useEffect(() => {
    setLanguage(_lang);
  }, [setLanguage, _lang]);

  const images = [language === "en" ? Laptop : LaptopAr, Mobile];

  const [currentImage, setCurrentImage] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div
      className={`${style.background} pt-20 pb-12  image-container 
      ${language === "en" ? "" : "transform scale-x-[-1]"}
    
    `}
    >
      <div
        style={{ direction: language === "ar" ? "rtl" : "ltr" }}
        className={`flex flex-row w-[80%] mx-auto  py-10 
          screen1450:py-0
          screen540:w-[90%] 
          ${language === "en" ? "" : "transform scale-x-[-1]"}  `}
      >
        {images?.map((image, index) => {
          return (
            <img
              key={index}
              src={image}
              alt={`Slide ${index}`}
              className={`
                ${language === "ar" ? "imageArab" : "imageEng"}
                ${currentImage === index ? "visible" : "hiddenn"}`}
            />
          );
        })}
        {currentImage === 0 ? <MobileText /> : <LaptopText />}
      </div>
      <div
        className={` bg-white rounded-full w-fit mx-auto px-6 py-2 my-auto mt-8 relative
          screen540:px-20
          screen540:py-2
          screen450:px-14
          hover:bg-gradient-to-r hover:from-[#C25173]  hover:to-[#2B2E7F] hover:text-white  group 
          hover:shadow-[rgba(0,0,0,0.2)_0px_0px_6px_1px] 
              
          ${language === "en" ? "" : "transform scale-x-[-1]"}
        
          `}
      >
        <div
          className="bg-clip-text text-transparent bg-gradient-to-r from-[#FF5F6D]  to-[#082784] font-bold text-lg group-hover:text-white
            screen540:text-base
          "
        >
          {t("See all projects")}
        </div>
      </div>
    </div>
  );
};

export default Platform;
