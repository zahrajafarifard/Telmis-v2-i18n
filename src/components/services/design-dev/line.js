import React from "react";

const Line = ({ activeIndex, scrollLeft }) => {
  return (
    <div
      className="grid grid-cols-4 gap-8 w-full h-[10px] rounded-full border  mb-10 shadow-[inset_rgba(0,0,0,0.25)_0px_0px_4.2px_1px]
      screen920:grid-cols-3
      screen920:w-[94%]
      screen920:mx-auto
      screen920:gap-7
      screen670:grid-cols-2
      screen670:w-[80%]  "
    >
      <div
        className={`section rounded-full ${
          scrollLeft < 400
            ? scrollLeft < 150
              ? activeIndex === 0 && "active"
              : activeIndex - 1 === 0 && "active"
            : activeIndex - 2 === 0 && "active"
        }`}
      ></div>
      <div
        className={`section rounded-full ${
          scrollLeft < 400
            ? scrollLeft < 150
              ? activeIndex === 1 && "active"
              : activeIndex - 1 === 1 && "active"
            : activeIndex - 3 === 0 && "active"
        }`}
      ></div>

      <div
        className={`section rounded-full screen670:hidden ${
          scrollLeft < 150
            ? activeIndex === 2 && "active"
            : activeIndex - 1 === 2 && "active"
        }`}
      ></div>
      <div
        className={`section rounded-full screen920:hidden ${
          activeIndex === 3 ? "active" : ""
        }`}
      ></div>
    </div>
  );
};

export default Line;
