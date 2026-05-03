import React from "react";
import { useTranslation } from "react-i18next";

import Client from "../../../assets/client.png";
import LapTop2 from "../../../assets/proj-laptop.svg";
import QuoteIcn from "../../../assets/quote icon.svg";
import LapTopImg from "../../../assets/home-laptop.png";
// import Iphone from "../../../assets/iPhone 12 Pro.png";

const ChildComponent = ({ activeIndex, language }) => {
  const { t } = useTranslation();
  return (
    <>
      {activeIndex === 0 && (
        <div
          className="w-[70%] mx-auto
          screen1320:w-[72%]
          screen990:w-[90%]
        "
        >
          <div
            className="bg-gradient-to-r from-[#2B2E7F] to-[#C25173] rounded-[40px] text-white py-8 px-10
            screen990:flex-col-reverse"
          >
            <h1
              className="text-4xl font-bold pb-6 text-start
                screen1250:text-3xl
                screen1150:text-2xl
                "
            >
              {t("platform's Name")}
            </h1>
            <div
              className="w-full mx-auto flex flex-row 
                screen750:flex-col-reverse
              "
            >
              <div
                className="w-[70%] mx-auto text-start my-auto
                  screen990:w-full
                "
              >
                <h4 className="pb-10  w-3/4 screen1250:w-[90%]  screen990:w-[95%]  text-lg  screen1280:text-base ">
                  {t("platform's Text")}
                </h4>
              </div>

              <div className="w-[30%] mx-auto my-auto screen1250:w-[50%] screen990:w-[70%]  ">
                <img
                  alt="عکس پروژه"
                  src={LapTopImg}
                  className={`w-[100%]  mx-auto my-auto ${
                    language === "en" ? "" : "transform scale-x-[-1] "
                  }`}
                />
              </div>
            </div>

            <div className="text-start flex flex-wrap justify-start gap-5 screen1250:gap-1 screen1600:gap-2 ">
              <span
                className="bg-[#AC4C75] rounded-full text-white px-6 py-1.5 
                  screen1230:px-4 screen1230:text-sm
                "
              >
                {t("UI/UX design")}
              </span>
              <span
                className="bg-[#AC4C75] rounded-full text-white px-6 py-1.5 
                  screen1230:px-4 screen1230:text-sm 
                "
              >
                {t("Web design")}
              </span>
              <span
                className="bg-[#AC4C75] rounded-full text-white px-6 py-1.5 
                  screen1230:px-4 screen1230:text-sm 
                "
              >
                {t("Responsive design")}
              </span>
            </div>
          </div>
          <div className="text-justify my-16">
            <div className="text-[#AC4C75] font-bold text-lg">
              {t("The situation")}
            </div>
            <div className="my-6 text-2xl font-[500] text-[#252B2B]">
              Lorem ipsum dolor sit amet
            </div>
            <div
              className="text-lg font-[400] text-[#252B2B] whitespace-pre-line
                screen1320:text-base
              "
            >
              {`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`}
            </div>
          </div>

          <div className="text-justify my-16">
            <div className="text-[#AC4C75] font-bold text-lg">
              {t("The solution")}
            </div>
            <div className="my-6 text-2xl font-[500] text-[#252B2B]">
              Lorem ipsum dolor sit amet
            </div>
            <div
              className="text-lg font-[400] text-[#252B2B] whitespace-pre-line
                screen1320:text-base
              "
            >
              {`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`}
            </div>
          </div>

          <div>
            <div className="w-full mx-auto text-justify">
              <div className="text-[#AC4C75] font-bold text-lg">
                {t("The results")}
              </div>
              <div className="mt-6 mb-12 text-2xl font-[500] text-[#252B2B]">
                Lorem ipsum dolor sit amet
              </div>
              <div className="flex flex-row screen1250:flex-col-reverse">
                <div
                  className="w-[50%] mx-auto  text-lg font-[400] text-[#252B2B] whitespace-pre-line
                  screen1320:text-base
                  screen1250:w-full
                "
                >
                  {`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. `}
                </div>
                <div className="w-[50%] mx-auto my-auto screen1250:w-[75%]  screen990:w-full">
                  <img
                    alt="عکس پروژه 1"
                    src={LapTop2}
                    className="w-[80%] mx-auto "
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#AC4C75] rounded-[40px]  text-white p-8 text-justify mt-16">
            <div className="flex flex-row justify-between">
              <div className="flex flex-row">
                <div>
                  <img alt="عکس مشتری 1" src={Client} className="w-10" />
                </div>
                <div>
                  <div className="text-start text-xl font-bold px-2">
                    Michael Scott
                  </div>
                  <div className="text-start text-xs text-[#EAF2FE] px-2 ">
                    CEO, Dunder Mifflin
                  </div>
                </div>
              </div>

              <div className=" ">
                <img alt="آیکن کوتیشن" src={QuoteIcn} className="w-10 h-8" />
              </div>
            </div>
            <div className="pt-10">
              "Working with this team was a game-changer for our business. Their
              network solutions are top-notch and their support is unparalleled.
              From the initial consultation to the ongoing maintenance, their
              professionalism and expertise have been evident every step of the
              way. They have significantly improved our network performance and
              security, allowing us to focus more on our core business
              activities without worrying about technical issues."
            </div>
          </div>
        </div>
      )}
      {activeIndex === 1 && (
        <div
          className="w-[70%] mx-auto
        screen1320:w-[72%]
          screen990:w-[90%]
        "
        >
          <div
            className="bg-gradient-to-r from-[#2B2E7F] to-[#C25173] rounded-[40px] text-white py-8 px-10
            screen990:flex-col-reverse"
          >
            <h1
              className="text-4xl font-bold pb-6 text-start
                  screen1250:text-3xl
                screen1150:text-2xl
              "
            >
              {t("platform's Name")}
            </h1>
            <div
              className="w-full mx-auto flex flex-row 

              screen750:flex-col-reverse
          "
            >
              <div
                className="w-[70%] mx-auto text-start my-auto
              screen990:w-full
            "
              >
                <h4 className="pb-10 w-3/4 screen1250:w-[90%]  screen990:w-[95%] text-lg screen1280:text-base ">
                  {t("platform's Text")}
                </h4>
              </div>

              <div className="w-[30%] mx-auto my-auto screen1250:w-[50%] screen990:w-[70%]  ">
                <img
                  alt="عکس پروژه 1"
                  src={LapTopImg}
                  className={`w-[100%]  mx-auto my-auto ${
                    language === "en" ? "" : "transform scale-x-[-1]"
                  }`}
                />
              </div>
            </div>

            <div
              className="text-start flex flex-wrap justify-start gap-5
            "
            >
              <span
                className="bg-[#AC4C75] rounded-full text-white px-6 py-1.5 
                  screen1230:px-4 screen1230:text-sm
                "
              >
                {t("UI/UX design")}
              </span>
              <span
                className="bg-[#AC4C75] rounded-full text-white px-6 py-1.5 
                  screen1230:px-4 screen1230:text-sm 
                  

                "
              >
                {t("Web design")}
              </span>
              <span
                className="bg-[#AC4C75] rounded-full text-white px-6 py-1.5 
                  screen1230:px-4 screen1230:text-sm 
                "
              >
                {t("Responsive design")}
              </span>
            </div>
          </div>
          <div className="text-justify my-16">
            <div className="text-[#AC4C75] font-bold text-lg">
              {t("The situation")}
            </div>
            <div className="my-6 text-2xl font-[500] text-[#252B2B]">
              Lorem ipsum dolor sit amet
            </div>
            <div
              className="text-lg font-[400] text-[#252B2B] whitespace-pre-line
            screen1320:text-base
            "
            >
              {`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`}
            </div>
          </div>

          <div className="text-justify my-16">
            <div className="text-[#AC4C75] font-bold text-lg">
              {t("The solution")}
            </div>
            <div className="my-6 text-2xl font-[500] text-[#252B2B]">
              Lorem ipsum dolor sit amet
            </div>
            <div
              className="text-lg font-[400] text-[#252B2B] whitespace-pre-line
            screen1320:text-base
            
            "
            >
              {`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`}
            </div>
          </div>

          <div>
            <div className="w-full mx-auto text-justify">
              <div className="text-[#AC4C75] font-bold text-lg">
                {t("The results")}
              </div>
              <div className="mt-6 mb-12 text-2xl font-[500] text-[#252B2B]">
                Lorem ipsum dolor sit amet
              </div>
              <div className="flex flex-row screen1250:flex-col-reverse">
                <div
                  className="w-[50%] mx-auto  text-lg font-[400] text-[#252B2B] whitespace-pre-line
                  screen1320:text-base
                  screen1250:w-full
                "
                >
                  {`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. `}
                </div>
                <div className="w-[50%] mx-auto my-auto screen1250:w-[75%]  screen990:w-full">
                  <img
                    alt="عکس پروژه 1"
                    src={LapTop2}
                    className="w-[80%] mx-auto "
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#AC4C75] rounded-[40px]  text-white p-8 text-justify mt-16">
            <div className="flex flex-row justify-between">
              <div className="flex flex-row">
                <div>
                  <img alt="عکس مشتری 1" src={Client} className="w-10" />
                </div>
                <div>
                  <div className="text-start text-xl font-bold px-2">
                    Michael Scott
                  </div>
                  <div className="text-start text-xs text-[#EAF2FE] px-2 ">
                    CEO, Dunder Mifflin
                  </div>
                </div>
              </div>

              <div className=" ">
                <img alt="آیکن کوتیشن" src={QuoteIcn} className="w-10 h-8" />
              </div>
            </div>
            <div className="pt-10">
              "Working with this team was a game-changer for our business. Their
              network solutions are top-notch and their support is unparalleled.
              From the initial consultation to the ongoing maintenance, their
              professionalism and expertise have been evident every step of the
              way. They have significantly improved our network performance and
              security, allowing us to focus more on our core business
              activities without worrying about technical issues."
            </div>
          </div>
        </div>
      )}
      {activeIndex === 2 && (
        <div
          className="w-[70%] mx-auto
        screen1320:w-[72%]
          screen990:w-[90%]
        "
        >
          <div
            className="bg-gradient-to-r from-[#2B2E7F] to-[#C25173] rounded-[40px] text-white py-8 px-10
            screen990:flex-col-reverse"
          >
            <h1
              className="text-4xl font-bold pb-6 text-start
                  screen1250:text-3xl
                screen1150:text-2xl
              "
            >
              {t("platform's Name")}
            </h1>
            <div
              className="w-full mx-auto flex flex-row 

              screen750:flex-col-reverse
          "
            >
              <div
                className="w-[70%] mx-auto text-start my-auto
              screen990:w-full
            "
              >
                <h4 className="pb-10 w-3/4 screen1250:w-[90%]  screen990:w-[95%] text-lg screen1280:text-base ">
                  {t("platform's Text")}
                </h4>
              </div>

              <div className="w-[30%] mx-auto my-auto screen1250:w-[50%] screen990:w-[70%]  ">
                <img
                  alt="عکس پروژه 1"
                  src={LapTopImg}
                  className={`w-[100%]  mx-auto my-auto ${
                    language === "en" ? "" : "transform scale-x-[-1]"
                  }`}
                />
              </div>
            </div>

            <div
              className="text-start flex flex-wrap justify-start gap-5
            "
            >
              <span
                className="bg-[#AC4C75] rounded-full text-white px-6 py-1.5 
                  screen1230:px-4 screen1230:text-sm
                "
              >
                {t("UI/UX design")}
              </span>
              <span
                className="bg-[#AC4C75] rounded-full text-white px-6 py-1.5 
                  screen1230:px-4 screen1230:text-sm 
                  

                "
              >
                {t("Web design")}
              </span>
              <span
                className="bg-[#AC4C75] rounded-full text-white px-6 py-1.5 
                  screen1230:px-4 screen1230:text-sm 
                "
              >
                {t("Responsive design")}
              </span>
            </div>
          </div>
          <div className="text-justify my-16">
            <div className="text-[#AC4C75] font-bold text-lg">
              {t("The situation")}
            </div>
            <div className="my-6 text-2xl font-[500] text-[#252B2B]">
              Lorem ipsum dolor sit amet
            </div>
            <div
              className="text-lg font-[400] text-[#252B2B] whitespace-pre-line
            screen1320:text-base
            "
            >
              {`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`}
            </div>
          </div>

          <div className="text-justify my-16">
            <div className="text-[#AC4C75] font-bold text-lg">
              {t("The solution")}
            </div>
            <div className="my-6 text-2xl font-[500] text-[#252B2B]">
              Lorem ipsum dolor sit amet
            </div>
            <div
              className="text-lg font-[400] text-[#252B2B] whitespace-pre-line
            screen1320:text-base
            
            "
            >
              {`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`}
            </div>
          </div>

          <div>
            <div className="w-full mx-auto text-justify">
              <div className="text-[#AC4C75] font-bold text-lg">
                {t("The results")}
              </div>
              <div className="mt-6 mb-12 text-2xl font-[500] text-[#252B2B]">
                Lorem ipsum dolor sit amet
              </div>
              <div className="flex flex-row screen1250:flex-col-reverse">
                <div
                  className="w-[50%] mx-auto  text-lg font-[400] text-[#252B2B] whitespace-pre-line
                  screen1320:text-base
                  screen1250:w-full
                "
                >
                  {`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. `}
                </div>
                <div className="w-[50%] mx-auto my-auto screen1250:w-[75%]  screen990:w-full">
                  <img
                    alt="عکس پروژه 1"
                    src={LapTop2}
                    className="w-[80%] mx-auto "
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#AC4C75] rounded-[40px]  text-white p-8 text-justify mt-16">
            <div className="flex flex-row justify-between">
              <div className="flex flex-row">
                <div>
                  <img alt="عکس مشتری 1" src={Client} className="w-10" />
                </div>
                <div>
                  <div className="text-start text-xl font-bold px-2">
                    Michael Scott
                  </div>
                  <div className="text-start text-xs text-[#EAF2FE] px-2 ">
                    CEO, Dunder Mifflin
                  </div>
                </div>
              </div>

              <div className=" ">
                <img alt="آیکن کوتیشن" src={QuoteIcn} className="w-10 h-8" />
              </div>
            </div>
            <div className="pt-10">
              "Working with this team was a game-changer for our business. Their
              network solutions are top-notch and their support is unparalleled.
              From the initial consultation to the ongoing maintenance, their
              professionalism and expertise have been evident every step of the
              way. They have significantly improved our network performance and
              security, allowing us to focus more on our core business
              activities without worrying about technical issues."
            </div>
          </div>
        </div>
      )}
      {activeIndex === 3 && (
        <div
          className="w-[70%] mx-auto
        screen1320:w-[72%]
          screen990:w-[90%]
        "
        >
          <div
            className="bg-gradient-to-r from-[#2B2E7F] to-[#C25173] rounded-[40px] text-white py-8 px-10
            screen990:flex-col-reverse"
          >
            <h1
              className="text-4xl font-bold pb-6 text-start
                  screen1250:text-3xl
                screen1150:text-2xl
              "
            >
              {t("platform's Name")}
            </h1>
            <div
              className="w-full mx-auto flex flex-row 

              screen750:flex-col-reverse
          "
            >
              <div
                className="w-[70%] mx-auto text-start my-auto
              screen990:w-full
            "
              >
                <h4 className="pb-10 w-3/4 screen1250:w-[90%]  screen990:w-[95%] text-lg screen1280:text-base ">
                  {t("platform's Text")}
                </h4>
              </div>

              <div className="w-[30%] mx-auto my-auto screen1250:w-[50%] screen990:w-[70%]  ">
                <img
                  alt="عکس پروژه 1"
                  src={LapTopImg}
                  className={`w-[100%]  mx-auto my-auto ${
                    language === "en" ? "" : "transform scale-x-[-1]"
                  }`}
                />
              </div>
            </div>

            <div
              className="text-start flex flex-wrap justify-start gap-5
            "
            >
              <span
                className="bg-[#AC4C75] rounded-full text-white px-6 py-1.5 
                  screen1230:px-4 screen1230:text-sm
                "
              >
                {t("UI/UX design")}
              </span>
              <span
                className="bg-[#AC4C75] rounded-full text-white px-6 py-1.5 
                  screen1230:px-4 screen1230:text-sm 
                  

                "
              >
                {t("Web design")}
              </span>
              <span
                className="bg-[#AC4C75] rounded-full text-white px-6 py-1.5 
                  screen1230:px-4 screen1230:text-sm 
                "
              >
                {t("Responsive design")}
              </span>
            </div>
          </div>
          <div className="text-justify my-16">
            <div className="text-[#AC4C75] font-bold text-lg">
              {t("The situation")}
            </div>
            <div className="my-6 text-2xl font-[500] text-[#252B2B]">
              Lorem ipsum dolor sit amet
            </div>
            <div
              className="text-lg font-[400] text-[#252B2B] whitespace-pre-line
            screen1320:text-base
            "
            >
              {`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`}
            </div>
          </div>

          <div className="text-justify my-16">
            <div className="text-[#AC4C75] font-bold text-lg">
              {t("The solution")}
            </div>
            <div className="my-6 text-2xl font-[500] text-[#252B2B]">
              Lorem ipsum dolor sit amet
            </div>
            <div
              className="text-lg font-[400] text-[#252B2B] whitespace-pre-line
            screen1320:text-base
            
            "
            >
              {`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`}
            </div>
          </div>

          <div>
            <div className="w-full mx-auto text-justify">
              <div className="text-[#AC4C75] font-bold text-lg">
                {t("The results")}
              </div>
              <div className="mt-6 mb-12 text-2xl font-[500] text-[#252B2B]">
                Lorem ipsum dolor sit amet
              </div>
              <div className="flex flex-row screen1250:flex-col-reverse">
                <div
                  className="w-[50%] mx-auto  text-lg font-[400] text-[#252B2B] whitespace-pre-line
                  screen1320:text-base
                  screen1250:w-full
                "
                >
                  {`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. `}
                </div>
                <div className="w-[50%] mx-auto my-auto screen1250:w-[75%]  screen990:w-full">
                  <img
                    alt="عکس پروژه 1"
                    src={LapTop2}
                    className="w-[80%] mx-auto "
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#AC4C75] rounded-[40px]  text-white p-8 text-justify mt-16">
            <div className="flex flex-row justify-between">
              <div className="flex flex-row">
                <div>
                  <img alt="عکس مشتری 1" src={Client} className="w-10" />
                </div>
                <div>
                  <div className="text-start text-xl font-bold px-2">
                    Michael Scott
                  </div>
                  <div className="text-start text-xs text-[#EAF2FE] px-2 ">
                    CEO, Dunder Mifflin
                  </div>
                </div>
              </div>

              <div className=" ">
                <img alt="آیکن کوتیشن" src={QuoteIcn} className="w-10 h-8" />
              </div>
            </div>
            <div className="pt-10">
              "Working with this team was a game-changer for our business. Their
              network solutions are top-notch and their support is unparalleled.
              From the initial consultation to the ongoing maintenance, their
              professionalism and expertise have been evident every step of the
              way. They have significantly improved our network performance and
              security, allowing us to focus more on our core business
              activities without worrying about technical issues."
            </div>
          </div>
        </div>
      )}
      {activeIndex === 4 && (
        <div
          className="w-[70%] mx-auto
        screen1320:w-[72%]
          screen990:w-[90%]
        "
        >
          <div
            className="bg-gradient-to-r from-[#2B2E7F] to-[#C25173] rounded-[40px] text-white py-8 px-10
            screen990:flex-col-reverse"
          >
            <h1
              className="text-4xl font-bold pb-6 text-start
                  screen1250:text-3xl
                screen1150:text-2xl
              "
            >
              {t("platform's Name")}
            </h1>
            <div
              className="w-full mx-auto flex flex-row 

              screen750:flex-col-reverse
          "
            >
              <div
                className="w-[70%] mx-auto text-start my-auto
              screen990:w-full
            "
              >
                <h4 className="pb-10 w-3/4 screen1250:w-[90%]  screen990:w-[95%] text-lg screen1280:text-base ">
                  {t("platform's Text")}
                </h4>
              </div>

              <div className="w-[30%] mx-auto my-auto screen1250:w-[50%] screen990:w-[70%]  ">
                <img
                  alt="عکس پروژه 1"
                  src={LapTopImg}
                  className={`w-[100%]  mx-auto my-auto ${
                    language === "en" ? "" : "transform scale-x-[-1]"
                  }`}
                />
              </div>
            </div>

            <div
              className="text-start flex flex-wrap justify-start gap-5
            "
            >
              <span
                className="bg-[#AC4C75] rounded-full text-white px-6 py-1.5 
                  screen1230:px-4 screen1230:text-sm
                "
              >
                {t("UI/UX design")}
              </span>
              <span
                className="bg-[#AC4C75] rounded-full text-white px-6 py-1.5 
                  screen1230:px-4 screen1230:text-sm     "
              >
                {t("Web design")}
              </span>
              <span
                className="bg-[#AC4C75] rounded-full text-white px-6 py-1.5 
                  screen1230:px-4 screen1230:text-sm 
                "
              >
                {t("Responsive design")}
              </span>
            </div>
          </div>
          <div className="text-justify my-16">
            <div className="text-[#AC4C75] font-bold text-lg">
              {t("The situation")}
            </div>
            <div className="my-6 text-2xl font-[500] text-[#252B2B]">
              Lorem ipsum dolor sit amet
            </div>
            <div
              className="text-lg font-[400] text-[#252B2B] whitespace-pre-line
            screen1320:text-base
            "
            >
              {`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`}
            </div>
          </div>

          <div className="text-justify my-16">
            <div className="text-[#AC4C75] font-bold text-lg">
              {t("The solution")}
            </div>
            <div className="my-6 text-2xl font-[500] text-[#252B2B]">
              Lorem ipsum dolor sit amet
            </div>
            <div
              className="text-lg font-[400] text-[#252B2B] whitespace-pre-line
            screen1320:text-base
            
            "
            >
              {`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`}
            </div>
          </div>

          <div>
            <div className="w-full mx-auto text-justify">
              <div className="text-[#AC4C75] font-bold text-lg">
                {t("The results")}
              </div>
              <div className="mt-6 mb-12 text-2xl font-[500] text-[#252B2B]">
                Lorem ipsum dolor sit amet
              </div>
              <div className="flex flex-row screen1250:flex-col-reverse">
                <div
                  className="w-[50%] mx-auto  text-lg font-[400] text-[#252B2B] whitespace-pre-line
                  screen1320:text-base
                  screen1250:w-full
                "
                >
                  {`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. `}
                </div>
                <div className="w-[50%] mx-auto my-auto screen1250:w-[75%]  screen990:w-full">
                  <img
                    alt="عکس پروژه 1"
                    src={LapTop2}
                    className="w-[80%] mx-auto "
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#AC4C75] rounded-[40px]  text-white p-8 text-justify mt-16">
            <div className="flex flex-row justify-between">
              <div className="flex flex-row">
                <div>
                  <img alt="عکس مشتری 1" src={Client} className="w-10" />
                </div>
                <div>
                  <div className="text-start text-xl font-bold px-2">
                    Michael Scott
                  </div>
                  <div className="text-start text-xs text-[#EAF2FE] px-2 ">
                    CEO, Dunder Mifflin
                  </div>
                </div>
              </div>

              <div className=" ">
                <img alt="آیکن کوتیشن" src={QuoteIcn} className="w-10 h-8" />
              </div>
            </div>
            <div className="pt-10">
              "Working with this team was a game-changer for our business. Their
              network solutions are top-notch and their support is unparalleled.
              From the initial consultation to the ongoing maintenance, their
              professionalism and expertise have been evident every step of the
              way. They have significantly improved our network performance and
              security, allowing us to focus more on our core business
              activities without worrying about technical issues."
            </div>
          </div>
        </div>
      )}
      {/* {activeIndex === 1 && (
        <div
          className="w-[70%] mx-auto
        screen1320:w-[72%]
          screen990:w-[90%] "
        >
          <div
            className="w-full mx-auto flex flex-row bg-gradient-to-r from-[#2B2E7F] to-[#C25173] rounded-[40px] text-white py-8 px-10
            screen990:flex-col-reverse
          "
          >
            <div
              className="w-[70%] mx-auto text-start
            screen990:w-full"
            >
              <h1
                className="text-4xl font-bold pb-6
                  screen1250:text-3xl

                screen1150:text-2xl"
              >
                Name of the app or platform 1
              </h1>
              <h4 className="pb-10 w-3/4 screen1250:w-[90%]  screen990:w-[95%]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit.
              </h4>
              <div>
                <span
                  className="bg-[#AC4C75] rounded-full text-white px-6 py-1.5 
                  screen1230:px-4 screen1230:text-sm"
                >
                  {t("UI/UX design")}
                </span>
                <span
                  className="bg-[#AC4C75] rounded-full text-white px-6 py-1.5 
                  screen1230:px-4 screen1230:text-sm mx-4"
                >
                  {t("Web design")}
                </span>
                <span
                  className="bg-[#AC4C75] rounded-full text-white px-6 py-1.5 
                  screen1230:px-4 screen1230:text-sm"
                >
                  {t("Responsive design")}
                </span>
              </div>
            </div>

            <div className="w-[50%] mx-auto my-auto screen1250:w-[75%]  screen990:w-full ">
              <img
                alt="عکس پروژه 2"
                src={LapTopImg}
                className="w-[80%] mx-auto"
              />
            </div>
          </div>

          <div className="text-justify my-16">
            <div className="text-[#AC4C75] font-bold text-lg">
              {t("The situation")}
            </div>
            <div className="my-6 text-2xl font-[500] text-[#252B2B]">
              Lorem ipsum dolor sit amet
            </div>
            <div
              className="text-lg font-[400] text-[#252B2B] whitespace-pre-line
            screen1320:text-base"
            >
              {`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`}
            </div>
          </div>

          <div className="text-justify my-16">
            <div className="text-[#AC4C75] font-bold text-lg">{t("The solution")}</div>
            <div className="my-6 text-2xl font-[500] text-[#252B2B]">
              Lorem ipsum dolor sit amet
            </div>
            <div
              className="text-lg font-[400] text-[#252B2B] whitespace-pre-line
            screen1320:text-base"
            >
              {`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`}
            </div>
          </div>

          <div >
            <div className="w-full mx-auto text-justify">
              <div className="text-[#AC4C75] font-bold text-lg">
                  {t("The results")}
              </div>
              <div className="mt-6 mb-12 text-2xl font-[500] text-[#252B2B]">
                Lorem ipsum dolor sit amet
              </div>
              <div className="flex flex-row screen1250:flex-col-reverse">
                <div
                  className="w-[50%] mx-auto  text-lg font-[400] text-[#252B2B] whitespace-pre-line
            screen1320:text-base
        
                  screen1250:w-full
            "
                >
                  {`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. `}
                </div>
                <div className="w-[50%] mx-auto my-auto screen1250:w-[75%]  screen990:w-full ">
                  <img
                    src={LapTop2}
                    alt="عکس پروژه 2"
                    className="w-[80%] mx-auto "
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#AC4C75] rounded-[40px]  text-white p-8 text-justify mt-16">
            <div className="flex flex-row justify-between">
              <div className="flex flex-row">
                <div>
                  <img alt="عکس مشتری 2" src={Client} className="w-10" />
                </div>
                <div>
                  <div className="text-start text-xl font-bold px-2">
                    Michael Scott
                  </div>
                  <div className="text-start text-xs text-[#EAF2FE] px-2 ">
                    CEO, Dunder Mifflin
                  </div>
                </div>
              </div>

              <div className=" ">
                <img alt="آیکن کوتیشن" src={QuoteIcn} className="w-10 h-8" />
              </div>
            </div>
            <div className="pt-10">
              "Working with this team was a game-changer for our business. Their
              network solutions are top-notch and their support is unparalleled.
              From the initial consultation to the ongoing maintenance, their
              professionalism and expertise have been evident every step of the
              way. They have significantly improved our network performance and
              security, allowing us to focus more on our core business
              activities without worrying about technical issues."
            </div>
          </div>
        </div>
      )}
      {activeIndex === 2 && (
        <div
          className="w-[70%] mx-auto
        screen1320:w-[72%]
          screen990:w-[90%]"
        >
          <div
            className="w-full mx-auto flex flex-row bg-gradient-to-r from-[#2B2E7F] to-[#C25173] rounded-[40px] text-white py-8 px-10
            screen990:flex-col-reverse
          "
          >
            <div
              className="w-[70%] mx-auto text-start
            screen990:w-full"
            >
              <h1
                className="text-4xl font-bold pb-6
                  screen1250:text-3xl

                screen1150:text-2xl"
              >
                Name of the app or platform 2
              </h1>
              <h4 className="pb-10 w-3/4 screen1250:w-[90%]  screen990:w-[95%]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit.
              </h4>
              <div>
                <span
                  className="bg-[#AC4C75] rounded-full text-white px-6 py-1.5 
                  screen1230:px-4 screen1230:text-sm"
                >
                  {t("UI/UX design")}
                </span>
                <span
                  className="bg-[#AC4C75] rounded-full text-white px-6 py-1.5 
                  screen1230:px-4 screen1230:text-sm mx-4"
                >
                  {t("Web design")}
                </span>
                <span
                  className="bg-[#AC4C75] rounded-full text-white px-6 py-1.5 
                  screen1230:px-4 screen1230:text-sm"
                >
                  {t("Responsive design")}
                </span>
              </div>
            </div>

            <div className="w-[50%] mx-auto my-auto screen1250:w-[75%]  screen990:w-full">
              <img
                alt="عکس پروژه 3"
                src={LapTopImg}
                className="w-[80%] mx-auto"
              />
            </div>
          </div>

          <div className="text-justify my-16">
            <div className="text-[#AC4C75] font-bold text-lg">
              {t("The situation")}
            </div>
            <div className="my-6 text-2xl font-[500] text-[#252B2B]">
              Lorem ipsum dolor sit amet
            </div>
            <div
              className="text-lg font-[400] text-[#252B2B] whitespace-pre-line
            screen1320:text-base"
            >
              {`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`}
            </div>
          </div>

          <div className="text-justify my-16">
            <div className="text-[#AC4C75] font-bold text-lg">{t("The solution")}</div>
            <div className="my-6 text-2xl font-[500] text-[#252B2B]">
              Lorem ipsum dolor sit amet
            </div>
            <div
              className="text-lg font-[400] text-[#252B2B] whitespace-pre-line
            screen1320:text-base"
            >
              {`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`}
            </div>
          </div>

          <div >
            <div className="w-full mx-auto text-justify">
              <div className="text-[#AC4C75] font-bold text-lg">
                  {t("The results")}
              </div>
              <div className="mt-6 mb-12 text-2xl font-[500] text-[#252B2B]">
                Lorem ipsum dolor sit amet
              </div>
              <div className="flex flex-row screen1250:flex-col-reverse">
                <div
                  className="w-[50%] mx-auto  text-lg font-[400] text-[#252B2B] whitespace-pre-line
                screen1320:text-base
                screen1250:w-full
            "
                >
                  {`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. `}
                </div>
                <div className="w-[50%] mx-auto my-auto screen1250:w-[75%]  screen990:w-full ">
                  <img
                    alt="عکس پروژه 3"
                    src={LapTop2}
                    className="w-[80%] mx-auto "
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#AC4C75] rounded-[40px]  text-white p-8 text-justify mt-16">
            <div className="flex flex-row justify-between">
              <div className="flex flex-row">
                <div>
                  <img alt="عکس مشتری 3" src={Client} className="w-10" />
                </div>
                <div>
                  <div className="text-start text-xl font-bold px-2">
                    Michael Scott
                  </div>
                  <div className="text-start text-xs text-[#EAF2FE] px-2 ">
                    CEO, Dunder Mifflin
                  </div>
                </div>
              </div>

              <div className=" ">
                <img alt="آیکن کوتیشن" src={QuoteIcn} className="w-10 h-8" />
              </div>
            </div>
            <div className="pt-10">
              "Working with this team was a game-changer for our business. Their
              network solutions are top-notch and their support is unparalleled.
              From the initial consultation to the ongoing maintenance, their
              professionalism and expertise have been evident every step of the
              way. They have significantly improved our network performance and
              security, allowing us to focus more on our core business
              activities without worrying about technical issues."
            </div>
          </div>
        </div>
      )}
      {activeIndex === 3 && (
        <div
          className="w-[70%] mx-auto
        screen1320:w-[72%]
          screen990:w-[90%]"
        >
          <div
            className="w-full mx-auto flex flex-row bg-gradient-to-r from-[#2B2E7F] to-[#C25173] rounded-[40px] text-white py-8 px-10
            screen990:flex-col-reverse
          "
          >
            <div
              className="w-[70%] mx-auto text-start
            screen990:w-full"
            >
              <h1
                className="text-4xl font-bold pb-6
                  screen1250:text-3xl

                screen1150:text-2xl"
              >
                Name of the app or platform 3
              </h1>
              <h4 className="pb-10 w-3/4 screen1250:w-[90%]  screen990:w-[95%]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit.
              </h4>
              <div>
                <span
                  className="bg-[#AC4C75] rounded-full text-white px-6 py-1.5 
                  screen1230:px-4 screen1230:text-sm"
                >
                  {t("UI/UX design")}
                </span>
                <span
                  className="bg-[#AC4C75] rounded-full text-white px-6 py-1.5 
                  screen1230:px-4 screen1230:text-sm mx-4"
                >
                  {t("Web design")}
                </span>
                <span
                  className="bg-[#AC4C75] rounded-full text-white px-6 py-1.5 
                  screen1230:px-4 screen1230:text-sm"
                >
                  {t("Responsive design")}
                </span>
              </div>
            </div>

            <div className="w-[50%] mx-auto my-auto screen1250:w-[75%]  screen990:w-full">
              <img
                alt="عکس پروژه 3"
                src={LapTopImg}
                className="w-[80%] mx-auto"
              />
            </div>
          </div>

          <div className="text-justify my-16">
            <div className="text-[#AC4C75] font-bold text-lg">
              {t("The situation")}
            </div>
            <div className="my-6 text-2xl font-[500] text-[#252B2B]">
              Lorem ipsum dolor sit amet
            </div>
            <div
              className="text-lg font-[400] text-[#252B2B] whitespace-pre-line
            screen1320:text-base"
            >
              {`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`}
            </div>
          </div>

          <div className="text-justify my-16">
            <div className="text-[#AC4C75] font-bold text-lg">{t("The solution")}</div>
            <div className="my-6 text-2xl font-[500] text-[#252B2B]">
              Lorem ipsum dolor sit amet
            </div>
            <div
              className="text-lg font-[400] text-[#252B2B] whitespace-pre-line
            screen1320:text-base"
            >
              {`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`}
            </div>
          </div>

          <div >
            <div className="w-full mx-auto text-justify">
              <div className="text-[#AC4C75] font-bold text-lg">
                  {t("The results")}
              </div>
              <div className="mt-6 mb-12 text-2xl font-[500] text-[#252B2B]">
                Lorem ipsum dolor sit amet
              </div>
              <div className="flex flex-row screen1250:flex-col-reverse">
                <div
                  className="w-[50%] mx-auto  text-lg font-[400] text-[#252B2B] whitespace-pre-line
            screen1320:text-base
            screen1250:w-full
            "
                >
                  {`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. `}
                </div>
                <div className="w-[50%] mx-auto my-auto screen1250:w-[75%]  screen990:w-full ">
                  <img
                    alt="عکس پروژه 3"
                    src={LapTop2}
                    className="w-[80%] mx-auto "
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#AC4C75] rounded-[40px]  text-white p-8 text-justify mt-16">
            <div className="flex flex-row justify-between">
              <div className="flex flex-row">
                <div>
                  <img alt="عکس مشتری 3" src={Client} className="w-10" />
                </div>
                <div>
                  <div className="text-start text-xl font-bold px-2">
                    Michael Scott
                  </div>
                  <div className="text-start text-xs text-[#EAF2FE] px-2 ">
                    CEO, Dunder Mifflin
                  </div>
                </div>
              </div>

              <div className=" ">
                <img alt="آیکن کوتیشن" src={QuoteIcn} className="w-10 h-8" />
              </div>
            </div>
            <div className="pt-10">
              "Working with this team was a game-changer for our business. Their
              network solutions are top-notch and their support is unparalleled.
              From the initial consultation to the ongoing maintenance, their
              professionalism and expertise have been evident every step of the
              way. They have significantly improved our network performance and
              security, allowing us to focus more on our core business
              activities without worrying about technical issues."
            </div>
          </div>
        </div>
      )}
      {activeIndex === 4 && (
        <div
          className="w-[70%] mx-auto
        screen1320:w-[72%]
          screen990:w-[90%]"
        >
          <div
            className="w-full mx-auto flex flex-row bg-gradient-to-r from-[#2B2E7F] to-[#C25173] rounded-[40px] text-white py-8 px-10
            screen990:flex-col-reverse
          "
          >
            <div
              className="w-[70%] mx-auto text-start
            screen990:w-full"
            >
              <h1
                className="text-4xl font-bold pb-6
                  screen1250:text-3xl

                screen1150:text-2xl"
              >
                Name of the app or platform 4
              </h1>
              <h4 className="pb-10 w-3/4 screen1250:w-[90%]  screen990:w-[95%]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit.
              </h4>
              <div>
                <span
                  className="bg-[#AC4C75] rounded-full text-white px-6 py-1.5 
                  screen1230:px-4 screen1230:text-sm"
                >
                  {t("UI/UX design")}
                </span>
                <span
                  className="bg-[#AC4C75] rounded-full text-white px-6 py-1.5 
                  screen1230:px-4 screen1230:text-sm mx-4"
                >
                  {t("Web design")}
                </span>
                <span
                  className="bg-[#AC4C75] rounded-full text-white px-6 py-1.5 
                  screen1230:px-4 screen1230:text-sm"
                >
                  {t("Responsive design")}
                </span>
              </div>
            </div>

            <div className="w-[50%] mx-auto my-auto screen1250:w-[75%]  screen990:w-full">
              <img
                alt="عکس پروژه 3"
                src={LapTopImg}
                className="w-[80%] mx-auto"
              />
            </div>
          </div>

          <div className="text-justify my-16">
            <div className="text-[#AC4C75] font-bold text-lg">
              {t("The situation")}
            </div>
            <div className="my-6 text-2xl font-[500] text-[#252B2B]">
              Lorem ipsum dolor sit amet
            </div>
            <div
              className="text-lg font-[400] text-[#252B2B] whitespace-pre-line
            screen1320:text-base"
            >
              {`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`}
            </div>
          </div>

          <div className="text-justify my-16">
            <div className="text-[#AC4C75] font-bold text-lg">{t("The solution")}</div>
            <div className="my-6 text-2xl font-[500] text-[#252B2B]">
              Lorem ipsum dolor sit amet
            </div>
            <div
              className="text-lg font-[400] text-[#252B2B] whitespace-pre-line
            screen1320:text-base"
            >
              {`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`}
            </div>
          </div>

          <div >
            <div className="w-full mx-auto text-justify">
              <div className="text-[#AC4C75] font-bold text-lg">
                  {t("The results")}
              </div>
              <div className="mt-6 mb-12 text-2xl font-[500] text-[#252B2B]">
                Lorem ipsum dolor sit amet
              </div>
              <div className="flex flex-row screen1250:flex-col-reverse">
                <div
                  className="w-[50%] mx-auto  text-lg font-[400] text-[#252B2B] whitespace-pre-line
            screen1320:text-base
            screen1250:w-full
            "
                >
                  {`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. `}
                </div>
                <div className="w-[50%] mx-auto my-auto screen1250:w-[75%]  screen990:w-full">
                  <img
                    alt="عکس پروژه 3"
                    src={LapTop2}
                    className="w-[80%] mx-auto "
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#AC4C75] rounded-[40px]  text-white p-8 text-justify mt-16">
            <div className="flex flex-row justify-between">
              <div className="flex flex-row">
                <div>
                  <img alt="عکس مشتری 3" src={Client} className="w-10" />
                </div>
                <div>
                  <div className="text-start text-xl font-bold px-2">
                    Michael Scott
                  </div>
                  <div className="text-start text-xs text-[#EAF2FE] px-2 ">
                    CEO, Dunder Mifflin
                  </div>
                </div>
              </div>

              <div className=" ">
                <img alt="آیکن کوتیشن" src={QuoteIcn} className="w-10 h-8" />
              </div>
            </div>
            <div className="pt-10">
              "Working with this team was a game-changer for our business. Their
              network solutions are top-notch and their support is unparalleled.
              From the initial consultation to the ongoing maintenance, their
              professionalism and expertise have been evident every step of the
              way. They have significantly improved our network performance and
              security, allowing us to focus more on our core business
              activities without worrying about technical issues."
            </div>
          </div>
        </div>
      )} */}
    </>
  );
};

export default ChildComponent;
