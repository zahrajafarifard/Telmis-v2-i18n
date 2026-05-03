import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

import Img1 from "../../assets/about-img (1).png";
import Img2 from "../../assets/about-img (2).png";
import Img3 from "../../assets/about-img (3).png";
import Img4 from "../../assets/about-img (4).png";
import Img5 from "../../assets/about-img (5).png";

import FirstChildDetails from "./child-details";

const Child = () => {
  const { t } = useTranslation();
  const _lang = useSelector((state) => state.lang);
  const [language, setLanguage] = useState();

  useEffect(() => {
    setLanguage(_lang);
  }, [setLanguage, _lang]);

  return (
    <div className="my-20">
      <div
        className="text-[#AC4C75] font-bold text-4xl
          screen1250:text-3xl
          screen450:text-2xl
        "
      >
        {t("Who Are We")}
      </div>
      <h4
        style={{ direction: language === "ar" ? "rtl" : "ltr" }}
        className="text-[#555858] w-[80%] leading-7 text-xl mx-auto mt-8
        screen1250:text-lg
        screen750:text-base
        "
      >
        {t("aboutUsText")}
      </h4>
      <div
        className="text-[#AC4C75] font-bold text-4xl mt-20 mb-6 
          screen1250:text-3xl
          screen450:text-2xl
        "
      >
        {t("Our values")}
      </div>

      <div
        className="flex flex-wrap justify-center gap-y-8 w-[80%] mx-auto
        screen750:w-[90%]
        "
      >
        <FirstChildDetails
          img={Img1}
          title={t("Innovation")}
          text={t("aboutUs1")}
          language={language}
        />
        <FirstChildDetails
          img={Img2}
          title={t("Quality")}
          text={t("aboutUs2")}
          language={language}
        />
        <FirstChildDetails
          img={Img3}
          title={t("Customer-Centricity")}
          text={t("aboutUs3")}
          language={language}
        />
        <FirstChildDetails
          img={Img4}
          title={t("Integrity")}
          text={t("aboutUs4")}
          language={language}
        />
        <FirstChildDetails
          img={Img5}
          title={t("Teamwork")}
          text={t("aboutUs5")}
          language={language}
        />
      </div>

      <div
        className="text-[#AC4C75] font-bold text-4xl mt-20
          screen1250:text-3xl
          screen450:text-2xl
        "
      >
        {t("Our vision")}
      </div>
      <h4
        style={{ direction: language === "ar" ? "rtl" : "ltr" }}
        className="text-[#555858] w-[80%] leading-7 text-xl mx-auto mt-8
          screen1250:text-lg
          screen750:text-base
        "
      >
        {t("vision")}
      </h4>
    </div>
  );
};

export default Child;
