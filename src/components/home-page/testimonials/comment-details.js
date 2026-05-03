import React, { useEffect, useState } from "react";

import { useSelector } from "react-redux";
import QuoteIcon from "../../../assets/quote-icon.svg";
const CommentDetails = ({ items }) => {
  const [language, setLanguage] = useState();
  const _lang = useSelector((state) => state.lang);

  useEffect(() => {
    setLanguage(_lang);
  }, [setLanguage, _lang]);

  return (
    <div
      className=" rounded-[40px] shadow-md pt-8 px-8 pb-10 border mr-1 
        screen1500:px-5
        screen1500:pt-4
        screen1500:pb-5
        screen850:px-3
        screen850:pt-2
        screen850:pb-4
        screen670:w-[82%]
        screen670:px-8
        screen670:pt-4
        screen670:pb-5
        screen600:w-[91%]
        screen540:w-[98%]
        screen540:mr-0
        screen540:px-5
        screen540:pt-2
        screen540:pb-4
      "
    >
      <div
        style={{ direction: language === "ar" ? "rtl" : "ltr" }}
        className="flex flex-row justify-between py-3 my-auto"
      >
        <div className="flex flex-row my-auto">
          <div>
            <img src={items?.img} className="w-10" alt="customer" />
          </div>
          <div>
            <div
              className="text-start text-xl font-bold text-[#252B2B] px-2
                screen1350:text-lg
                screen1080:text-xl
                screen990:text-lg
                screen850:text-[17px]
                screen670:text-xl
              "
            >
              {items?.name}
            </div>
            <div
              className="text-start text-xs text-[#555858] px-2 
                screen850:text-[11px]
                screen670:text-xs
              "
            >
              {items?.position}
            </div>
          </div>
        </div>
        <div className=" my-auto">
          <img
            src={QuoteIcon}
            className="w-12 h-12 my-auto
          screen990:w-11
          screen990:h-11
          
          "
            alt="quote icon"
          />
        </div>
      </div>
      <div
        style={{ direction: language === "ar" ? "rtl" : "ltr" }}
        className="text-justify text-base text-[#555858] 
            screen1400:text-[15px]
            screen1350:text-sm
            screen1080:text-base
            screen990:text-[15px]
            screen850:text-sm
            screen670:text-base
            screen540:text-[15px]
        "
      >
        {items?.comment}
      </div>
    </div>
  );
};

export default CommentDetails;
