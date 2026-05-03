import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

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
        {t("Getintouch")}
      </div>
      <h4
        style={{ direction: language === "ar" ? "rtl" : "ltr" }}
        className={`text-[#555858] w-[80%] leading-7 text-xl mx-auto mt-8
          screen1250:text-lg
          screen750:text-base
        `}
      >
        {t("GetintouchText")}
      </h4>
    </div>
  );
};

export default Child;
