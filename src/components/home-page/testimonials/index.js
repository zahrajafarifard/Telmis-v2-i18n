import React from "react";
import { useTranslation } from "react-i18next";

import Swiper from "./swiper-comments";
import QuoteIcon from "../../../assets/client.png";
import Btn from "../../../assets/button-slider-r.svg";

const Testimonial = () => {
  const { t } = useTranslation();

  let comments = [
    {
      id: 1,
      img: QuoteIcon,
      name: "Michael Scott",
      position: "CEO, Dunder Mifflin",
      comment: t("comment"),
    },
    {
      id: 2,
      img: QuoteIcon,
      name: "Michael Scott1",
      position: "CEO, Dunder Mifflin",
      comment: t("comment"),
    },
    {
      id: 3,
      img: QuoteIcon,
      name: "Michael Scott2",
      position: "CEO, Dunder Mifflin",
      comment: t("comment"),
    },
    {
      id: 4,
      img: QuoteIcon,
      name: "Michael Scott3",
      position: "CEO, Dunder Mifflin",
      comment: t("comment"),
    },
    {
      id: 1,
      img: QuoteIcon,
      name: "Michael Scott",
      position: "CEO, Dunder Mifflin",
      comment: t("comment"),
    },
    {
      id: 2,
      img: QuoteIcon,
      name: "Michael Scott1",
      position: "CEO, Dunder Mifflin",
      comment: t("comment"),
    },
  ];
  return (
    <div className="my-32 screen1150:my-28 screen750:my-24 screen540:my-16">
      <div className=" flex flex-row mx-auto w-full  justify-center">
        <div
          className="swiper-prev bg-[#082784] rounded-[18px] w-10 h-10 flex items-center justify-center
        hover:shadow-[rgba(8,39,132,1)_0px_0px_8px_-1px] 
              active:shadow-[rgba(8,39,132,0.4)_0px_0px_8px_-1px]
        "
        >
          <img src={Btn} className="transform scale-x-[-1]" alt="فلش سمت چپ" />
        </div>
        <h2
          className="my-auto mx-8 bg-clip-text text-transparent bg-gradient-to-r from-[#FF5F6D]  to-[#082784] font-bold text-4xl
            screen1150:text-3xl
            screen750:text-2xl
          "
        >
          {t("Testimonials")}
        </h2>
        <div
          className="swiper-next  bg-[#082784] rounded-[18px] w-10 h-10 flex items-center justify-center
        
            hover:shadow-[rgba(8,39,132,1)_0px_0px_8px_-1px] 
              active:shadow-[rgba(8,39,132,0.4)_0px_0px_8px_-1px]
        "
        >
          <img src={Btn} alt="فلش سمت راست" />
        </div>
      </div>
      <div
        className="pt-5 pb-16 text-[32px] font-[600] text-[#082784]
          w-[80%] mx-auto
          screen540:w-[90%]
          screen1150:text-2xl
          screen750:text-xl
        "
      >
        <h3>{t("TestimonialsText")}</h3>
      </div>

      <div className=" w-[80%] mx-auto screen540:w-[90%] ">
        <Swiper data={comments} />
      </div>
    </div>
  );
};

export default Testimonial;
