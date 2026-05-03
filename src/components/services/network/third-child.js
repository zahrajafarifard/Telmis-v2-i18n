import React, { useEffect, useState } from "react";

import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

const ThirdChild = ({ visible }) => {
  const { t } = useTranslation();
  const _lang = useSelector((state) => state.lang);
  const [language, setLanguage] = useState();

  useEffect(() => {
    setLanguage(_lang);
  }, [setLanguage, _lang]);

  return (
    <div>
      <h1 className=" font-bold text-4xl pb-16 pt-20">
        <span className="text-[#082784]">{t("How it works")}</span>
      </h1>

      {visible === 0 && (
        <div
          className="grid grid-cols-4 w-[65%] mx-auto gap-4 
            screen1500:w-[90%] 
            screen1230:grid-cols-2
            screen1230:w-[70%]
            screen1230:gap-10
            screen850:gap-12
            screen850:w-[90%]
            screen750:gap-8
            screen670:grid-cols-1
            screen670:gap-10
            screen670:w-[80%]
            screen540:w-[90%]
          "
        >
          <div className="flex flex-col border w-full mx-auto place-items-center pt-4 pb-6 px-3 rounded-[40px] relative shadow-[rgba(0,0,15,0.2)_3px_3px_12px_0px]">
            <span
              className=" bg-gradient-to-br from-[#7595F4] to-[#082784] rounded-full p-2 w-16 h-16 text-center my-auto absolute -top-8 text-[32px] text-white
                screen850:w-14
                screen850:h-14
                screen850:text-3xl
              "
            >
              1
            </span>
            <span className="text-xl font-bold pb-4 pt-7">
              {t("Assessment & Planning Net 1")}
            </span>
            <span style={{ direction: language === "ar" ? "rtl" : "ltr" }}>
              {t("Assessment & Planning Net 1 Text")}
            </span>
          </div>

          <div className="flex flex-col border w-full mx-auto place-items-center pt-4 pb-6 px-3 rounded-[40px] relative shadow-[rgba(0,0,15,0.2)_3px_3px_12px_0px]">
            <span
              className=" bg-gradient-to-br from-[#7595F4] to-[#082784] rounded-full p-2 w-16 h-16 text-center my-auto absolute -top-8 text-[32px] text-white
                screen850:w-14
                screen850:h-14
                screen850:text-3xl
              "
            >
              2
            </span>
            <span className="text-xl font-bold pb-4 pt-7">
              {t("Design & Configuration Net 1")}
            </span>
            <span style={{ direction: language === "ar" ? "rtl" : "ltr" }}>
              {t("Design & Configuration Net 1 Text")}
            </span>
          </div>
          <div className="flex flex-col border w-full mx-auto place-items-center pt-4 pb-6 px-3 rounded-[40px] relative shadow-[rgba(0,0,15,0.2)_3px_3px_12px_0px] ">
            <span
              className=" bg-gradient-to-br from-[#7595F4] to-[#082784] rounded-full p-2 w-16 h-16 text-center my-auto absolute -top-8 text-[32px] text-white
                screen850:w-14
                screen850:h-14
                screen850:text-3xl
              "
            >
              3
            </span>
            <span className="text-xl font-bold pb-4 pt-7">
              {t("Installation & Testing Net 1")}
            </span>
            <span style={{ direction: language === "ar" ? "rtl" : "ltr" }}>
              {t("Installation & Testing Net 1 Text")}
            </span>
          </div>
          <div className="flex flex-col border w-full mx-auto place-items-center pt-4 pb-6 px-3 rounded-[40px] relative shadow-[rgba(0,0,15,0.2)_3px_3px_12px_0px]">
            <span
              className=" bg-gradient-to-br from-[#7595F4] to-[#082784] rounded-full p-2 w-16 h-16 text-center my-auto absolute -top-8 text-[32px] text-white
                screen850:w-14
                screen850:h-14
                screen850:text-3xl
              "
            >
              4
            </span>
            <span className="text-xl font-bold pb-4 pt-7">
              {t("Training & Support Net 1")}
            </span>
            <span style={{ direction: language === "ar" ? "rtl" : "ltr" }}>
              {t("Training & Support Net 1 Text")}
            </span>
          </div>
        </div>
      )}
      {visible === 1 && (
        <div
          className="grid grid-cols-4 w-[65%] mx-auto gap-4 
            screen1500:w-[90%] 
            screen1230:grid-cols-2
            screen1230:w-[70%]
            screen1230:gap-10
            screen850:gap-12
            screen850:w-[90%]
            screen750:gap-8
            screen670:grid-cols-1
            screen670:gap-10
            screen670:w-[80%]
            screen540:w-[90%]
          "
        >
          <div className="flex flex-col border w-full mx-auto place-items-center pt-4 pb-6 px-3 rounded-[40px] relative shadow-[rgba(0,0,15,0.2)_3px_3px_12px_0px]">
            <span
              className=" bg-gradient-to-br from-[#7595F4] to-[#082784] rounded-full p-2 w-16 h-16 text-center my-auto absolute -top-8 text-[32px] text-white
                screen850:w-14
                screen850:h-14
                screen850:text-3xl
              "
            >
              1
            </span>
            <span className="text-xl font-bold pb-4 pt-7">
              {t("Assessment & Analysis Net 2")}
            </span>
            <span style={{ direction: language === "ar" ? "rtl" : "ltr" }}>
              {t("Assessment & Analysis Net 2 Text")}
            </span>
          </div>

          <div className="flex flex-col border w-full mx-auto place-items-center pt-4 pb-6 px-3 rounded-[40px] relative shadow-[rgba(0,0,15,0.2)_3px_3px_12px_0px]">
            <span
              className="bg-gradient-to-br from-[#7595F4] to-[#082784] rounded-full p-2 w-16 h-16 text-center my-auto absolute -top-8 text-[32px] text-white
                screen850:w-14
                screen850:h-14
                screen850:text-3xl
              "
            >
              2
            </span>
            <span className="text-xl font-bold pb-4 pt-7">
              {t("Setup & Configuration Net 2")}
            </span>
            <span style={{ direction: language === "ar" ? "rtl" : "ltr" }}>
              {t("Setup & Configuration Net 2 Text")}
            </span>
          </div>
          <div className="flex flex-col border w-full mx-auto place-items-center pt-4 pb-6 px-3 rounded-[40px] relative shadow-[rgba(0,0,15,0.2)_3px_3px_12px_0px] ">
            <span
              className=" bg-gradient-to-br from-[#7595F4] to-[#082784] rounded-full p-2 w-16 h-16 text-center my-auto absolute -top-8 text-[32px] text-white
                screen850:w-14
                screen850:h-14
                screen850:text-3xl
              "
            >
              3
            </span>
            <span className="text-xl font-bold pb-4 pt-7">
              {t("Continuous Monitoring Net 2")}
            </span>
            <span style={{ direction: language === "ar" ? "rtl" : "ltr" }}>
              {t("Continuous Monitoring Net 2 Text")}
            </span>
          </div>
          <div className="flex flex-col border w-full mx-auto place-items-center pt-4 pb-6 px-3 rounded-[40px] relative shadow-[rgba(0,0,15,0.2)_3px_3px_12px_0px]">
            <span
              className=" bg-gradient-to-br from-[#7595F4] to-[#082784] rounded-full p-2 w-16 h-16 text-center my-auto absolute -top-8 text-[32px] text-white
                screen850:w-14
                screen850:h-14
                screen850:text-3xl
              "
            >
              4
            </span>
            <span className="text-xl font-bold pb-4 pt-7">
              {t("Ongoing Support Net 2")}
            </span>
            <span style={{ direction: language === "ar" ? "rtl" : "ltr" }}>
              {t("Ongoing Support Net 2 Text")}
            </span>
          </div>
        </div>
      )}
      {visible === 2 && (
        <div
          className="grid grid-cols-4 w-[65%] mx-auto gap-4 
            screen1500:w-[90%] 
            screen1230:grid-cols-2
            screen1230:w-[70%]
            screen1230:gap-10
            screen850:gap-12
            screen850:w-[90%]
            screen750:gap-8
            screen670:grid-cols-1
            screen670:gap-10
            screen670:w-[80%]
            screen540:w-[90%]
          "
        >
          <div className="flex flex-col border w-full mx-auto place-items-center pt-4 pb-6 px-3 rounded-[40px] relative shadow-[rgba(0,0,15,0.2)_3px_3px_12px_0px]">
            <span
              className=" bg-gradient-to-br from-[#7595F4] to-[#082784] rounded-full p-2 w-16 h-16 text-center my-auto absolute -top-8 text-[32px] text-white
                screen850:w-14
                screen850:h-14
                screen850:text-3xl
              "
            >
              1
            </span>
            <span className="text-xl font-bold pb-4 pt-7">
              {t("Assessment & Planning Net 3")}
            </span>
            <span style={{ direction: language === "ar" ? "rtl" : "ltr" }}>
              {t("Assessment & Planning Net 3 Text")}
            </span>
          </div>

          <div className="flex flex-col border w-full mx-auto place-items-center pt-4 pb-6 px-3 rounded-[40px] relative shadow-[rgba(0,0,15,0.2)_3px_3px_12px_0px]">
            <span
              className=" bg-gradient-to-br from-[#7595F4] to-[#082784] rounded-full p-2 w-16 h-16 text-center my-auto absolute -top-8 text-[32px] text-white
                screen850:w-14
                screen850:h-14
                screen850:text-3xl
              "
            >
              2
            </span>
            <span className="text-xl font-bold pb-4 pt-7">
              {t("Setup & Configuration Net 3")}
            </span>
            <span style={{ direction: language === "ar" ? "rtl" : "ltr" }}>
              {t("Setup & Configuration Net 3 Text")}
            </span>
          </div>
          <div className="flex flex-col border w-full mx-auto place-items-center pt-4 pb-6 px-3 rounded-[40px] relative shadow-[rgba(0,0,15,0.2)_3px_3px_12px_0px] ">
            <span
              className=" bg-gradient-to-br from-[#7595F4] to-[#082784] rounded-full p-2 w-16 h-16 text-center my-auto absolute -top-8 text-[32px] text-white
                screen850:w-14
                screen850:h-14
                screen850:text-3xl
              "
            >
              3
            </span>
            <span className="text-xl font-bold pb-4 pt-7">
              {t("Continuous Monitoring Net 3")}
            </span>
            <span>{t("Continuous Monitoring Net 3 Text")}</span>
          </div>
          <div className="flex flex-col border w-full mx-auto place-items-center pt-4 pb-6 px-3 rounded-[40px] relative shadow-[rgba(0,0,15,0.2)_3px_3px_12px_0px]">
            <span
              className=" bg-gradient-to-br from-[#7595F4] to-[#082784] rounded-full p-2 w-16 h-16 text-center my-auto absolute -top-8 text-[32px] text-white
               screen850:w-14
                screen850:h-14
                screen850:text-3xl
              "
            >
              4
            </span>
            <span className="text-xl font-bold pb-4 pt-7">
              {t("Ongoing Support Net 3")}
            </span>
            <span style={{ direction: language === "ar" ? "rtl" : "ltr" }}>
              {t("Ongoing Support Net 3 Text")}
            </span>
          </div>
        </div>
      )}
      {visible === 3 && (
        <div
          className="grid grid-cols-4 w-[65%] mx-auto gap-4 
            screen1500:w-[90%] 
            screen1230:grid-cols-2
            screen1230:w-[70%]
            screen1230:gap-10
            screen850:gap-12
            screen850:w-[90%]
            screen750:gap-8
            screen670:grid-cols-1
            screen670:gap-10
            screen670:w-[80%]
            screen540:w-[90%]
          "
        >
          <div className="flex flex-col border w-full mx-auto place-items-center pt-4 pb-6 px-3 rounded-[40px] relative shadow-[rgba(0,0,15,0.2)_3px_3px_12px_0px]">
            <span
              className=" bg-gradient-to-br from-[#7595F4] to-[#082784] rounded-full p-2 w-16 h-16 text-center my-auto absolute -top-8 text-[32px] text-white
                screen850:w-14
                screen850:h-14
                screen850:text-3xl
              "
            >
              1
            </span>
            <span className="text-xl font-bold pb-4 pt-7">
              {t("Assessment & Planning Net 4")}
            </span>
            <span style={{ direction: language === "ar" ? "rtl" : "ltr" }}>
              {t("Assessment & Planning Net 4 Text")}
            </span>
          </div>

          <div className="flex flex-col border w-full mx-auto place-items-center pt-4 pb-6 px-3 rounded-[40px] relative shadow-[rgba(0,0,15,0.2)_3px_3px_12px_0px]">
            <span
              className=" bg-gradient-to-br from-[#7595F4] to-[#082784] rounded-full p-2 w-16 h-16 text-center my-auto absolute -top-8 text-[32px] text-white
                screen850:w-14
                screen850:h-14
                screen850:text-3xl
              "
            >
              2
            </span>
            <span className="text-xl font-bold pb-4 pt-7">
              {t("Setup & Configuration Net 4")}
            </span>
            <span style={{ direction: language === "ar" ? "rtl" : "ltr" }}>
              {t("Setup & Configuration Net 4 Text")}
            </span>
          </div>
          <div className="flex flex-col border w-full mx-auto place-items-center pt-4 pb-6 px-3 rounded-[40px] relative shadow-[rgba(0,0,15,0.2)_3px_3px_12px_0px] ">
            <span
              className=" bg-gradient-to-br from-[#7595F4] to-[#082784] rounded-full p-2 w-16 h-16 text-center my-auto absolute -top-8 text-[32px] text-white 
                screen850:w-14
                screen850:h-14
                screen850:text-3xl
              "
            >
              3
            </span>
            <span className="text-xl font-bold pb-4 pt-7">
              {t("System Optimization Net 4")}
            </span>
            <span style={{ direction: language === "ar" ? "rtl" : "ltr" }}>
              {t("System Optimization Net 4 Text")}
            </span>
          </div>
          <div className="flex flex-col border w-full mx-auto place-items-center pt-4 pb-6 px-3 rounded-[40px] relative shadow-[rgba(0,0,15,0.2)_3px_3px_12px_0px]">
            <span
              className=" bg-gradient-to-br from-[#7595F4] to-[#082784] rounded-full p-2 w-16 h-16 text-center my-auto absolute -top-8 text-[32px] text-white
                screen850:w-14
                screen850:h-14
                screen850:text-3xl
              "
            >
              4
            </span>
            <span className="text-xl font-bold pb-4 pt-7">
              {t("Ongoing Support Net 4")}
            </span>
            <span style={{ direction: language === "ar" ? "rtl" : "ltr" }}>
              {t("Ongoing Support Net 4 Text")}
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default ThirdChild;
