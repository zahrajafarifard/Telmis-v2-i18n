import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

import Logo from "../../../assets/logo-menu.png";
import LinkedIn from "../../../assets/linkedIn.svg";
import WhatsApp from "../../../assets/whatsApp.svg";
import Insta from "../../../assets/insta.svg";
import Toggle from "./switch-button";

import ArrowDown from "../../../assets/keyboard_arrow_down.svg";
import Serv1 from "../../../assets/menu-serv1.svg";
import Serv1Hovered from "../../../assets/menu-hover-serv-dev.svg";
import Serv2 from "../../../assets/menu-serv2.svg";
import Serv2Hovered from "../../../assets/menu-hover-serv-net.svg";
// import Proj from "../../../assets/menu-proj.svg";

const Header = () => {
  const { t } = useTranslation();
  const location = useLocation();

  const [hoveredItem, setHoveredItem] = useState(0);

  const [showServices, setShowServices] = useState(false);
  const [showProjects, setShowProjects] = useState(false);

  const _lang = useSelector((state) => state.lang);
  const [language, setLanguage] = useState();

  useEffect(() => {
    setLanguage(_lang);
  }, [setLanguage, _lang]);

  return (
    <div
      className={` 
      ${language === "ar" ? "font-Almarai" : "font-Lato"}
    `}
    >
      {(showProjects || showServices) && (
        <div
          className="w-full h-screen fixed top-0 left-0 -z-20 "
          onClick={() => {
            setShowProjects(false);
            setShowServices(false);
          }}
        />
      )}
      <div
        style={{ direction: language === "en" ? "ltr" : "rtl" }}
        className="w-[80%] mx-auto flex flex-row py-5 "
      >
        <div
          className="w-2/3 mx-auto flex flex-row 
          screen990:w-[90%]
          "
        >
          <img
            src={Logo}
            className="my-auto w-24 h-8
            screen990:w-20
            screen990:h-7
            "
            alt="لوگو"
          />

          <ul
            className={`flex flex-row my-auto w-[60%] justify-between  h-8 screen780:w-[73%]  screen990:h-7
              screen1230:w-[70%]
              screen990:text-sm
              screen850:text-[13px]
              ${
                language === "ar"
                  ? "mr-20 screen1230:mr-10 screen990:mr-6"
                  : "ml-20 screen1230:ml-10 screen990:ml-6"
              }

          `}
          >
            <li
              onClick={() => {
                setShowProjects(false);
                setShowServices(false);
              }}
              className=" "
            >
              <NavLink to="/">{t("Home")}</NavLink>

              {location.pathname === "/" && (
                <div className="w-[65%] mx-auto border-b-[#E13D74] border-b-2 rounded-xl mt-1"></div>
              )}
            </li>

            <li
              onClick={() => {
                setShowProjects(false);
                setShowServices((prev) => !prev);
              }}
              className=" relative"
            >
              <span className="flex flex-row my-auto">
                <div>
                  {t("Services")}
                  {location.pathname.includes("/services/") &&
                    !showServices && (
                      <div className="w-[65%] mx-auto border-b-[#E13D74] border-b-2 rounded-full mt-1"></div>
                    )}
                </div>
                <span className="mt-1.5 screen990:mt-1 screen850:mt-0.5">
                  <img
                    src={ArrowDown}
                    className=" w-4 h-4 my-auto"
                    alt="فلش پایین"
                  />
                </span>
              </span>

              {showServices && (
                <div className="grid absolute bg-white  w-48 top-8 z-50 rounded-md py-1.5">
                  <NavLink
                    to="/services/design-develop"
                    className={({ isActive }) => (isActive ? "" : "")}
                  >
                    <div
                      onMouseEnter={() => setHoveredItem(1)}
                      onMouseLeave={() => setHoveredItem(0)}
                      className="flex flex-row px-3 py-2 hover:bg-[#eaeeff]"
                    >
                      {hoveredItem === 1 ? (
                        <img
                          src={Serv1Hovered}
                          className="w-5 h-5 my-auto mx-2"
                          alt="آیکن طراحی"
                        />
                      ) : (
                        <img
                          src={Serv1}
                          className="w-5 h-5 my-auto mx-2"
                          alt="آیکن طراحی"
                        />
                      )}
                      {t("Design & Develop")}
                    </div>
                  </NavLink>
                  <NavLink
                    to="/services/network"
                    className={({ isActive }) => (isActive ? "" : "")}
                  >
                    <div
                      onMouseEnter={() => setHoveredItem(2)}
                      onMouseLeave={() => setHoveredItem(0)}
                      className="flex flex-row px-3 py-2 hover:bg-[#eaeeff]"
                    >
                      {hoveredItem === 2 ? (
                        <img
                          src={Serv2Hovered}
                          className="w-5 h-5 my-auto mx-2"
                          alt="آیکن شبکه"
                        />
                      ) : (
                        <img
                          src={Serv2}
                          className="w-5 h-5 my-auto mx-2"
                          alt="آیکن شبکه"
                        />
                      )}
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
              className=" relative"
            >
              <span className="flex flex-row my-auto">
                <div>
                  {t("Projects")}
                  {location.pathname.includes("/projects/") &&
                    !showProjects && (
                      <div className="w-[65%]  mx-auto border-b-[#E13D74] border-b-2 rounded-full mt-1"></div>
                    )}
                </div>
                <span className="mt-1.5 screen990:mt-1 screen850:mt-0.5">
                  <img
                    src={ArrowDown}
                    className=" w-4 h-4 my-auto"
                    alt="فلش پایین"
                  />
                </span>
              </span>

              {showProjects && (
                <div className="grid absolute bg-white  w-64 top-8 z-50 rounded-md py-1.5">
                  <NavLink
                    to="/projects/design-develop"
                    className={({ isActive }) => (isActive ? "" : "")}
                  >
                    <div
                      onMouseEnter={() => setHoveredItem(3)}
                      onMouseLeave={() => setHoveredItem(0)}
                      className="flex flex-row px-3 py-2 hover:bg-[#eaeeff]"
                    >
                      {hoveredItem === 3 ? (
                        <img
                          src={Serv1Hovered}
                          className="w-5 h-5 my-auto mx-2"
                          alt="آیکن طراحی"
                        />
                      ) : (
                        <img
                          src={Serv1}
                          className="w-5 h-5 my-auto mx-2"
                          alt="آیکن طراحی"
                        />
                      )}
                      {t("Design & Develop projects")}
                    </div>
                  </NavLink>
                  <NavLink
                    to="/projects/network"
                    className={({ isActive }) => (isActive ? "" : "")}
                  >
                    <div
                      onMouseEnter={() => setHoveredItem(4)}
                      onMouseLeave={() => setHoveredItem(0)}
                      className="flex flex-row px-3 py-2 hover:bg-[#eaeeff]"
                    >
                      {hoveredItem === 4 ? (
                        <img
                          src={Serv2Hovered}
                          className="w-5 h-5 my-auto mx-2"
                          alt="آیکن شبکه"
                        />
                      ) : (
                        <img
                          src={Serv2}
                          className="w-5 h-5 my-auto mx-2"
                          alt="آیکن شبکه"
                        />
                      )}
                      {t("Network projects")}
                    </div>
                  </NavLink>
                </div>
              )}
            </li>

            <li
              onClick={() => {
                setShowProjects(false);
                setShowServices(false);
              }}
            >
              <NavLink to="/about-us">
                <div>
                  {t("About Us")}
                  {location.pathname === "/about-us" && (
                    <div className="w-[65%]  mx-auto border-b-[#E13D74] border-b-2 rounded-full mt-1"></div>
                  )}
                </div>
              </NavLink>
            </li>
            <li
              onClick={() => {
                setShowProjects(false);
                setShowServices(false);
              }}
            >
              <NavLink to="/contact-us">
                <div>
                  {t("Contact Us")}
                  {location.pathname === "/contact-us" && (
                    <div className="w-[65%]  mx-auto border-b-[#E13D74] border-b-2 mt-1"></div>
                  )}
                </div>
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="w-1/3 mx-auto">
          <div className="flex flex-row justify-end ">
            <Toggle />
            <div
              className={`flex flex-row  justify-between   
                ${
                  language === "ar"
                    ? "mr-10 screen990:mr-4"
                    : "ml-10 screen990:ml-4"
                }
            `}
            >
              <div
                className="bg-gradient-to-tr to-[#082784] from-[#FF5F6D] rounded-full w-8 h-8 flex items-center justify-center
              hover:shadow-[rgba(185,79,115,1)_0px_0px_8px_-1px] 
              active:shadow-[rgba(185,79,115,0.4)_0px_0px_8px_-1px] 
              "
              >
                <img src={Insta} className=" " alt="آیکن اینستاگرام" />
              </div>
              <div
                className="mx-2 screen850:mx-1 bg-gradient-to-tr to-[#082784] from-[#FF5F6D] rounded-full w-8 h-8 flex items-center justify-center
             hover:shadow-[rgba(185,79,115,1)_0px_0px_8px_-1px] 
              active:shadow-[rgba(185,79,115,0.4)_0px_0px_8px_-1px] 
              "
              >
                <img src={LinkedIn} alt="آیکن لینکداین" />
              </div>
              <div
                className="bg-gradient-to-tr to-[#082784] from-[#FF5F6D] rounded-full w-8 h-8 flex items-center justify-center
             hover:shadow-[rgba(185,79,115,1)_0px_0px_8px_-1px] 
              active:shadow-[rgba(185,79,115,0.4)_0px_0px_8px_-1px] 

              
              "
              >
                <img src={WhatsApp} alt="آیکن واتس اپ" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
