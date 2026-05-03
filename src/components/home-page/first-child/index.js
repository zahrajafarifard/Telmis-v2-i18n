import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

import FirstChildDetails from "./first-child-details";
import Img1 from "../../../assets/media.png";
import Img2 from "../../../assets/media-1.png";
import Img3 from "../../../assets/media-2.png";
import Img4 from "../../../assets/media-3.png";
import Img5 from "../../../assets/media-4.png";

import "./style.css";

const FirstChild = () => {
  const { t } = useTranslation();

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  let profits = [
    <FirstChildDetails
      img={Img1}
      title={t("profit1")}
      text={t("profit1Text")}
      index={0}
    />,
    <FirstChildDetails
      img={Img2}
      title={t("profit2")}
      text={t("profit2Text")}
      index={1}
    />,
    <FirstChildDetails
      img={Img3}
      title={t("profit3")}
      text={t("profit3Text")}
      index={2}
    />,
    <FirstChildDetails
      img={Img4}
      title={t("profit4")}
      text={t("profit4Text")}
      index={3}
    />,
    <FirstChildDetails
      img={Img5}
      title={t("profit5")}
      text={t("profit5Text")}
      index={4}
    />,
  ];

  return (
    <div
      className={`flex flex-row justify-between w-[81%] mx-auto pt-16
        screen1500:w-[84%]
      `}
    >
      {windowWidth > 1200 ? (
        profits
      ) : (
        <div className="carousel">
          <div className="carousel-track">
            {profits?.concat(profits)?.map((image, index) => {
              return (
                <div key={index} className="carousel-item">
                  {image}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default FirstChild;
