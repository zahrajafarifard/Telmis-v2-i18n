import React from "react";
import style from "./background.module.css";
import { useTranslation } from "react-i18next";

const Header = () => {
  const { t } = useTranslation();

  return (
    <div className={`${style.background} pt-40 pb-20`}>
      <h1 className="w-[45%] text-5xl leading-[1.4] font-[600] text-[#FDD9E5] screen1080:text-4xl screen750:text-3xl screen540:font-[600] screen540:text-[#FDD9E5] screen540:text-2xl mx-auto screen540:px-3">
        {t("designHeader")}
      </h1>

      <div
        className=" w-fit mx-auto bg-white rounded-full px-20 py-2 mt-10  screen1080:py-2
      group hover:to-[#2B2E7F] hover:bg-gradient-to-r hover:from-[#C25173]
      "
      >
        <div
          className="bg-clip-text text-transparent bg-gradient-to-r to-[#082784] from-[#FF5F6D] font-bold text-lg  group-hover:text-white
        
        screen1080:text-base
        screen750:text-sm
        screen540:text
        
        "
        >
          {t("Contact us")}
        </div>
      </div>
    </div>
  );
};

export default Header;
