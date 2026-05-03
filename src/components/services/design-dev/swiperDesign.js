import React from "react";
import { Navigation, Pagination, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import CommentDetails from "./first-child-details";

const DesignDevSwiper = ({ data }) => {
  const one_3 = data.slice(0, 3);
  const four = data?.slice(1, 1);
  console.log("llllllleee", data, data.length);
  // const three = data.slice(2, 3);
  // const four = data.slice(3, 4);

  return (
    <>
      <div className=" w-[100%] mx-auto  hidden screen920:flex ">
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          speed={600}
          dir="rtl"
          loop={true}
          modules={[Navigation, Pagination, Scrollbar]}
          navigation={{
            prevEl: ".swiper-prev",
            nextEl: ".swiper-next",
          }}
        >
          <SwiperSlide>
            <div className="w-full mx-auto  flex flex-row justify-between p-3">
              {data?.slice(0, 3)?.map((item, index) => {
                return <CommentDetails key={index} item={item} />;
              })}
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="w-full mx-auto  flex flex-row justify-between p-3 border border-red-700">
              {data?.slice(0, 3)?.map((item, index) => {
                // console.log("iiiiii2", item);
                return <CommentDetails key={index} item={item} />;
              })}
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default DesignDevSwiper;
