import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

import Logo from "../../../assets/footer-logo.svg";
import Mail from "../../../assets/footer-mail.svg";
import Phone from "../../../assets/footer-phone.svg";
import Location from "../../../assets/footer-loc.svg";
import LinkedIn from "../../../assets/linkedIn.svg";
import whatsApp from "../../../assets/whatsApp.svg";
import Insta from "../../../assets/insta.svg";

const Footer = () => {
  const { t } = useTranslation();

  const _lang = useSelector((state) => state.lang);
  const [language, setLanguage] = useState();

  useEffect(() => {
    setLanguage(_lang);
  }, [setLanguage, _lang]);

  return (
    <div
      style={{ direction: language === "ar" ? "rtl" : "ltr" }}
      className="bg-[#f3f5fc] w-[80%] mx-auto text-justify text-[#555858] text-base 
      screen1150:text-sm
      screen540:w-[90%]
      "
    >
      <div className="screen990:flex screen1080:flex-col hidden pt-20 ">
        <img src={Logo} alt="لوگو" className="w-28 screen750:mx-auto" />
        <h4 className="pt-2 screen750:mx-auto screen750:pt-5">
          {t("footer1")}
        </h4>
      </div>

      <div
        className="grid grid-cols-5 pt-24 pb-20 border-b 
        screen1150:pt-20
        screen1150:pb-16
        screen990:grid-cols-4
        screen990:pt-8
        screen750:grid-cols-2
        screen750:gap-y-8
        screen750:gap-x-0
        screen750:pt-16

        "
      >
        <div className="screen990:hidden">
          <img src={Logo} alt="لوگو" />

          <h4 className="pt-8 w-[60%] text-start screen1700:w-[70%] screen1500:w-[80%] screen1320:w-[90%]">
            {t("Cutting-Edge Network & IT Solutions")}
          </h4>
        </div>

        <div>
          <div
            className="font-bold text-lg text-[#252B2B] 
              screen1150:text-base
            "
          >
            {t("Company")}
          </div>
          <Link to="/services/design-develop">
            <div className="py-4 screen750:py-3">{t("Design & develop")}</div>
          </Link>
          <Link to="/services/network">
            <div>{t("Network services")}</div>
          </Link>
          <Link to="/projects/network">
            <div className="pt-4 screen750:pt-3">{t("Network projects")}</div>
          </Link>
          <Link to="/projects/design-develop">
            <div className="pt-4 screen750:pt-3">{t("IT Projects")}</div>
          </Link>
        </div>

        <div>
          <div
            className="font-bold text-lg text-[#252B2B] 
              screen1150:text-base
            "
          >
            {t("Quick access")}
          </div>

          <Link to="/">
            <div className="py-4 screen750:py-3">{t("Home")}</div>
          </Link>

          <Link to="/about-us">
            <div>{t("About us")}</div>
          </Link>
          <Link to="/contact-us">
            <div className="pt-4 screen750:pt-3">{t("Contact us footer")}</div>
          </Link>
        </div>

        <div>
          <div
            className="font-bold text-lg text-[#252B2B] 
              screen1150:text-base
            "
          >
            {t("Legal")}
          </div>
          <Link to="/privacy-policy">
            <div className="py-4 screen750:py-3">{t("Privacy policy")}</div>
          </Link>
          <Link to="/terms-conditions">
            <div>{t("Terms & conditions")}</div>
          </Link>
          {/* <div className="pt-4 screen750:pt-3">{t("Cookie policy")}</div> */}
        </div>

        <div>
          <div
            className="font-bold text-lg text-[#252B2B] 
              screen1150:text-base
            "
          >
            {t("Contact")}
          </div>
          <div className="flex flex-row py-4 screen750:py-3">
            <img
              src={Phone}
              alt="آیکن تلفن"
              className=" screen920:w-4 screen920:h-4 my-auto "
            />
            <span className="px-2">+999-444444444</span>
          </div>
          <div className="flex flex-row">
            <img
              src={Mail}
              alt="آیکن ایمیل"
              className=" screen920:w-4 screen920:h-4 my-auto "
            />
            <span className="px-2">test@gmail.com</span>
          </div>
          <div className="flex flex-row pt-4 screen750:pt-3">
            <img
              src={Location}
              alt="آیکن آدرس"
              className=" my-auto screen920:w-4 screen920:h-4"
            />
            <div className=" my-auto px-2 text-start">{t("address")}</div>
          </div>
        </div>
      </div>
      <div
        style={{ direction: "ltr" }}
        className="flex flex-row justify-between py-8 
          screen1150:py-6
        "
      >
        <div className="text-[#909393] flex flex-row  my-auto screen540:text-start">
          <div className="screen540:text-[13px] my-auto font-Lato">
            @2024 Telmis all right reserved.
          </div>

          <div
            className={`px -2 bg-clip-text text-transparent bg-gradient-to-r from-[#FF5F6D]  to-[#082784] font-[600] my-auto font-Lato
              screen540:text-[13px] underline underline-offset-4 decoration-[#53387d] decoration-2 
              ${language === "ar" ? "screen540:pr-1" : "screen540:pl-1"}
            `}
          >
            {language === "en" ? "EN" : "AR"}
          </div>
        </div>
        <div className="flex flex-row my-auto">
          <div
            className="bg-gradient-to-tr to-[#082784] from-[#FF5F6D] rounded-full w-8 h-8 flex items-center justify-center
           hover:shadow-[rgba(185,79,115,1)_0px_0px_8px_-1px] 
              active:shadow-[rgba(185,79,115,0.4)_0px_0px_8px_-1px] 
          "
          >
            <img src={Insta} className=" " alt="آیکن اینستاگرام" />
          </div>
          <div
            className="mx-2 screen850:mx-1 bg-gradient-to-tr to-[#082784] from-[#FF5F6D] rounded-full w-8 h-8 flex items-center justify-center
           hover:shadow-[rgba(185,79,115,1)_0px_0px_8px_-1px] 
              active:shadow-[rgba(185,79,115,0.4)_0px_0px_8px_-1px] 
          "
          >
            <img src={LinkedIn} alt="آیکن لینکداین" />
          </div>
          <div
            className="bg-gradient-to-tr to-[#082784] from-[#FF5F6D] rounded-full w-8 h-8 flex items-center justify-center
           hover:shadow-[rgba(185,79,115,1)_0px_0px_8px_-1px] 
              active:shadow-[rgba(185,79,115,0.4)_0px_0px_8px_-1px] 
          "
          >
            <img src={whatsApp} alt="آیکن واتس اپ" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
