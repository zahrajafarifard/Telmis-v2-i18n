import React from "react";
import { useTranslation } from "react-i18next";

import style from "./background.module.css";

const Header = () => {
  const { t } = useTranslation();

  return (
    <div className={`${style.background} pt-40 pb-20`}>
      <h1 className="text-5xl leading-[1.4] font-[600] text-[#FFF]">
        {t("Netheader")}
      </h1>

      <div className=" w-fit mx-auto bg-white rounded-full px-20 py-2 mt-10 group hover:to-[#2B2E7F] hover:bg-gradient-to-r hover:from-[#C25173] ">
        <div className="bg-clip-text text-transparent bg-gradient-to-r to-[#082784] from-[#FF5F6D] font-bold text-lg group-hover:text-white">
          {t("Contact us")}
        </div>
      </div>
    </div>
  );
};

export default Header;
