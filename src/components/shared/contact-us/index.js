import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

import WhatsApp from "../../../assets/WhatsApp-contactus.svg";
import LinkedIn from "../../../assets/linkedin-contactus.svg";
import Insta from "../../../assets/instagram-contact-us.svg";

import Logo1 from "../../../assets/logo test 1.svg";
import Logo2 from "../../../assets/logo test 2.svg";
import Logo3 from "../../../assets/logo test 3.svg";
import Logo4 from "../../../assets/logo test 4.svg";

import style from "./style.module.css";

const ContactUs = () => {
  const { t } = useTranslation();

  const [isActive, setIsActive] = useState("");

  const _lang = useSelector((state) => state.lang);
  const [language, setLanguage] = useState();

  useEffect(() => {
    setLanguage(_lang);
  }, [setLanguage, _lang]);

  return (
    <div
      className={`${style.gradientBg} relative text-[#EAF2FE] pt-20 
        screen670:pt-10
      `}
    >
      <div
        style={{ direction: language === "ar" ? "rtl" : "ltr" }}
        className="grid grid-cols-2 w-[80%] mx-auto
          screen670:grid-cols-1
          screen540:w-[90%] "
      >
        <div >
          <h1
            className="text-4xl font-bold w-[90%] text-start 
              screen1150:text-3xl
              screen920:text-2xl
              screen920:leading-9
              screen750:text-xl
              screen750:leading-8
              screen670:text-[32px]
              screen450:text-[27px]
              screen450:leading-9
              screen380:text-[23.5px]
              screen750:w-full
              "
          >
            {t("contactTitle")}
          </h1>

          <h3
            className="pt-8 pb-20 text-start text-lg
              screen1150:text-base
              screen1150:leading-6
              screen920:text-sm
              screen750:text-xs
              screen750:leading-5
              screen1150:pb-16
              screen750:pb-12
              screen750:pt-6
              screen670:pt-4
              screen670:pb-8
              screen670:text-base
            "
          >
            {t("contactText")}
          </h3>
          <h3
            className="pb-6  text-start text-lg
              screen670:pb-4
              screen1150:text-base
              screen750:text-xs
              screen670:text-base
            "
          >
            {t("followUs")}
          </h3>
          <div className="flex flex-row screen670:pb-14">
            <img
              src={Insta}
              className="w-8 h-8 screen990:w-7 screen990:h-7 "
              alt="آیکن اینستاگرام"
            />
            <img
              src={LinkedIn}
              className="w-8 h-8 mx-6 screen990:w-7 screen990:h-7"
              alt="آیکن لینکداین"
            />
            <img
              src={WhatsApp}
              className="w-8 h-8 screen990:w-7 screen990:h-7 "
              alt="آیکن واتس اپ"
            />
          </div>
        </div>

        <div className=" ">
          <div
            className="w-2/3 float-end relative screen990:w-3/4 screen850:w-[85%]
              screen670:float-none
              screen670:mx-auto
              screen670:w-full
              "
          >
            {isActive === "Name" && (
              <div className="absolute -top-3 start-5 w-fit bg-[#0B2A80]  px-2">
                {t("Name")}
              </div>
            )}

            <input
              className="w-full bg-transparent border-2 rounded-[22px] h-14 px-3 focus:outline-none "
              placeholder={`${isActive === "Name" ? "" : t("Name")}`}
              onFocus={() => setIsActive("Name")}
              onBlur={() => setIsActive(false)}
            />
          </div>

          <div
            className="w-2/3 float-end relative screen990:w-3/4 screen850:w-[85%]
              screen670:float-none
              screen670:mx-auto
              screen670:w-full "
          >
            {isActive === "Email" && (
              <div className="absolute top-7 screen1150:top-3 start-5 w-fit bg-[#0B2A80] px-2">
                {t("Email")}
              </div>
            )}

            <input
              className="w-full  bg-transparent border-2 rounded-[22px] my-10 h-14 px-3 focus:outline-none
                screen1150:my-6 "
              placeholder={`${isActive === "Email" ? "" : t("Email")}`}
              onFocus={() => setIsActive("Email")}
              onBlur={() => setIsActive(false)}
            />
          </div>
          <div
            className="w-2/3 float-end relative screen990:w-3/4 screen850:w-[85%]
              screen670:float-none
              screen670:mx-auto
              screen670:w-full  "
          >
            {isActive === "Message" && (
              <div className="absolute -top-3 start-5 w-fit bg-[#0B2A80] px-2 ">
                {t("Message")}
              </div>
            )}
            <textarea
              className="w-full bg-transparent border-2 rounded-[22px] p-3 focus:outline-none"
              placeholder={`${isActive === "Message" ? "" : t("Message")}`}
              rows={4}
              onFocus={() => setIsActive("Message")}
              onBlur={() => setIsActive(false)}
            />
            <div
              className="rounded-full bg-white w-fit mx-auto px-6 py-2 mt-10 text-black screen990:py-2.5
                screen670:px-14 
                group hover:to-[#2B2E7F] hover:bg-gradient-to-r hover:from-[#C25173]
                "
            >
              <div className="bg-clip-text text-transparent bg-gradient-to-r from-[#FF5F6D] text-lg  font-bold to-[#082784]  screen990:text-base group-hover:text-white">
                {t("Consent message")}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={` ${style.blurStyle} w-[100%] mx-auto  absolute bottom-0 inset-x-0 opacity-60 screen670:hidden `}
      >
        <div
          className="w-[80%] mx-auto flex flex-row  justify-between opacity-75
          screen750:w-[90%]
          "
        >
          <img
            src={Logo1}
            className="screen1350:w-32 screen1350:h-32 screen1150:w-28 screen1150:h-28 
              screen990:w-24 screen990:h-24 
              "
            alt="لوگو"
          />
          <img
            src={Logo2}
            className="screen1350:w-32 screen1350:h-32 screen1150:w-28 screen1150:h-28 
            screen990:w-24 screen990:h-24 
            "
            alt="لوگو"
          />
          <img
            src={Logo3}
            className="screen1350:w-32 screen1350:h-32 screen1150:w-28 screen1150:h-28 
            screen990:w-24 screen990:h-24 
            "
            alt="لوگو"
          />
          <img
            src={Logo4}
            className="screen1350:w-32 screen1350:h-32 screen1150:w-28 screen1150:h-28 
            screen990:w-24 screen990:h-24 
            "
            alt="لوگو"
          />
          <img
            src={Logo1}
            className="screen1350:w-32 screen1350:h-32 screen1150:w-28 screen1150:h-28 
            screen990:w-24 screen990:h-24 
            "
            alt="لوگو"
          />
          <img
            src={Logo2}
            className="screen1350:w-32 screen1350:h-32 screen1150:w-28 screen1150:h-28 
            screen990:w-24 screen990:h-24 
            "
            alt="لوگو"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
