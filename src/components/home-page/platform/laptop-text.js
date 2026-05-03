import React from "react";
import { useTranslation } from "react-i18next";

import Img1 from "../../../assets/icon.png";
import Img2 from "../../../assets/icon(1).png";
import Img3 from "../../../assets/icon(2).png";
import Img4 from "../../../assets/icon(3).png";

import "./motion.css";

const LaptopText = () => {
  const { t } = useTranslation();

  return (
    <div className="fade-in">
      <div
        className="w-[45%] my-auto text-justify text-white screen1250:w-[52%]
          screen990:w-full
          screen990:mt-[300px]
          screen450:mt-[230px]
        "
      >
        <h1
          className="text-[64px] font-bold leading-[1.4] text-start
            screen1450:text-5xl
            screen1450:leading-[1.3]
            screen1080:text-[42px]
            screen1080:leading-[1.3]
            screen540:text-4xl

        "
        >
          {t("App's Name")}
        </h1>

        <h4
          className="text-[#EAF2FE] pt-8 pb-12 text-start text-lg
            screen1080:text-base
            screen1080:leading-7
          "
        >
          {t("App Text")}
        </h4>
        <div
          className="grid grid-cols-2 text-2xl font-bold screen1450:text-lg screen1080:text-base
            screen540:grid-cols-1 text-start
          "
        >
          <div className="flex flex-row ">
            <img
              src={Img1}
              className="my-auto w-10 h-10"
              alt="آیکن تجربه کاربری"
            />
            <span className="my-auto">{t("UX research")}</span>
          </div>
          <div className="flex flex-row -ml-16  screen1250:-ml-10 screen540:ml-0">
            <img
              src={Img3}
              className="my-auto w-10 h-10"
              alt="آیکن ریسپانسیو"
            />
            <span className="my-auto">{t("Responsive development")}</span>
          </div>
          <div className="flex flex-row ">
            <img src={Img2} className="my-auto w-10 h-10" alt="آیکن طراحی" />
            <span className="my-auto">{t("UI/UX design")}</span>
          </div>
          <div className="flex flex-row -ml-16  screen1250:-ml-10 screen540:ml-0">
            <img src={Img4} className="my-auto w-10 h-10" alt="آیکن امنیت" />
            <span className="my-auto">{t("Website security")}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LaptopText;
