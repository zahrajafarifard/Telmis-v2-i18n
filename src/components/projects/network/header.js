import React from "react";

import Left from "../../../assets/group-left.svg";
import Right from "../../../assets/group-right.svg";
import { useTranslation } from "react-i18next";

const Header = () => {
  const { t } = useTranslation();
  return (
    <div className="bg-[#EAEEFF]  relative pt-28 pb-14  mb-14">
      <div className="absolute left-0 top-1  my-auto inset-y-0">
        <img
          src={Left}
          alt="عکس هدر سمت چپ"
          className="w-[520px] 
            screen1600:w-[420px] screen1600:mt-8
            screen1350:w-[350px]
            screen1350:mt-16

            screen850:w-[300px]

            screen750:mt-0

            "
        />
      </div>
      <div className="screen750:my-20">
        <h1
          className="w-[45%] mx-auto
            bg-clip-text text-transparent bg-gradient-to-r to-[#082784] from-[#FF5F6D] font-bold text-5xl leading-[1.4]
            screen1450:text-[40px]
            screen1150:text-3xl

            screen850:w-[55%]
            

            screen750:w-[70%]
            screen540:w-[100%]
          
            screen540:font-bold screen540:text-3xl
             screen540:leading-[1.6] screen540:px-3
          "
        >
          {t("Reliable Network Solutions for Seamless Operations")}
        </h1>

        <div
          className="w-fit mx-auto bg-gradient-to-r to-[#082784] from-[#FF5F6D] text-white text-lg font-bold rounded-full px-24 py-3 mt-14
          screen1150:text-base
          screen750:px-20

          screen540:mb-28

            hover:shadow-[rgba(185,79,115,1)_0px_0px_8px_-1px] 
              active:shadow-[rgba(185,79,115,0.4)_0px_0px_8px_-1px]
        
        "
        >
          {t("Contact us")}
        </div>
      </div>
      <div className="absolute top-16 right-0 my-auto inset-y-0 screen750:top-[74%]">
        <img
          alt="عکس هدر سمت راست"
          src={Right}
          className="w-[520px] 
            screen1600:w-[420px] 
            screen1600:mt-8
            screen1350:w-[350px]
            screen1350:mt-16
            screen850:w-[300px]

            screen750:mt-0
        "
        />
      </div>
    </div>
  );
};

export default Header;
