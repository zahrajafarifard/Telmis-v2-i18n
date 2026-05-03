import React from "react";
import { Navigation, Pagination, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import CommentDetails from "./comment-details";

const SwiperCurrency = ({ data }) => {
  const one_4 = data.slice(0, 3);
  const four_eight = data.slice(3, 6);

  const one_2 = data.slice(0, 2);
  const two_4 = data.slice(2, 4);
  const four_6 = data.slice(4, 6);

  const one = data.slice(0, 1);
  const two = data.slice(1, 2);
  const three = data.slice(2, 3);
  const four = data.slice(3, 4);
  const five = data.slice(4, 5);
  const six = data.slice(5, 6);

  return (
    <>
      <div className="flex flex-row  w-full mx-auto  h-fit my-auto screen1080:hidden">
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
            <div
              className=" grid grid-cols-3 gap-3 justify-items-center  my-4
                screen1250:gap-1
              "
            >
              {one_4.map((item, index) => {
                return <CommentDetails key={index} items={item} />;
              })}
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div
              className=" grid grid-cols-3 gap-3  justify-items-center my-4 
                screen1250:gap-1
              "
            >
              {four_eight.map((item, index) => {
                return <CommentDetails key={index} items={item} />;
              })}
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      <div className=" flex-row  w-full mx-auto  h-fit my-auto screen1080:flex hidden  screen670:hidden">
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
            <div
              className=" grid grid-cols-2 gap-3 justify-items-center  my-4
                screen1250:gap-1
              "
            >
              {one_2?.map((item, index) => {
                return <CommentDetails key={index} items={item} />;
              })}
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div
              className=" grid grid-cols-2 gap-3  justify-items-center my-4 
                screen1250:gap-1
              "
            >
              {two_4?.map((item, index) => {
                return <CommentDetails key={index} items={item} />;
              })}
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className=" grid grid-cols-2 gap-3  justify-items-center my-4 
                screen1250:gap-1
              "
            >
              {four_6?.map((item, index) => {
                return <CommentDetails key={index} items={item} />;
              })}
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      <div className=" flex-row  w-full mx-auto  h-fit my-auto screen670:flex hidden  screen540:-mt-4">
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
            <div
              className=" grid grid-cols-1 gap-3 justify-items-center  my-4
                screen1250:gap-1
              "
            >
              {one?.map((item, index) => {
                return <CommentDetails key={index} items={item} />;
              })}
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div
              className=" grid grid-cols-1 gap-3  justify-items-center my-4 
                screen1250:gap-1
              "
            >
              {two?.map((item, index) => {
                return <CommentDetails key={index} items={item} />;
              })}
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className=" grid grid-cols-1 gap-3  justify-items-center my-4 
                screen1250:gap-1
              "
            >
              {three?.map((item, index) => {
                return <CommentDetails key={index} items={item} />;
              })}
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className=" grid grid-cols-1 gap-3  justify-items-center my-4 
                screen1250:gap-1
              "
            >
              {four?.map((item, index) => {
                return <CommentDetails key={index} items={item} />;
              })}
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className=" grid grid-cols-1 gap-3  justify-items-center my-4 
                screen1250:gap-1
              "
            >
              {five?.map((item, index) => {
                return <CommentDetails key={index} items={item} />;
              })}
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className=" grid grid-cols-1 gap-3  justify-items-center my-4 
                screen1250:gap-1
              "
            >
              {six?.map((item, index) => {
                return <CommentDetails key={index} items={item} />;
              })}
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default SwiperCurrency;
