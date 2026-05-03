import React, { useState } from "react";

const FirstChildDetails = ({ img, title, active, hoveredImg }) => {
  const [hoveredItem, setHoveredItem] = useState(0);

  return (
    <div
      onMouseEnter={() => setHoveredItem(active)}
      onMouseLeave={() => setHoveredItem(0)}
      className="rounded-[40px] group
        shadow-[rgba(0,0,0,0.06)_6px_10px_35px_0px,rgba(0,0,0,0.15)_1px_2px_8px_-1px] py-10
        hover:shadow-[rgba(0,0,0,0.06)_6px_10px_35px_0px,rgba(0,0,0,0.2)_1px_2px_8px_-1px]
        active:shadow-[rgba(0,0,0,0.06)_6px_10px_35px_0px,rgba(0,0,0,0.15)_1px_2px_8px_-1px]
        screen920:w-48
        "
    >
      {hoveredItem === active ? (
        <img
          src={hoveredImg}
          className="w-16 h-16 mx-auto
          screen1080:w-14 screen1080:h-14"
          alt="آیکن طراحی"
        />
      ) : (
        <img
          src={img}
          className="w-16 h-16 mx-auto
          screen1080:w-14 screen1080:h-14"
          alt="آیکن طراحی"
        />
      )}
      <div
        className={`text-xl font-bold pt-2 ${active && "text-[#E13D74]"}
        screen1400:text-lg
        screen1080:text-[15px]
        group-hover:text-[#E13D74]
        `}
      >
        {title}
      </div>
    </div>
  );
};

export default FirstChildDetails;
