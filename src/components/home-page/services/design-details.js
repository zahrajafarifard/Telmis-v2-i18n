import React, { useState } from "react";

const DesignDetails = ({ img, title, text, index, hoveredImg }) => {
  const [hoveredItem, setHoveredItem] = useState(-1);

  return (
    <div
      onMouseEnter={() => setHoveredItem(index)}
      onMouseLeave={() => setHoveredItem(-1)}
      className="bg-white rounded-[40px] pt-5 pb-10 px-6 w-72 shadow-[rgba(0,0,0,0.15)_1px_2px_8px_-1px,rgba(0,0,0,0.06)_6px_10px_35px_0px]
       hover:shadow-[rgba(0,0,0,0.2)_2px_3px_10px_0px,rgba(0,0,0,0.06)_6px_10px_35px_0px]
       screen1450:w-64
      screen1450:pb-8
      screen1450:px-5
      screen1350:w-60
      screen1230:pt-4
      screen1230:pb-6
      screen1230:w-56
      screen1230:px-3
      screen1150:w-52
      screen1150:px-2
      screen1150:pb-5
      screen990:w-72  
      screen990:px-4  
      screen990:pb-7  
      screen750:w-full
      screen600:w-[13.4rem]
      screen600:px-3
      screen540:w-full
    "
    >
      {hoveredItem === index ? (
        <img
          src={hoveredImg}
          className="w-12 h-12 mx-auto
        screen1230:w-11 screen1230:h-11
        screen1150:w-10 screen1150:h-10
        screen990:w-12 screen990:h-12
      "
          alt="آیکن طراحی"
        />
      ) : (
        <img
          src={img}
          className="w-12 h-12 mx-auto
      screen1230:w-11 screen1230:h-11
      screen1150:w-10 screen1150:h-10
      screen990:w-12 screen990:h-12
    "
          alt="آیکن طراحی"
        />
      )}
      <div
        className="pt-2 pb-4 text-[#E13D74]  text-xl
          font-bold
          screen1350:text-lg
          screen1230:pb-2.5
          screen1230:pt-1.5
          screen1150:pb-2
          screen1150:pt-1
          screen990:pb-3
          screen990:pt-1.5
          screen540:text-lg
          screen540:pt-2
          screen540:pb-4
        "
      >
        {title}
      </div>
      <div
        className="text-[#555858] text-base
          screen1350:text-sm
          screen540:text-base
        "
      >
        {text}
      </div>
    </div>
  );
};

export default DesignDetails;
