import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import "./box.css";

import { useTranslation } from "react-i18next";
const Box = ({ visible }) => {
  const { t } = useTranslation();

  const _lang = useSelector((state) => state.lang);
  const [language, setLanguage] = useState();

  useEffect(() => {
    setLanguage(_lang);
  }, [setLanguage, _lang]);

  const content = [
    t("Network Installation Box"),
    t("Network Security Box"),
    t("Network Support Box"),
    t("VoIP Services Box"),
  ];
  return (
    <div>
      {content?.map((text, index) => (
        <div
          key={index}
          className={`containerNet ${visible !== index && "hidden"}`}
        >
          <div
            style={{ direction: language === "ar" ? "rtl" : "ltr" }}
            className={`boxNet ${visible === index ? "visible" : ""}`}
          >
            {visible === index && <span className="textNet">{text}</span>}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Box;
