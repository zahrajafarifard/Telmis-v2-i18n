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
    t("UI/UX design Box"),
    t("Desktop Development Box"),
    t("Mobile Development Box"),
    t("Web Development Box"),
  ];

  return (
    <div>
      {content?.map((text, index) => (
        <div
          key={index}
          className={`container ${visible !== index && "hidden"}`}
        >
          <div
            style={{ direction: language === "ar" ? "rtl" : "ltr" }}
            className={`box ${visible === index ? "visible" : ""}`}
          >
            {visible === index && <span className="text">{text}</span>}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Box;
