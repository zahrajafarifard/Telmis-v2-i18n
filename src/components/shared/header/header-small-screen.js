import React, { useState, useEffect } from "react";

import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

import Logo from "../../../assets/logo-menu.png";
import Menu from "../../../assets/menu.svg";
import Close from "../../../assets/close-menu.svg";
import LanguageToggle from "./switch-button";

import { NavLink, useLocation } from "react-router-dom";

import ArrowDown from "../../../assets/keyboard_arrow_down.svg";
// import Serv1 from "../../../assets/menu-serv1.svg";
// import Serv2 from "../../../assets/menu-serv2.svg";
// import Proj from "../../../assets/menu-proj.svg";

import LinkedIn from "../../../assets/linkedIn.svg";
import WhatsApp from "../../../assets/whatsApp.svg";
import Insta from "../../../assets/insta.svg";

const HeaderSmallScreen = ({ onShowMen }) => {
  const { t } = useTranslation();

  const _lang = useSelector((state) => state.lang);
  const [language, setLanguage] = useState();

  useEffect(() => {
    setLanguage(_lang);
  }, [setLanguage, _lang]);

  const [showMenu, setShowMenu] = useState(false);

  const location = useLocation();

  const [showServices, setShowServices] = useState(false);
  const [showProjects, setShowProjects] = useState(false);

  return (
    <div className="w-full mx-auto">
      <div className="flex flex-row justify-between w-full mx-auto  px-5 py-4">
        <div>
          <img src={Logo} className=" w-full h-8 " alt="لوگو" />
        </div>
        <div className="flex flex-row">
          <div>
            <LanguageToggle />
          </div>
          <div
            onClick={() => {
              setShowMenu((prev) => !prev);
              onShowMen((prev) => !prev);
            }}
            className="ml-4"
          >
            <img src={!showMenu ? Menu : Close} className="w-8 h-8" />
          </div>
        </div>
      </div>

      <div
        className={`fixed top-0 left-0 w-full h-screen transition duration-1000 ease-in-out  ${
          showMenu
            ? "-translate-y-0 bg-opacity-90 bg-[#EAEEFF] menu top-16"
            : "-translate-y-full"
        }`}
      >
        {showMenu && (
          <>
            <ul
              style={{ direction: language === "ar" ? "rtl" : "ltr" }}
              className="flex flex-col p-5  w-full h-screen text-[#252B2B] "
            >
              <li
                onClick={() => {
                  setShowProjects(false);
                  setShowServices(false);
                  setShowMenu(false);
                }}
                className={` px-2 ${
                  location.pathname === "/" &&
                  (language === "ar"
                    ? " border-r-2  border-r-[#E13D74]  "
                    : " border-l-2  border-l-[#E13D74]  ")
                }`}
              >
                <NavLink to="/">{t("Home")}</NavLink>
              </li>

              <li
                onClick={() => {
                  setShowProjects(false);
                  setShowServices((prev) => !prev);
                }}
                className={"my-4"}
              >
                <span className={"flex flex-row  justify-between"}>
                  <div
                    className={` px-2 ${
                      location.pathname.includes("/services/") &&
                      (language === "ar"
                        ? " border-r-2  border-r-[#E13D74]  "
                        : " border-l-2  border-l-[#E13D74]  ")
                    }`}
                  >
                    {t("Services")}
                  </div>
                  <span className=" ">
                    <img
                      src={ArrowDown}
                      className=" w-5 h-5 "
                      alt="فلش پایین"
                    />
                  </span>
                </span>

                {showServices && (
                  <div>
                    <NavLink
                      to="/services/design-develop"
                      className={({ isActive }) => (isActive ? "" : "")}
                    >
                      <div
                        onClick={() => {
                          setShowMenu(false);
                        }}
                        className="flex flex-row pl-4 py-4 text-sm text-[#555858] "
                      >
                        {t("Design & Develop")}
                      </div>
                    </NavLink>
                    <NavLink
                      to="/services/network"
                      className={({ isActive }) => (isActive ? "" : "")}
                    >
                      <div
                        onClick={() => {
                          setShowMenu(false);
                        }}
                        className="flex flex-row pl-4  text-sm text-[#555858] "
                      >
                        {t("Network")}
                      </div>
                    </NavLink>
                  </div>
                )}
              </li>

              <li
                onClick={() => {
                  setShowServices(false);
                  setShowProjects((prev) => !prev);
                }}
              >
                <span className="flex flex-row  justify-between ">
                  <div
                    className={` px-2 ${
                      location.pathname.includes("/projects/") &&
                      (language === "ar"
                        ? " border-r-2  border-r-[#E13D74]  "
                        : " border-l-2  border-l-[#E13D74]  ")
                    }`}
                  >
                    {t("Projects")}
                  </div>
                  <span className=" ">
                    <img
                      src={ArrowDown}
                      className=" w-5 h-5 "
                      alt="فلش پایین"
                    />
                  </span>
                </span>

                {showProjects && (
                  <div>
                    <NavLink
                      to="/projects/design-develop"
                      className={({ isActive }) => (isActive ? "" : "")}
                    >
                      <div
                        onClick={() => {
                          setShowMenu(false);
                        }}
                        className="flex flex-row px-3 py-4 pl-4 text-sm text-[#555858] "
                      >
                        {t("Design & Develop projects")}
                      </div>
                    </NavLink>
                    <NavLink
                      to="/projects/network"
                      className={({ isActive }) => (isActive ? "" : "")}
                    >
                      <div
                        onClick={() => {
                          setShowMenu(false);
                        }}
                        className="flex flex-row px-3 pl-4 text-sm text-[#555858]"
                      >
                        {t("Network projects")}
                      </div>
                    </NavLink>
                  </div>
                )}
              </li>

              <li
                onClick={() => {
                  setShowMenu(false);

                  setShowProjects(false);
                  setShowServices(false);
                }}
              >
                <NavLink to="/about-us">
                  <div
                    className={`px-2 my-4 
                 ${
                   location.pathname === "/about-us" &&
                   (language === "ar"
                     ? " border-r-2  border-r-[#E13D74]  "
                     : " border-l-2  border-l-[#E13D74]  ")
                 }
                `}
                  >
                    {t("About Us")}
                  </div>
                </NavLink>
              </li>
              <li
                onClick={() => {
                  setShowMenu(false);

                  setShowProjects(false);
                  setShowServices(false);
                }}
              >
                <NavLink to="/contact-us">
                  <div
                    className={`px-2 ${
                      location.pathname === "/contact-us" &&
                      (language === "ar"
                        ? " border-r-2  border-r-[#E13D74]  "
                        : " border-l-2  border-l-[#E13D74]  ")
                    } `}
                  >
                    {t("Contact Us")}
                  </div>
                </NavLink>
              </li>
            </ul>

            <div
              className={`flex flex-row px-4  fixed bottom-20  
                ${
                  language === "ar"
                    ? "float-left left-0"
                    : "float-right right-0 "
                }
                `}
            >
              <div className="bg-gradient-to-tr to-[#082784] from-[#FF5F6D] rounded-full w-8 h-8 flex items-center justify-center">
                <img src={Insta} className=" " alt="آیکن اینستاگرام" />
              </div>
              <div className="mx-2 bg-gradient-to-tr to-[#082784] from-[#FF5F6D] rounded-full w-8 h-8 flex items-center justify-center">
                <img src={LinkedIn} alt="آیکن لینکداین" />
              </div>
              <div className="bg-gradient-to-tr to-[#082784] from-[#FF5F6D] rounded-full w-8 h-8 flex items-center justify-center">
                <img src={WhatsApp} alt="آیکن واتس اپ" />
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default HeaderSmallScreen;
