import React, { useState, useEffect } from "react";
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
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FF5F6D]  to-[#082784] ">
          {t("How it works")}
        </span>
      </h1>

      {visible === 0 && (
        <div
          className="grid grid-cols-4 w-[75%] mx-auto gap-4 
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
          <div className="flex flex-col border w-full mx-auto place-items-center pt-4 pb-6 px-3 rounded-[40px] relative shadow-[rgba(0,0,15,0.2)_3px_3px_12px_0px] ">
            <span
              className=" bg-gradient-to-br from-[#E13D74] to-[#7B2140] rounded-full p-2 w-16 h-16 text-center my-auto absolute -top-8 text-[32px] text-white
            screen850:w-14
            screen850:h-14
            screen850:text-3xl
            "
            >
              1
            </span>
            <span className="text-xl font-bold pb-4 pt-7 screen1350:text-lg">
              {t("Research & Discovery")}
            </span>
            <span style={{ direction: language === "ar" ? "rtl" : "ltr" }}>
              {t("Research & Discovery Text")}
            </span>
          </div>

          <div className="flex flex-col border w-full mx-auto place-items-center pt-4 pb-6 px-3 rounded-[40px] relative shadow-[rgba(0,0,15,0.2)_3px_3px_12px_0px]">
            <span
              className=" bg-gradient-to-br from-[#E13D74] to-[#7B2140] rounded-full p-2 w-16 h-16 text-center my-auto absolute -top-8 text-[32px] text-white
               screen850:w-14
            screen850:h-14
            screen850:text-3xl
            "
            >
              2
            </span>
            <span className="text-xl font-bold pb-4 pt-7 screen1350:text-lg">
              {t("Wireframing & Prototyping")}
            </span>
            <span style={{ direction: language === "ar" ? "rtl" : "ltr" }}>
              {t("Wireframing & Prototyping Text")}
            </span>
          </div>
          <div className="flex flex-col border w-full mx-auto place-items-center pt-4 pb-6 px-3 rounded-[40px] relative shadow-[rgba(0,0,15,0.2)_3px_3px_12px_0px] ">
            <span
              className=" bg-gradient-to-br from-[#E13D74] to-[#7B2140] rounded-full p-2 w-16 h-16 text-center my-auto absolute -top-8 text-[32px] text-white
               screen850:w-14
            screen850:h-14
            screen850:text-3xl
            "
            >
              3
            </span>
            <span className="text-xl font-bold pb-4 pt-7 screen1350:text-lg">
              {t("Visual Design")}
            </span>
            <span style={{ direction: language === "ar" ? "rtl" : "ltr" }}>
              {t("Visual Design Text")}
            </span>
          </div>
          <div className="flex flex-col border w-full mx-auto place-items-center pt-4 pb-6 px-3 rounded-[40px] relative shadow-[rgba(0,0,15,0.2)_3px_3px_12px_0px]">
            <span
              className=" bg-gradient-to-br from-[#E13D74] to-[#7B2140] rounded-full p-2 w-16 h-16 text-center my-auto absolute -top-8 text-[32px] text-white
               screen850:w-14
            screen850:h-14
            screen850:text-3xl
            "
            >
              4
            </span>
            <span className="text-xl font-bold pb-4 pt-7 screen1350:text-lg">
              {t("Usability Testing")}
            </span>
            <span style={{ direction: language === "ar" ? "rtl" : "ltr" }}>
              {t("Usability Testing Text")}
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
              className=" bg-gradient-to-br from-[#E13D74] to-[#7B2140] rounded-full p-2 w-16 h-16 text-center my-auto absolute -top-8 text-[32px] text-white
              screen850:w-14
            screen850:h-14
            screen850:text-3xl
            "
            >
              1
            </span>
            <span className="text-xl font-bold pb-4 pt-7 screen1350:text-lg">
              {t("Needs Assessment")}
            </span>
            <span style={{ direction: language === "ar" ? "rtl" : "ltr" }}>
              {t("Needs Assessment Text")}
            </span>
          </div>

          <div className="flex flex-col border w-full mx-auto place-items-center pt-4 pb-6 px-3 rounded-[40px] relative shadow-[rgba(0,0,15,0.2)_3px_3px_12px_0px]">
            <span
              className=" bg-gradient-to-br from-[#E13D74] to-[#7B2140] rounded-full p-2 w-16 h-16 text-center my-auto absolute -top-8 text-[32px] text-white
               screen850:w-14
            screen850:h-14
            screen850:text-3xl
            "
            >
              2
            </span>
            <span className="text-xl font-bold pb-4 pt-7 screen1350:text-lg">
              {t("Design & Planning")}
            </span>
            <span style={{ direction: language === "ar" ? "rtl" : "ltr" }}>
              {t("Design & Planning Text")}
            </span>
          </div>
          <div className="flex flex-col border w-full mx-auto place-items-center pt-4 pb-6 px-3 rounded-[40px] relative shadow-[rgba(0,0,15,0.2)_3px_3px_12px_0px] ">
            <span
              className=" bg-gradient-to-br from-[#E13D74] to-[#7B2140] rounded-full p-2 w-16 h-16 text-center my-auto absolute -top-8 text-[32px] text-white
               screen850:w-14
            screen850:h-14
            screen850:text-3xl
            "
            >
              3
            </span>
            <span className="text-xl font-bold pb-4 pt-7 screen1350:text-lg">
              {t("Development & Testing")}
            </span>
            <span style={{ direction: language === "ar" ? "rtl" : "ltr" }}>
              {t("Development & Testing Text")}
            </span>
          </div>
          <div className="flex flex-col border w-full mx-auto place-items-center pt-4 pb-6 px-3 rounded-[40px] relative shadow-[rgba(0,0,15,0.2)_3px_3px_12px_0px]">
            <span
              className=" bg-gradient-to-br from-[#E13D74] to-[#7B2140] rounded-full p-2 w-16 h-16 text-center my-auto absolute -top-8 text-[32px] text-white
              screen850:w-14
            screen850:h-14
            screen850:text-3xl
             "
            >
              4
            </span>
            <span className="text-xl font-bold pb-4 pt-7 screen1350:text-lg">
              {t("Deployment & Support")}
            </span>
            <span style={{ direction: language === "ar" ? "rtl" : "ltr" }}>
              {t("Deployment & Support Text")}
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
              className=" bg-gradient-to-br from-[#E13D74] to-[#7B2140] rounded-full p-2 w-16 h-16 text-center my-auto absolute -top-8 text-[32px] text-white
               screen850:w-14
            screen850:h-14
            screen850:text-3xl
            "
            >
              1
            </span>
            <span className="text-xl font-bold pb-4 pt-7 screen1350:text-lg">
              {t("Needs Assessment")}
            </span>
            <span style={{ direction: language === "ar" ? "rtl" : "ltr" }}>
              {t("Needs Assessment Text")}
            </span>
          </div>

          <div className="flex flex-col border w-full mx-auto place-items-center pt-4 pb-6 px-3 rounded-[40px] relative shadow-[rgba(0,0,15,0.2)_3px_3px_12px_0px]">
            <span
              className=" bg-gradient-to-br from-[#E13D74] to-[#7B2140] rounded-full p-2 w-16 h-16 text-center my-auto absolute -top-8 text-[32px] text-white
               screen850:w-14
            screen850:h-14
            screen850:text-3xl
            "
            >
              2
            </span>
            <span className="text-xl font-bold pb-4 pt-7 screen1350:text-lg">
              {t("Design & Planning")}
            </span>
            <span style={{ direction: language === "ar" ? "rtl" : "ltr" }}>
              {t("Design & Planning Text")}
            </span>
          </div>
          <div className="flex flex-col border w-full mx-auto place-items-center pt-4 pb-6 px-3 rounded-[40px] relative shadow-[rgba(0,0,15,0.2)_3px_3px_12px_0px] ">
            <span
              className=" bg-gradient-to-br from-[#E13D74] to-[#7B2140] rounded-full p-2 w-16 h-16 text-center my-auto absolute -top-8 text-[32px] text-white
               screen850:w-14
            screen850:h-14
            screen850:text-3xl
            "
            >
              3
            </span>
            <span className="text-xl font-bold pb-4 pt-7 screen1350:text-lg">
              {t("Development & Testing")}
            </span>
            <span style={{ direction: language === "ar" ? "rtl" : "ltr" }}>
              {t("Development & Testing Text")}
            </span>
          </div>
          <div className="flex flex-col border w-full mx-auto place-items-center pt-4 pb-6 px-3 rounded-[40px] relative shadow-[rgba(0,0,15,0.2)_3px_3px_12px_0px]">
            <span
              className=" bg-gradient-to-br from-[#E13D74] to-[#7B2140] rounded-full p-2 w-16 h-16 text-center my-auto absolute -top-8 text-[32px] text-white
               screen850:w-14
            screen850:h-14
            screen850:text-3xl
            "
            >
              4
            </span>
            <span className="text-xl font-bold pb-4 pt-7 screen1350:text-lg">
              {t("Deployment & Support")}
            </span>
            <span style={{ direction: language === "ar" ? "rtl" : "ltr" }}>
              {t("Deployment & Support Text")}
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
              className=" bg-gradient-to-br from-[#E13D74] to-[#7B2140] rounded-full p-2 w-16 h-16 text-center my-auto absolute -top-8 text-[32px] text-white
               screen850:w-14
            screen850:h-14
            screen850:text-3xl
            "
            >
              1
            </span>
            <span className="text-xl font-bold pb-4 pt-7 screen1350:text-lg">
              {t("Research & Discovery")}
            </span>
            <span style={{ direction: language === "ar" ? "rtl" : "ltr" }}>
              {t("Research & Discovery Web Text")}
            </span>
          </div>

          <div className="flex flex-col border w-full mx-auto place-items-center pt-4 pb-6 px-3 rounded-[40px] relative shadow-[rgba(0,0,15,0.2)_3px_3px_12px_0px]">
            <span
              className=" bg-gradient-to-br from-[#E13D74] to-[#7B2140] rounded-full p-2 w-16 h-16 text-center my-auto absolute -top-8 text-[32px] text-white
               screen850:w-14
            screen850:h-14
            screen850:text-3xl
            "
            >
              2
            </span>
            <span className="text-xl font-bold pb-4 pt-7 screen1350:text-lg">
              {t("Planning & Design Web")}
            </span>
            <span style={{ direction: language === "ar" ? "rtl" : "ltr" }}>
              {t("Planning & Design Web Text")}
            </span>
          </div>
          <div className="flex flex-col border w-full mx-auto place-items-center pt-4 pb-6 px-3 rounded-[40px] relative shadow-[rgba(0,0,15,0.2)_3px_3px_12px_0px] ">
            <span
              className=" bg-gradient-to-br from-[#E13D74] to-[#7B2140] rounded-full p-2 w-16 h-16 text-center my-auto absolute -top-8 text-[32px] text-white
               screen850:w-14
            screen850:h-14
            screen850:text-3xl
            "
            >
              3
            </span>
            <span className="text-xl font-bold pb-4 pt-7 screen1350:text-lg">
              {t("Development & Testing")}
            </span>
            <span style={{ direction: language === "ar" ? "rtl" : "ltr" }}>
              {t("Development & Testing Web Text")}
            </span>
          </div>
          <div className="flex flex-col border w-full mx-auto place-items-center pt-4 pb-6 px-3 rounded-[40px] relative shadow-[rgba(0,0,15,0.2)_3px_3px_12px_0px]">
            <span
              className=" bg-gradient-to-br from-[#E13D74] to-[#7B2140] rounded-full p-2 w-16 h-16 text-center my-auto absolute -top-8 text-[32px] text-white
               screen850:w-14
            screen850:h-14
            screen850:text-3xl
            "
            >
              4
            </span>
            <span className="text-xl font-bold pb-4 pt-7 screen1350:text-lg">
              {t("Launch & Support")}
            </span>
            <span style={{ direction: language === "ar" ? "rtl" : "ltr" }}>
              {t("Launch & Support Text")}
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default ThirdChild;
