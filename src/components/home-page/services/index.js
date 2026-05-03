import React from "react";
import Image1 from "../../../assets/home-services-new.svg";
import Design from "./design";

import ImageNet from "../../../assets/graphics.network-new.svg";
import Network from "./network";
import { useTranslation } from "react-i18next";

const Services = () => {
  const { t } = useTranslation();

  return (
    <div
      className="w-[80%] mx-auto py-24
        screen540:w-[90%]
      "
    >
      <h1>
        <span className="text-4xl  bg-clip-text text-transparent bg-gradient-to-r from-[#FF5F6D]  to-[#082784] font-bold">
          {t("Our Services")}
        </span>
      </h1>

      <div
        className="flex flex-row-reverse justify-between pt-10
          screen990:flex-col
        "
      >
        <div
          className="w-1/2  my-auto
            screen990:w-full
            screen990:mx-auto
          "
        >
          <img
            src={Image1}
            className=" w-[70%]  my-auto float-right
              screen1700:w-[85%]
              screen1450:w-[90%]
              screen1350:w-[80%]
              screen1080:w-[90%]
              screen990:w-[60%]
              screen990:mx-auto
              screen990:float-none
              screen850:w-[70%]
              screen540:w-full
            "
            alt="عکس طراحی"
          />
        </div>
        <div
          className="w-1/2
            screen1080:w-[60%]
            screen990:w-full
            screen990:mx-auto
          "
        >
          <Design />
        </div>
      </div>

      <div
        className="flex flex-row justify-between pt-10
          screen990:flex-col  "
      >
        <div
          className="w-1/2  my-auto
          screen990:w-full
          screen990:mx-auto
          "
        >
          <img
            src={ImageNet}
            className="w-[70%]  my-auto float-left
              screen1700:w-[85%]
              screen1450:w-[90%]
              screen1350:w-[80%]
              screen1080:w-[90%]
              screen990:w-[60%]
              screen990:mx-auto
              screen990:float-none
              screen850:w-[70%]
              screen540:w-full
            "
            alt="عکس شبکه"
          />
        </div>
        <div
          className="w-1/2
            screen1080:w-[60%]
            screen990:w-full
            screen990:mx-auto
            "
        >
          <Network />
        </div>
      </div>
    </div>
  );
};

export default Services;
