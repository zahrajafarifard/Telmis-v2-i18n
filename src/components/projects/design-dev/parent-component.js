import React, { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

import ChildComponent from "./child-component";
import LapTop from "../../../assets/proj-lap2.svg";
import Iphone from "../../../assets/iPhone 12 Pro.png";
import "./ss.css";

const ParentComponent = () => {
  const { t } = useTranslation();

  const _lang = useSelector((state) => state.lang);
  const [language, setLanguage] = useState();

  useEffect(() => {
    setLanguage(_lang);
  }, [setLanguage, _lang]);

  const [activeIndex, setActiveIndex] = useState(0);
  const [hovered, setHovered] = useState(0);

  const containerRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  const scroll = (direction) => {
    if (containerRef.current) {
      const scrollAmount = direction === "down" ? 200 : -200;
      containerRef.current.scrollBy({ top: scrollAmount, behavior: "smooth" });
    }
  };

  const handleScroll = () => {
    if (containerRef.current) {
      const maxScrollTop =
        containerRef.current.scrollHeight -
        containerRef.current.clientHeight +
        95;
      const scrollTop = containerRef.current.scrollTop;
      const scrollPercentage = (scrollTop / maxScrollTop) * 100;
      setScrollPosition(scrollPercentage);
    }
  };
  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
      return () => container.removeEventListener("scroll", handleScroll);
    }
  }, []);

  const handleClick = (e) => {
    const { top, height } = e.currentTarget.getBoundingClientRect();
    const clickPosition = e.clientY - top;
    const middle = height / 2;

    // Determine the direction based on the click position
    const direction = clickPosition > middle ? "down" : "up";
    scroll(direction);
  };

  return (
    <div className="bg-[#F3F5FC] pb-20 relative">
      <div
        style={{ direction: language === "ar" ? "rtl" : "ltr" }}
        className="w-[80%] mx-auto flex flex-row 
        screen1450:w-[90%]
        screen990:flex-col
      
      "
      >
        <div className="w-full py-10 sticky z-20 top-10 bg-[#f3f5fc] hidden screen990:flex"></div>
        <div
          ref={containerRef}
          className="w-[20%] mx-auto bg-[#D3E5FD] rounded-[32px] sticky z-20 top-20 overflow-y-scroll h-[750px]  scroll-smooth  hide-scrollbar 
            screen1600:w-[22%]
            screen1450:w-[24%]
            screen990:w-[90%]
            screen990:h-auto
            screen990:mb-10 


            screen990:overflow-x-auto
            screen990:flex
            screen990:flex-row
          
          
          
          "
        >
          <div className="flex flex-row   ">
            <div
              onClick={handleClick}
              className="w-2 h-[500px] mt-20 rounded-full bg-gray-50 border ms-2 sticky z-20 top-20 cursor-pointer screen990:hidden"
            >
              <div
                className="w-1.5 mt-2 h-20 bg-[#082784] rounded-full cursor-pointer absolute"
                style={{ top: `${scrollPosition}%` }}
              />
            </div>

            <div
              className="w-[80%] mx-auto  
            screen990:flex 
            screen990:flex-row 
            screen990:w-[90%] 
            screen990:gap-7

           
            
            
            "
            >
              <div
                onClick={() => setActiveIndex(0)}
                onMouseEnter={() => setHovered(1)}
                onMouseLeave={() => setHovered(0)}
                className={`relative w-full h-[200px] border my-10 mx-auto bg-[#EAEEFF] overflow-hidden shadow-[rgba(0,0,15,0.2)_3px_3px_12px_0px] rounded-[40px]  py-5 
                  ${activeIndex === 0 && "border border-[#082784]"}
                  ${hovered === 1 && "py-0 border-0"}


                  screen990:w-48 screen540:my-6

                    
                  `}
              >
                <div
                  className={`w-full h-[200px] py-3 px-2 rounded-[40px] text-white  bg-[#082784]  mx-auto text-sm z-10
                  ${hovered === 1 ? "opacity-100" : "opacity-0"}
                   absolute inset-0 flex flex-col justify-center items-center  bg-opacity-80 transition-opacity duration-300 ease-in-out
                    `}
                >
                  {`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.`}
                </div>
                <img
                  src={LapTop}
                  alt="عکس پروژه 1"
                  className={`w-40  mx-auto ${
                    language === "en" ? "" : "transform scale-x-[-1]"
                  }`}
                />
                <div
                  className="mt-1 bg-clip-text text-transparent bg-gradient-to-r from-[#082784] to-[#FF5F6D] text-lg font-bold
                  screen990:text-base
                "
                >
                  {t("Name of the project")}
                </div>
              </div>

              <div
                onClick={() => setActiveIndex(1)}
                onMouseEnter={() => setHovered(2)}
                onMouseLeave={() => setHovered(0)}
                className={`relative w-full h-[200px] border my-10 mx-auto bg-[#EAEEFF] overflow-hidden shadow-[rgba(0,0,15,0.2)_3px_3px_12px_0px] rounded-[40px]  py-5 
                  ${activeIndex === 1 && "border border-[#082784]"}
                  ${hovered === 2 && "py-0 border-0"}

                  screen990:w-48 screen540:my-6

                  `}
              >
                <div
                  className={`w-full h-[200px] py-3 px-2 rounded-[40px] text-white  bg-[#082784]  mx-auto text-sm z-10
                  ${hovered === 2 ? "opacity-100" : "opacity-0"}
                   absolute inset-0 flex flex-col justify-center items-center  bg-opacity-80    transition-opacity duration-300 ease-in-out
                    
                    `}
                >
                  {`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.`}
                </div>

                <img
                  src={Iphone}
                  alt="عکس پروژه 2"
                  className="w-40  mx-auto h-[122px] "
                />
                <div
                  className="mt-1 bg-clip-text text-transparent bg-gradient-to-r from-[#082784] to-[#FF5F6D] text-lg font-bold
                  screen990:text-base

                "
                >
                  {t("Name of the project")}
                </div>
              </div>

              <div
                onClick={() => setActiveIndex(2)}
                onMouseEnter={() => setHovered(3)}
                onMouseLeave={() => setHovered(0)}
                className={`relative w-full h-[200px] border my-10 mx-auto bg-[#EAEEFF] overflow-hidden shadow-[rgba(0,0,15,0.2)_3px_3px_12px_0px] rounded-[40px]  py-5 
                  ${activeIndex === 2 && "border border-[#082784]"}
                  ${hovered === 3 && "py-0 border-0"}

                  screen990:w-48 screen540:my-6

                  `}
              >
                <div
                  className={`w-full h-[200px] py-3 px-2 rounded-[40px] text-white  bg-[#082784]  mx-auto text-sm z-10
                  ${hovered === 3 ? "opacity-100" : "opacity-0"}
                   absolute inset-0 flex flex-col justify-center items-center  bg-opacity-80    transition-opacity duration-300 ease-in-out
                    
                    `}
                >
                  {`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.`}
                </div>

                <img
                  src={LapTop}
                  alt="عکس پروژه 3"
                  className={`w-40  mx-auto ${
                    language === "en" ? "" : "transform scale-x-[-1]"
                  }`}
                />
                <div
                  className="mt-1 bg-clip-text text-transparent bg-gradient-to-r from-[#082784] to-[#FF5F6D] text-lg font-bold
                  screen990:text-base

                "
                >
                  {t("Name of the project")}
                </div>
              </div>

              <div
                onClick={() => setActiveIndex(3)}
                onMouseEnter={() => setHovered(4)}
                onMouseLeave={() => setHovered(0)}
                className={`relative w-full h-[200px] border my-10 mx-auto bg-[#EAEEFF] overflow-hidden shadow-[rgba(0,0,15,0.2)_3px_3px_12px_0px] rounded-[40px]  py-5 
                  ${activeIndex === 3 && "border border-[#082784]"}
                  ${hovered === 4 && "py-0 border-0"}

                  screen990:w-48 screen540:my-6

                  `}
              >
                <div
                  className={`w-full h-[200px] py-3 px-2 rounded-[40px] text-white  bg-[#082784]  mx-auto text-sm z-10
                  ${hovered === 4 ? "opacity-100" : "opacity-0"}
                   absolute inset-0 flex flex-col justify-center items-center  bg-opacity-80    transition-opacity duration-300 ease-in-out
                    
                    `}
                >
                  {`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.`}
                </div>

                <img
                  src={Iphone}
                  alt="عکس پروژه 4"
                  className="w-40  mx-auto h-[122px]"
                />
                <div
                  className="mt-1 bg-clip-text text-transparent bg-gradient-to-r from-[#082784] to-[#FF5F6D] text-lg font-bold
                  screen990:text-base

                "
                >
                  {t("Name of the project")}
                </div>
              </div>

              <div
                onClick={() => setActiveIndex(4)}
                onMouseEnter={() => setHovered(5)}
                onMouseLeave={() => setHovered(0)}
                className={`relative w-full h-[200px] border my-10 mx-auto bg-[#EAEEFF] overflow-hidden shadow-[rgba(0,0,15,0.2)_3px_3px_12px_0px] rounded-[40px]  py-5 
                  ${activeIndex === 4 && "border border-[#082784]"}
                  ${hovered === 5 && "py-0 border-0"}

                  screen990:w-48 screen540:my-6

                  `}
              >
                <div
                  className={`w-full h-[200px] py-3 px-2 rounded-[40px] text-white  bg-[#082784]  mx-auto text-sm z-10
                  ${hovered === 5 ? "opacity-100" : "opacity-0"}
                   absolute inset-0 flex flex-col justify-center items-center  bg-opacity-80    transition-opacity duration-300 ease-in-out
                    
                    `}
                >
                  {`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.`}
                </div>

                <img
                  src={LapTop}
                  alt="عکس پروژه 5"
                  className={`w-40  mx-auto ${
                    language === "en" ? "" : "transform scale-x-[-1]"
                  }`}
                />
                <div
                  className="mt-1 bg-clip-text text-transparent bg-gradient-to-r from-[#082784] to-[#FF5F6D] text-lg font-bold
                  screen990:text-base

                "
                >
                  {t("Name of the project")}
                </div>
              </div>
            </div>
          </div>
        </div>

        <ChildComponent activeIndex={activeIndex} language={language} />
      </div>
    </div>
  );
};

export default ParentComponent;
