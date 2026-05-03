import React from "react";
import { useTranslation } from "react-i18next";

import style from "./style.module.css";

const Header = () => {
  const { t } = useTranslation();

  return (
    <div className={`${style.gradientBg} pt-48 pb-28 `}>
      <h1
        className="text-5xl leading-[67px] text-[#fdd9e5] font-[600] 
        screen1250:text-4xl 
        screen1250:leading-[50px]
        screen450:text-3xl
        screen450:leading-10
        screen450:px-2
        "
      >
        {t("termsHeader")}
      </h1>
    </div>
  );
};

export default Header;
