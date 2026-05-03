import React from "react";
import { useTranslation } from "react-i18next";

import style from "./style.module.css";

const Header = () => {
  const { t } = useTranslation();

  return (
    <div className={`${style.gradientBg} pt-40 pb-20`}>
      <h1
        className="text-5xl leading-[67px] text-[#fdd9e5] font-[600] 
          px-5 w-[60%] mx-auto
          screen1700:w-[70%]
          screen1450:w-[75%]
          screen1450:px-0
          screen1250:text-4xl screen1250:leading-[50px]
          screen1250:w-2/3
          screen990:w-[80%]
          screen670:w-[90%]
          screen750:text-4xl screen750:leading-[50px]  
          screen450:text-3xl
          screen450:w-[95%]
          screen450:leading-10
        "
      >
        {t("contactHeader")}
      </h1>
    </div>
  );
};

export default Header;
