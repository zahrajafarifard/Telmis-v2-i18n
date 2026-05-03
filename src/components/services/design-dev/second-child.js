import React, { useState, useEffect } from "react";

import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

const SecondChild = ({ visible }) => {
  const { t } = useTranslation();

  const [hovered, setHovered] = useState(0);

  const _lang = useSelector((state) => state.lang);
  const [language, setLanguage] = useState();

  useEffect(() => {
    setLanguage(_lang);
  }, [setLanguage, _lang]);

  return (
    <div>
      <h1
        className=" font-bold text-4xl pb-16 pt-10 screen1320:pt-20 screen670:pt-32 screen450:pt-56 screen400:pt-64 screen380:pt-72 px-5 screen380:px-3
      screen990:text-3xl"
      >
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FF5F6D]  to-[#082784] ">
          {visible === 0 && t("Why you need UI/UX design")}
          {visible === 1 && t("Why you need Desktop Development")}
          {visible === 2 && t("Why you need Mobile Development")}
          {visible === 3 && t("Why you need Web development")}
        </span>
      </h1>

      {visible === 0 && (
        <div
          className="flex font-normal bg-gradient-to-r to-[#2B2E7F] from-[#C25173] h-[270px] 
          screen990:h-[220px]
          screen850:h-[245px]
          screen800:h-[265px]

          screen750:flex-col
          screen750:h-auto
          screen750:w-[80%]
          screen750:mx-auto
          screen750:bg-gradient-to-b

          screen540:w-[90%]
          
        "
        >
          <div
            className={` text-white py-14  flex flex-col items-center justify-center overflow-hidden

              screen990:py-8 screen800:py-6
              screen750:mx-auto
              screen750:w-full
              
              
              ${
                hovered === 0
                  ? "w-2/5 to-[#2B2E7F] bg-gradient-to-r from-[#C25173] screen750:bg-gradient-to-b screen750:w-full"
                  : "w-1/5  transition-all duration-1000 ease-in-out  screen750:w-full   "
              }
              
              `}
          >
            <div className="pb-4 screen800:pb-3 text-lg px-2 screen1280:text-base ">
              {t("UI/UXTitle1")}
            </div>
            <div
              style={{ direction: language === "ar" ? "rtl" : "ltr" }}
              className={` px-10 screen1500:px-6
                screen1280:text-sm
              
              ${
                hovered
                  ? `line-clamp-3  screen1500:line-clamp-4 screen1180:line-clamp-5 screen990:line-clamp-4 screen800:line-clamp-5 screen750:line-clamp-2 `
                  : "line-clamp-none transition-all duration-1000 ease-in-out screen750:py-3"
              }`}
            >
              {t("UI/UXText1")}
            </div>
          </div>
          {[...Array(4)].map((_, index) => (
            <div
              key={index}
              className="w-1/5 hover:w-2/5  border-l-2 screen750:border-l-0  screen750:border-t-2  text-white  py-14 flex flex-col items-center justify-center overflow-hidden
               transition-all duration-1000 ease-in-out  hover:bg-gradient-to-r to-[#2B2E7F] from-[#C25173]
               screen990:py-8 screen800:py-6

                 screen750:mx-auto
              screen750:w-full

              screen750:hover:w-full
              screen750:hover:bg-gradient-to-b
              "
              onMouseEnter={() => setHovered(index + 1)}
              onMouseLeave={() => setHovered(0)}
            >
              <div className="pb-4 screen800:pb-3 text-lg px-2 screen1280:text-base ">
                {index === 0
                  ? t("UI/UXTitle2")
                  : index === 1
                  ? t("UI/UXTitle3")
                  : index === 2
                  ? t("UI/UXTitle4")
                  : t("UI/UXTitle5")}
              </div>
              <div
                style={{ direction: language === "ar" ? "rtl" : "ltr" }}
                className={` px-10 
                  screen1500:px-6 
                  screen1280:text-sm ${
                    hovered === index + 1
                      ? "line-clamp-none   transition-all duration-1000 ease-in-out screen750:py-3"
                      : `line-clamp-3  screen1500:line-clamp-4 screen1180:line-clamp-5 screen990:line-clamp-4 screen800:line-clamp-5  
                      screen750:line-clamp-2 
                      
                     
                      
                      `
                  }`}
              >
                {index === 0
                  ? t("UI/UXText2")
                  : index === 1
                  ? t("UI/UXText3")
                  : index === 2
                  ? t("UI/UXText4")
                  : t("UI/UXText5")}
              </div>
            </div>
          ))}
        </div>
      )}

      {visible === 1 && (
        <div
          className="flex text-lg font-normal bg-gradient-to-r to-[#2B2E7F] from-[#C25173] h-[270px]
                  screen990:h-[220px]
          screen850:h-[245px]
          screen800:h-[265px]

          screen750:flex-col
          screen750:h-auto
          screen750:w-[80%]
          screen750:mx-auto
          screen750:bg-gradient-to-b

          screen540:w-[90%]
        "
        >
          <div
            className={` text-white  py-14 flex flex-col items-center justify-center overflow-hidden
              screen990:py-8 screen800:py-6
              screen750:mx-auto
              screen750:w-full
               ${
                 hovered === 0
                   ? "w-2/5 to-[#2B2E7F] bg-gradient-to-r from-[#C25173] screen750:bg-gradient-to-b screen750:w-full"
                   : "w-1/5  transition-all duration-1000 ease-in-out  screen750:w-full   "
               }
            `}
          >
            <div className="pb-4 screen800:pb-3  text-lg px-2 screen1280:text-base ">
              {t("DesktopTitle1")}
            </div>
            <div
              style={{ direction: language === "ar" ? "rtl" : "ltr" }}
              className={` px-10 screen1500:px-6
                  screen1280:text-sm
                    
                   ${
                     hovered
                       ? `line-clamp-3  screen1500:line-clamp-4 screen1180:line-clamp-5 screen990:line-clamp-4 screen800:line-clamp-5 screen750:line-clamp-2 `
                       : "line-clamp-none transition-all duration-1000 ease-in-out screen750:py-3"
                   }`}
            >
              {t("DesktopText1")}
            </div>
          </div>
          {[...Array(4)].map((_, index) => (
            <div
              key={index}
              className="w-1/5 hover:w-2/5  border-l-2 screen750:border-l-0  screen750:border-t-2  text-white  py-14 flex flex-col items-center justify-center overflow-hidden
              transition-all duration-1000 ease-in-out  hover:bg-gradient-to-r to-[#2B2E7F] from-[#C25173]
              screen990:py-8 screen800:py-6

                screen750:mx-auto
             screen750:w-full

             screen750:hover:w-full
             screen750:hover:bg-gradient-to-b
             "
              onMouseEnter={() => setHovered(index + 1)}
              onMouseLeave={() => setHovered(0)}
            >
              <div className="pb-4 screen800:pb-3 text-lg px-2 screen1280:text-base">
                {index === 0
                  ? t("DesktopTitle2")
                  : index === 1
                  ? t("DesktopTitle3")
                  : index === 2
                  ? t("DesktopTitle4")
                  : t("DesktopTitle5")}
              </div>
              <div
                style={{ direction: language === "ar" ? "rtl" : "ltr" }}
                className={` px-10 
                    screen1500:px-6 
                    screen1280:text-sm ${
                      hovered === index + 1
                        ? "line-clamp-none  transition-all duration-1000 ease-in-out screen750:py-3 "
                        : `line-clamp-3  screen1500:line-clamp-4 screen1180:line-clamp-5 screen990:line-clamp-4 screen800:line-clamp-5 
                        screen750:line-clamp-2 
                        
                       
                        
                        `
                    }`}
              >
                {index === 0
                  ? t("DesktopText2")
                  : index === 1
                  ? t("DesktopText3")
                  : index === 2
                  ? t("DesktopText4")
                  : t("DesktopText5")}
              </div>
            </div>
          ))}
        </div>
      )}
      {visible === 2 && (
        <div
          className="flex text-lg font-normal bg-gradient-to-r to-[#2B2E7F] from-[#C25173] h-[270px] 
                    screen990:h-[220px]
          screen850:h-[245px]
          screen800:h-[265px]

          screen750:flex-col
          screen750:h-auto
          screen750:w-[80%]
          screen750:mx-auto
          screen750:bg-gradient-to-b

          screen540:w-[90%]
        "
        >
          <div
            className={` text-white  py-14 flex flex-col items-center justify-center overflow-hidden
              screen990:py-8 screen800:py-6
              screen750:mx-auto
              screen750:w-full 
               ${
                 hovered === 0
                   ? "w-2/5 to-[#2B2E7F] bg-gradient-to-r from-[#C25173] screen750:bg-gradient-to-b screen750:w-full"
                   : "w-1/5  transition-all duration-1000 ease-in-out  screen750:w-full   "
               }
            `}
          >
            <div className="pb-4 screen800:pb-3 text-lg px-2 screen1280:text-base ">
              {t("MobileTitle1")}
            </div>
            <div
              style={{ direction: language === "ar" ? "rtl" : "ltr" }}
              className={` px-10 screen1500:px-6
                  screen1280:text-sm
                    
                   ${
                     hovered
                       ? `line-clamp-3  screen1500:line-clamp-4 screen1180:line-clamp-5 screen990:line-clamp-4 screen800:line-clamp-5 screen750:line-clamp-2 `
                       : "line-clamp-none transition-all duration-1000 ease-in-out screen750:py-3"
                   }`}
            >
              {t("MobileText1")}
            </div>
          </div>
          {[...Array(4)].map((_, index) => (
            <div
              key={index}
              className="w-1/5 hover:w-2/5  border-l-2 screen750:border-l-0  screen750:border-t-2  text-white  py-14  flex flex-col items-center justify-center overflow-hidden
              transition-all duration-1000 ease-in-out  hover:bg-gradient-to-r to-[#2B2E7F] from-[#C25173]
              screen990:py-8 screen800:py-6

                screen750:mx-auto
             screen750:w-full

             screen750:hover:w-full
             screen750:hover:bg-gradient-to-b
             "
              onMouseEnter={() => setHovered(index + 1)}
              onMouseLeave={() => setHovered(0)}
            >
              <div className="pb-4 screen800:pb-3 text-lg px-2 screen1280:text-base">
                {index === 0
                  ? t("MobileTitle2")
                  : index === 1
                  ? t("MobileTitle3")
                  : index === 2
                  ? t("MobileTitle4")
                  : t("MobileTitle5")}
              </div>
              <div
                style={{ direction: language === "ar" ? "rtl" : "ltr" }}
                className={` px-10 
                      screen1500:px-6 
                      screen1280:text-sm ${
                        hovered === index + 1
                          ? "line-clamp-none  transition-all duration-1000 ease-in-out screen750:py-3 "
                          : `line-clamp-3  screen1500:line-clamp-4 screen1180:line-clamp-5 screen990:line-clamp-4 screen800:line-clamp-5 
                          screen750:line-clamp-2 
                          
                         
                          
                          `
                      }`}
              >
                {index === 0
                  ? t("MobileText2")
                  : index === 1
                  ? t("MobileText3")
                  : index === 2
                  ? t("MobileText4")
                  : t("MobileText5")}
              </div>
            </div>
          ))}
        </div>
      )}
      {visible === 3 && (
        <div
          className="flex text-lg font-normal bg-gradient-to-r to-[#2B2E7F] from-[#C25173] h-[270px] 
                    screen990:h-[220px]
          screen850:h-[245px]
          screen800:h-[265px]

          screen750:flex-col
          screen750:h-auto
          screen750:w-[80%]
          screen750:mx-auto
          screen750:bg-gradient-to-b

          screen540:w-[90%]
        "
        >
          <div
            className={` text-white  py-14  flex flex-col items-center justify-center overflow-hidden
              screen990:py-8 screen800:py-6
              screen750:mx-auto
              screen750:w-full
           ${
             hovered === 0
               ? "w-2/5 to-[#2B2E7F] bg-gradient-to-r from-[#C25173] screen750:bg-gradient-to-b screen750:w-full"
               : "w-1/5  transition-all duration-1000 ease-in-out  screen750:w-full   "
           }
            `}
          >
            <div className="pb-4 screen800:pb-3 text-lg px-2 screen1280:text-base ">
              {t("WebTitle1")}
            </div>
            <div
              style={{ direction: language === "ar" ? "rtl" : "ltr" }}
              className={` px-10 screen1500:px-6
                    screen1280:text-sm
                      
                    ${
                      hovered
                        ? `line-clamp-3  screen1500:line-clamp-4 screen1180:line-clamp-5 screen990:line-clamp-4 screen800:line-clamp-5 screen750:line-clamp-2 `
                        : "line-clamp-none transition-all duration-1000 ease-in-out screen750:py-3"
                    }`}
            >
              {t("WebText1")}
            </div>
          </div>
          {[...Array(4)].map((_, index) => (
            <div
              key={index}
              className="w-1/5 hover:w-2/5  border-l-2 screen750:border-l-0  screen750:border-t-2  text-white  py-14 flex flex-col items-center justify-center overflow-hidden
              transition-all duration-1000 ease-in-out  hover:bg-gradient-to-r to-[#2B2E7F] from-[#C25173]
              screen990:py-8 screen800:py-6

                screen750:mx-auto
             screen750:w-full

             screen750:hover:w-full
             screen750:hover:bg-gradient-to-b
             "
              onMouseEnter={() => setHovered(index + 1)}
              onMouseLeave={() => setHovered(0)}
            >
              <div className="pb-4 screen800:pb-3 text-lg px-2 screen1280:text-base">
                {index === 0
                  ? t("WebTitle2")
                  : index === 1
                  ? t("WebTitle3")
                  : index === 2
                  ? t("WebTitle4")
                  : t("WebTitle5")}
              </div>
              <div
                style={{ direction: language === "ar" ? "rtl" : "ltr" }}
                className={` px-10 
                      screen1500:px-6 
                      screen1280:text-sm ${
                        hovered === index + 1
                          ? "line-clamp-none   transition-all duration-1000 ease-in-out screen750:py-3"
                          : `line-clamp-3  screen1500:line-clamp-4 screen1180:line-clamp-5 screen990:line-clamp-4 screen800:line-clamp-5 
                          screen750:line-clamp-2 
                          
                         
                          
                          `
                      }`}
              >
                {index === 0
                  ? t("WebText2")
                  : index === 1
                  ? t("WebText3")
                  : index === 2
                  ? t("WebText4")
                  : t("WebText5")}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SecondChild;
