import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

import { CHANGE_LANGUAGE } from "../../../store/action";

import "../../../App.css";

export default function LanguageToggle() {
  const dispatch = useDispatch();
  const { i18n } = useTranslation();

  const _language = useSelector((state) => state.lang);
  const [language, setLanguage] = useState();

  useEffect(() => {
    setLanguage(_language);
    i18n.changeLanguage(_language);
  }, [_language, setLanguage]);

  const handleLanguageChange = () => {
    const newLanguage = _language === "en" ? "ar" : "en";
    dispatch(CHANGE_LANGUAGE(newLanguage));
    i18n.changeLanguage(newLanguage);
  };

  return (
    <div className="flex items-center space-x-2 text-white">
      <label className="relative inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          className="sr-only"
          checked={language === "ar"}
          onChange={handleLanguageChange}
        />
        {/* <div className="bg-gradient-to-br from-[#FF5F6D] to-[#082784]   rounded-full  "> */}
        <div className="borderGradientTogglebtn">
          <div
            className="w-[86px] h-8  rounded-full relative bg-white m-0.5  menu bg-opacity-0
            screen990:w-20
            screen990:h-7
            screen850:w-[70px]
            "
          >
            {language === "ar" ? (
              <div
                className="absolute left-3  top-0.5 bg-clip-text text-transparent bg-gradient-to-r from-[#082784] to-[#FF5F6D]
                screen850:text-sm 
                screen850:top-1
              "
              >
                En
              </div>
            ) : (
              ""
            )}

            <div
              className={`absolute left-0.5 top-[3px] w-9 h-[26px] bg-gradient-to-br from-[#FF5F6D] to-[#082784]  rounded-full transition-transform
                screen990:top-[1px]
                screen850:w-[30px]
                screen850:h-6
                screen850:top-[2px]

                ${
                  language === "ar"
                    ? "translate-x-full left-3 screen990:left-1.5 screen850:left-2 "
                    : ""
                }
            
            `}
            >
              {language === "ar" ? (
                <span
                  className={`   screen850:text-sm  
                    ${
                      language === "en"
                        ? "ml-2 screen990:ml-2.5 screen850:ml-2"
                        : "mr-2 screen990:ml-2.5 screen850:ml-2"
                    }
                `}
                >
                  Ar
                </span>
              ) : (
                <span className=" ml-2 screen850:text-sm  ">En</span>
              )}
            </div>
            <div className="w-px h-4 bg-black  absolute mx-auto my-auto inset-0 bg-gradient-to-b from-[#FF5F6D] to-[#082784]"></div>

            {language === "en" ? (
              <div
                className="absolute  right-4 top-0.5  bg-clip-text text-transparent bg-gradient-to-r from-[#082784] to-[#FF5F6D] 
                screen990:right-3
                screen990:top-0
                screen850:text-sm 
                screen850:top-1
              "
              >
                Ar
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </label>
    </div>
  );
}

{
  /* <div className="bg-gradient-to-br from-[#FF5F6D] to-[#082784] rounded-full p-0.5">
            <div className="w-[86px] h-8 rounded-full relative bg-white screen990:w-20 screen990:h-7 screen850:w-[70px]">
              {language === "ar" && (
                <div className="absolute left-3 top-0.5 bg-clip-text text-transparent bg-gradient-to-r from-[#082784] to-[#FF5F6D] screen850:text-sm screen850:top-1">
                  En
                </div>
              )}

              <div
                className={`absolute left-0.5 top-[3px] w-9 h-[26px] bg-gradient-to-br from-[#FF5F6D] to-[#082784] rounded-full transition-transform screen990:top-[1px] screen850:w-[30px] screen850:h-6 screen850:top-[2px] ${
                  language === "ar"
                    ? "translate-x-full left-3 screen990:left-1.5 screen850:left-2"
                    : ""
                }`}
              >
                {language === "ar" ? (
                  <span
                    className={`screen850:text-sm ${
                      language === "en"
                        ? "ml-2 screen990:ml-2.5 screen850:ml-2"
                        : "mr-2 screen990:ml-2.5 screen850:ml-2"
                    }`}
                  >
                    Ar
                  </span>
                ) : (
                  <span className="ml-2 screen850:text-sm">En</span>
                )}
              </div>

              <div className="w-px h-4 bg-black absolute mx-auto my-auto inset-0 bg-gradient-to-b from-[#FF5F6D] to-[#082784]"></div>

              {language === "en" && (
                <div className="absolute right-4 top-0.5 bg-clip-text text-transparent bg-gradient-to-r from-[#082784] to-[#FF5F6D] screen990:right-3 screen990:top-0 screen850:text-sm screen850:top-1">
                  Ar
                </div>
              )}
            </div>
          </div> */
}
