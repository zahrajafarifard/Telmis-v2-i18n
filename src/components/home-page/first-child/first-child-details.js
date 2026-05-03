import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import "./style.css";

const FirstChildDetails = ({ img, title, text, index }) => {
  const _lang = useSelector((state) => state.lang);
  const [language, setLanguage] = useState();

  useEffect(() => {
    setLanguage(_lang);
  }, [setLanguage, _lang]);

  return (
    <div
      className={`bg-[#082784] rounded-3xl w-60 text-white carousel-item 
        screen1450:w-52
        screen1350:w-48
        screen1230:w-44
        screen1150:w-44
      
      ${
        language === "ar" &&
        `h-[335px] screen1800:h-[320px] screen1700:h-[310px] screen1600:h-[300px] screen1500:h-[295px] 
        screen1450:h-[285px]
        screen1400:h-[275px]
        screen1230:h-[265px]
        screen1180:h-[250px]
        
        `
      }
        `}
    >
      <img src={img} className="rounded-t-3xl " alt="profit img" />
      <div
        className={`p-4 
        screen1450:px-2
        screen1450:py-3
       ${language === "ar" && index === 4 && "screen1800:px-0 "}
       ${language === "ar" && index === 2 && "screen1400:px-0 "}
      
        `}
      >
        <div
          className="font-bold text-xl
          screen1450:text-lg
          screen1230:text-base
        "
        >
          {title}
        </div>
        <div
          className={`text-sm pt-2
            screen1150:text-[13px]

     
      ${language === "ar" && index === 2 && "screen1700:px-2"}

            
            ${
              (index === 1 || index === 2 || index === 3 || index === 4) &&
              "px-8"
            }
            ${(index === 1 || index === 4) && "screen1600:px-2"}
            ${(index === 2 || index === 3) && "screen1350:px-4"}
            ${index === 4 && "screen1320:px-2"}
            ${index === 1 && "screen1280:px-2"}
            ${index === 4 && "screen1230:px-1"}
          `}
        >
          {text}
        </div>
      </div>
    </div>
  );
};

export default FirstChildDetails;
