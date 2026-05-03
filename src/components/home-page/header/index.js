import React, { useEffect, useState } from "react";

import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

import style from "./style.module.css";

const Header = () => {
  const { t } = useTranslation();

  const _lang = useSelector((state) => state.lang);
  const [language, setLanguage] = useState();

  useEffect(() => {
    setLanguage(_lang);
  }, [setLanguage, _lang]);

  // console.log("language", language);
  return (
    // <div >
    <div
      style={{ direction: language === "en" ? "ltr" : "rtl" }}
      className={`flex flex-row w-full 
        ${
          language === "en"
            ? "ml-[10%] screen750:ml-5 "
            : "-ml-[10%] screen750:-ml-5 "
        }
        `}
    >
      <div
        className={`w-full 
          ${language === "en" ? "" : "transform scale-x-[-1]"}
          ${style.background}
          `}
      >
        <h1
          className={`text-justify text-5xl text-[#252B2B] font-[600] pt-40 screen1150:text-[42px] screen990:text-4xl
          screen850:pt-28
          screen750:pt-28
          screen540:text-3xl
          screen450:text-2xl

           ${language === "en" ? "" : "transform scale-x-[-1]"}
          `}
        >
          {t("Cutting-Edge")}
          <span
            className={` bg-clip-text text-transparent bg-gradient-to-r from-[#082784] to-[#FF5F6D] pl-2
           
            `}
          >
            {t("Network")}
          </span>
        </h1>
        <h1
          className={`text-justify text-5xl  font-[600] leading-[1.4] screen1150:text-[42px] screen990:text-4xl
            screen540:text-3xl
            screen450:text-2xl

            ${language === "en" ? "" : "transform scale-x-[-1]"}
          `}
        >
          <span className={`text-[#252B2B]   `}>{t("&")}</span>
          <span
            className={`bg-clip-text text-transparent bg-gradient-to-r from-[#FF5F6D]  to-[#082784] pl-2 `}
          >
            {t("IT Solutions")}
          </span>
        </h1>

        <div
          className={`pt-8 pb-10  text-lg text-start text-[#555858] screen1150:text-[17px] screen990:text-base
            screen750:pb -10
            screen540:pb-4
            screen450:text-sm  
            ${language === "en" ? "" : "transform scale-x-[-1] "}

    
          `}
        >
          <div
            className="w-[35%]   
            screen1450:w-[42%]
            screen750:w-[64%] 
            screen450:w-[70%] "
          >
            {t("headerHome")}
          </div>
        </div>
        <div
          className={`flex flex-row

            screen540:flex-col
          ${language === "en" ? "" : "transform scale-x-[-1]"}
          `}
        >
          <div
            className={`bg-gradient-to-br from-[#FF5F6D] to-[#082784] rounded-full py-2  font-bold my-auto text-white  text-lg 
              screen1150:py-2
              screen1150:text-base
              screen990:py-1.5
              screen990:text-sm
              screen450:text-xs
              screen540:w-fit

              
              hover:shadow-[rgba(185,79,115,1)_0px_0px_8px_-1px] 
              active:shadow-[rgba(185,79,115,0.4)_0px_0px_8px_-1px] 
             
              ${
                language === "en"
                  ? "mr-3 creen990:mr-1 px-6 screen990:px-4"
                  : "ml-3 screen990:ml-1 px-9 screen990:px-7"
              }

            `}
          >
            {t("Contact us")}
          </div>
          <div
            className=" bg-gradient-to-br from-[#FF5F6D] to-[#082784] rounded-full  my-auto 
              screen540:w-fit
              screen540:mt-1
            "
          >
            <div
              className="bg-[#eaeeff]  rounded-full  m-0.5  py-[6px] px-[22px]
                screen1150:py-[6px]
                screen990:py-[4px]
                screen990:px-[12px]
                 hover:shadow-[rgba(185,79,115,1)_0px_0px_8px_-1px] 
              active:shadow-[rgba(185,79,115,0.4)_0px_0px_8px_-1px] 
                
              "
            >
              <div
                className="bg-clip-text text-transparent bg-gradient-to-r to-[#FF5F6D]  from-[#082784]  font-bold text-lg
                  screen1150:text-base
                  screen990:text-sm
                  screen450:text-xs 

                  
                  
                "
              >
                {t("Learn")}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
