import React from "react";

const FirstChildDetails = ({ img, title, text, language }) => {
  return (
    <div
      className="bg-[#082784] rounded-3xl  mx-2 text-white  w-72
      screen1180:w-64
      screen610:w-full
    
    "
    >
      <img src={img} alt="عکس درباره ما" className="w-full rounded-t-3xl " />
      <div className="p-4">
        <div className="font-bold text-xl screen750:text-lg">{title}</div>
        <div
          style={{ direction: language === "ar" ? "rtl" : "ltr" }}
          className="text-sm pt-2 text-[#EAF2FE] screen750:text-xs"
        >
          {text}
        </div>
      </div>
    </div>
  );
};

export default FirstChildDetails;
