import React, { useEffect, useState, useRef } from "react";
import { useSelector } from "react-redux";

import Img1Red from "../../../assets/desin-dev1-red.svg";
import Img1Blue from "../../../assets/desin-dev1-blue.svg";

import Img2Red from "../../../assets/design-UI-2-red.svg";
import Img2Blue from "../../../assets/desin-dev2-blue.svg";

import Img3Red from "../../../assets/design-UI-3-red.svg";
import Img3Blue from "../../../assets/desin-dev-3-blue.svg";

import Img4Red from "../../../assets/design-UI-4-red.svg";
import Img4Blue from "../../../assets/desin-dev-4-blue.svg";

import FirstChildDetails from "./first-child-details";
import SecondChild from "./second-child";
import ThirdChild from "./third-child";
import Line from "./line";
import Box from "./box";
import "./line.css";
import "./scroll.css";

import { useTranslation } from "react-i18next";

const ParentComponent = () => {
  const { t } = useTranslation();

  const containerRef = useRef(null);

  const [visible, setVisible] = useState(0);
  const _lang = useSelector((state) => state.lang);
  const [language, setLanguage] = useState();

  useEffect(() => {
    setLanguage(_lang);
  }, [setLanguage, _lang]);

  const [activeIndex, setActiveIndex] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [scrollLeftMax, setScrollLeftMax] = useState(0);

  const handleClick = (index) => {
    setVisible(index);
    setActiveIndex(index);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(0);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  const handleScroll = () => {
    if (containerRef.current) {
      setScrollLeft(containerRef.current.scrollLeft);
      setScrollLeftMax(containerRef.current.scrollLeftMax);
    }
  };

  useEffect(() => {
    const container = containerRef.current;

    if (container) {
      container.addEventListener("scroll", handleScroll);
      return () => container.removeEventListener("scroll", handleScroll);
    }
  }, [containerRef]);

  ///////////////////////////////////////////////////////////////

  const [windowSize, setWindowSize] = useState(getWindowSize());

  function getWindowSize() {
    const { innerWidth } = window;
    return { innerWidth };
  }

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  useEffect(() => {
    let value;

    if (language === "en" && windowSize.innerWidth >= 921) {
      const value =
        activeIndex !== 0
          ? activeIndex === 1
            ? "25%"
            : activeIndex === 2
            ? "52%"
            : "77%"
          : "0%";
      document.documentElement.style.setProperty("--current-index", value);
    }
    if (language === "en" && windowSize.innerWidth <= 920) {
      value = "2% ";
      document.documentElement.style.setProperty("--current-index", value);
    }
    if (language === "ar" && windowSize.innerWidth >= 921) {
      const value =
        activeIndex !== 0
          ? activeIndex === 1
            ? "52%"
            : activeIndex === 2
            ? "25%"
            : "0%"
          : "77%";
      document.documentElement.style.setProperty("--current-index", value);
    }
    if (language === "ar" && windowSize.innerWidth <= 920) {
      value = windowSize.innerWidth - 220;
      document.documentElement.style.setProperty("--current-index", value);
    }
  }, [activeIndex, language]);

  ///////////////////////////////////////////////////////////////

  return (
    <div
      style={{ direction: language === "ar" ? "rtl" : "ltr" }}
      className="w-full mx-auto mt-6 mb-24"
    >
      <div
        className="w-[55%] mx-auto 
        screen1700:w-[60%]
        screen1600:w-[65%]
        screen1500:w-[70%]
        screen1250:w-[75%] 
        screen1150:w-[80%]
        screen540:w-[90%]
        "
      >
        <Line
          scrollLeft={scrollLeft}
          scrollLeftMax={scrollLeftMax}
          activeIndex={activeIndex}
        />

     

        <div
          ref={containerRef}
          className=" divs grid grid-cols-4 gap-8 mx-auto  
            screen1400:gap-5
            screen1150:gap-4
            screen920: hide-scrollbar
            screen920:overflow-x-auto
            screen920:flex
            screen920:flex-row
            screen920:gap-7
            screen920:p-4
            screen540:px-1
            screen540:py-2
          "
        >
          <div onClick={() => handleClick(0)}>
            <FirstChildDetails
              img={activeIndex === 0 ? Img1Red : Img1Blue}
              hoveredImg={Img1Red}
              title={t("UI/UX Design")}
              active={activeIndex === 0}
            />
          </div>
          <div onClick={() => handleClick(1)}>
            <FirstChildDetails
              img={activeIndex === 1 ? Img2Red : Img2Blue}
              hoveredImg={Img2Red}
              title={t("Desktop Development")}
              active={activeIndex === 1}
            />
          </div>
          <div onClick={() => handleClick(2)}>
            <FirstChildDetails
              img={activeIndex === 2 ? Img3Red : Img3Blue}
              hoveredImg={Img3Red}
              title={t("Mobile Development")}
              active={activeIndex === 2}
            />
          </div>
          <div onClick={() => handleClick(3)}>
            <FirstChildDetails
              img={activeIndex === 3 ? Img4Red : Img4Blue}
              hoveredImg={Img4Red}
              title={t("Web Development")}
              active={activeIndex === 3}
            />
          </div>
        </div>

        <Box visible={visible} />
      </div>

      <SecondChild visible={visible} />

      <ThirdChild visible={visible} />
    </div>
  );
};

export default ParentComponent;
