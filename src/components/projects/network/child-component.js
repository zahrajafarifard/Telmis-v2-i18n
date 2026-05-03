import React from "react";

import Media from "../../../assets/media.png";
import Client from "../../../assets/client.png";
import QuoteIcn from "../../../assets/quote icon.svg";

import { useTranslation } from "react-i18next";

const ChildComponent = ({ activeIndex }) => {
  const { t } = useTranslation();

  return (
    <>
      {activeIndex === 0 && (
        <div
          className="w-[75%] mx-auto
         screen1500:w-[73%]
          screen990:w-[90%]"
        >
          <div
            className="w-full mx-auto flex flex-row bg-gradient-to-r from-[#2B2E7F] to-[#C25173] rounded-[40px] text-white
          screen850:flex-col-reverse
          "
          >
            <div
              className="w-[70%] mx-auto text-start py-8 px-10
            screen850:w-[100%]
            "
            >
              <h1
                className="text-4xl font-bold pb-6
               text-start
                  screen1500:text-3xl
                  
                screen1150:text-2xl
              "
              >
                {t("Title of the project or comany")}
              </h1>
              <h4 className="pb-10 w-[88%] screen1250:w-[90%]  screen990:w-[95%] screen1180:text-[13px] ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit.
              </h4>
              <div className="text-start flex flex-wrap justify-start gap-5 screen1250:gap-1 screen1600:gap-2">
                <span className="bg-[#AC4C75] rounded-full text-white px-6 py-1.5 screen1500:px-3 screen1500:text-sm screen1180:text-[13px] ">
                  {t("Network security")}
                </span>
                <span className="bg-[#AC4C75] rounded-full text-white px-6 py-1.5 screen1500:px-3 screen1500:text-sm screen1180:text-[13px] ">
                  {t("Consultant")}
                </span>
                <span className="bg-[#AC4C75] rounded-full text-white px-6 py-1.5 screen1500:px-3 screen1500:text-sm screen1180:text-[13px] ">
                  {t("Passive services")}
                </span>
              </div>
            </div>

            <div
              className="w-[30%] mx-auto screen1600:w-[40%] screen1320:w-[45%] screen1180:w-2/3 screen990:w-[40%] screen850:w-2/3
              screen600:w-full
            "
            >
              <img
                src={Media}
                alt="عکس پروژه"
                className="w-full h-full rounded-e-[40px] object-cover 
                screen850:rounded-[40px]
                screen850:mt-5
                screen600:mt-0
                screen600:rounded-b-none

                "
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
            <div className="text-lg font-[400] text-[#252B2B] whitespace-pre-line">
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
            <div className="text-lg font-[400] text-[#252B2B] whitespace-pre-line">
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
                  screen1250:w-full
                "
                >
                  {`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. `}
                </div>
                <div className="w-[50%] mx-auto my-auto  screen1250:mb-6  screen1250:w-[75%]  screen990:w-full">
                  <img
                    src={Media}
                    alt="عکس پروژه"
                    className="w-[70%] rounded-[40px] mx-auto my-auto screen1600:w-[84%] screen1250:w-[80%]"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#7595F4] to-[#082784] rounded-[40px]  text-white p-8 text-justify mt-16">
            <div className="flex flex-row justify-between">
              <div className="flex flex-row">
                <div>
                  <img alt="عکس مشتری" src={Client} className="w-10" />
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
          className="w-[75%] mx-auto
         screen1500:w-[73%]
          screen990:w-[90%]"
        >
          <div
            className="w-full mx-auto flex flex-row bg-gradient-to-r from-[#2B2E7F] to-[#C25173] rounded-[40px] text-white
          screen850:flex-col-reverse
          "
          >
            <div
              className="w-[70%] mx-auto text-start py-8 px-10
            screen850:w-[100%]
            "
            >
              <h1
                className="text-4xl font-bold pb-6
               text-start
                  screen1500:text-3xl
                  
                screen1150:text-2xl
              "
              >
                {t("Title of the project or comany")}
              </h1>
              <h4 className="pb-10 w-[88%] screen1250:w-[90%]  screen990:w-[95%] screen1180:text-[13px] ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit.
              </h4>
              <div className="text-start flex flex-wrap justify-start gap-5 screen1250:gap-1 screen1600:gap-2">
                <span className="bg-[#AC4C75] rounded-full text-white px-6 py-1.5 screen1500:px-3 screen1500:text-sm screen1180:text-[13px] ">
                  {t("Network security")}
                </span>
                <span className="bg-[#AC4C75] rounded-full text-white px-6 py-1.5 screen1500:px-3 screen1500:text-sm screen1180:text-[13px] ">
                  {t("Consultant")}
                </span>
                <span className="bg-[#AC4C75] rounded-full text-white px-6 py-1.5 screen1500:px-3 screen1500:text-sm screen1180:text-[13px] ">
                  {t("Passive services")}
                </span>
              </div>
            </div>

            <div
              className="w-[30%] mx-auto screen1600:w-[40%] screen1320:w-[45%] screen1180:w-2/3 screen990:w-[40%] screen850:w-2/3
              screen600:w-full
            "
            >
              <img
                src={Media}
                alt="عکس پروژه"
                className="w-full h-full rounded-e-[40px] object-cover 
                screen850:rounded-[40px]
                screen850:mt-5
                screen600:mt-0
                screen600:rounded-b-none

                "
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
            <div className="text-lg font-[400] text-[#252B2B] whitespace-pre-line">
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
            <div className="text-lg font-[400] text-[#252B2B] whitespace-pre-line">
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
                  screen1250:w-full
                "
                >
                  {`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. `}
                </div>
                <div className="w-[50%] mx-auto my-auto  screen1250:mb-6  screen1250:w-[75%]  screen990:w-full">
                  <img
                    src={Media}
                    alt="عکس پروژه"
                    className="w-[70%] rounded-[40px] mx-auto my-auto screen1600:w-[84%] screen1250:w-[80%]"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#7595F4] to-[#082784] rounded-[40px]  text-white p-8 text-justify mt-16">
            <div className="flex flex-row justify-between">
              <div className="flex flex-row">
                <div>
                  <img alt="عکس مشتری" src={Client} className="w-10" />
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
          className="w-[75%] mx-auto
         screen1500:w-[73%]
          screen990:w-[90%]"
        >
          <div
            className="w-full mx-auto flex flex-row bg-gradient-to-r from-[#2B2E7F] to-[#C25173] rounded-[40px] text-white
          screen850:flex-col-reverse
          "
          >
            <div
              className="w-[70%] mx-auto text-start py-8 px-10
            screen850:w-[100%]
            "
            >
              <h1
                className="text-4xl font-bold pb-6
               text-start
                  screen1500:text-3xl
                  
                screen1150:text-2xl
              "
              >
                {t("Title of the project or comany")}
              </h1>
              <h4 className="pb-10 w-[88%] screen1250:w-[90%]  screen990:w-[95%] screen1180:text-[13px] ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit.
              </h4>
              <div className="text-start flex flex-wrap justify-start gap-5 screen1250:gap-1 screen1600:gap-2">
                <span className="bg-[#AC4C75] rounded-full text-white px-6 py-1.5 screen1500:px-3 screen1500:text-sm screen1180:text-[13px] ">
                  {t("Network security")}
                </span>
                <span className="bg-[#AC4C75] rounded-full text-white px-6 py-1.5 screen1500:px-3 screen1500:text-sm screen1180:text-[13px] ">
                  {t("Consultant")}
                </span>
                <span className="bg-[#AC4C75] rounded-full text-white px-6 py-1.5 screen1500:px-3 screen1500:text-sm screen1180:text-[13px] ">
                  {t("Passive services")}
                </span>
              </div>
            </div>

            <div
              className="w-[30%] mx-auto screen1600:w-[40%] screen1320:w-[45%] screen1180:w-2/3 screen990:w-[40%] screen850:w-2/3
              screen600:w-full
            "
            >
              <img
                src={Media}
                alt="عکس پروژه"
                className="w-full h-full rounded-e-[40px] object-cover 
                screen850:rounded-[40px]
                screen850:mt-5
                screen600:mt-0
                screen600:rounded-b-none

                "
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
            <div className="text-lg font-[400] text-[#252B2B] whitespace-pre-line">
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
            <div className="text-lg font-[400] text-[#252B2B] whitespace-pre-line">
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
                  screen1250:w-full
                "
                >
                  {`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. `}
                </div>
                <div className="w-[50%] mx-auto my-auto  screen1250:mb-6  screen1250:w-[75%]  screen990:w-full">
                  <img
                    src={Media}
                    alt="عکس پروژه"
                    className="w-[70%] rounded-[40px] mx-auto my-auto screen1600:w-[84%] screen1250:w-[80%]"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#7595F4] to-[#082784] rounded-[40px]  text-white p-8 text-justify mt-16">
            <div className="flex flex-row justify-between">
              <div className="flex flex-row">
                <div>
                  <img alt="عکس مشتری" src={Client} className="w-10" />
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
          className="w-[75%] mx-auto
         screen1500:w-[73%]
          screen990:w-[90%]"
        >
          <div
            className="w-full mx-auto flex flex-row bg-gradient-to-r from-[#2B2E7F] to-[#C25173] rounded-[40px] text-white
          screen850:flex-col-reverse
          "
          >
            <div
              className="w-[70%] mx-auto text-start py-8 px-10
            screen850:w-[100%]
            "
            >
              <h1
                className="text-4xl font-bold pb-6
               text-start
                  screen1500:text-3xl
                  
                screen1150:text-2xl
              "
              >
                {t("Title of the project or comany")}
              </h1>
              <h4 className="pb-10 w-[88%] screen1250:w-[90%]  screen990:w-[95%] screen1180:text-[13px] ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit.
              </h4>
              <div className="text-start flex flex-wrap justify-start gap-5 screen1250:gap-1 screen1600:gap-2">
                <span className="bg-[#AC4C75] rounded-full text-white px-6 py-1.5 screen1500:px-3 screen1500:text-sm screen1180:text-[13px] ">
                  {t("Network security")}
                </span>
                <span className="bg-[#AC4C75] rounded-full text-white px-6 py-1.5 screen1500:px-3 screen1500:text-sm screen1180:text-[13px] ">
                  {t("Consultant")}
                </span>
                <span className="bg-[#AC4C75] rounded-full text-white px-6 py-1.5 screen1500:px-3 screen1500:text-sm screen1180:text-[13px] ">
                  {t("Passive services")}
                </span>
              </div>
            </div>

            <div
              className="w-[30%] mx-auto screen1600:w-[40%] screen1320:w-[45%] screen1180:w-2/3 screen990:w-[40%] screen850:w-2/3
              screen600:w-full
            "
            >
              <img
                src={Media}
                alt="عکس پروژه"
                className="w-full h-full rounded-e-[40px] object-cover 
                screen850:rounded-[40px]
                screen850:mt-5
                screen600:mt-0
                screen600:rounded-b-none

                "
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
            <div className="text-lg font-[400] text-[#252B2B] whitespace-pre-line">
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
            <div className="text-lg font-[400] text-[#252B2B] whitespace-pre-line">
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
                  screen1250:w-full
                "
                >
                  {`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. `}
                </div>
                <div className="w-[50%] mx-auto my-auto  screen1250:mb-6  screen1250:w-[75%]  screen990:w-full">
                  <img
                    src={Media}
                    alt="عکس پروژه"
                    className="w-[70%] rounded-[40px] mx-auto my-auto screen1600:w-[84%] screen1250:w-[80%]"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#7595F4] to-[#082784] rounded-[40px]  text-white p-8 text-justify mt-16">
            <div className="flex flex-row justify-between">
              <div className="flex flex-row">
                <div>
                  <img alt="عکس مشتری" src={Client} className="w-10" />
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
          className="w-[75%] mx-auto
         screen1500:w-[73%]
          screen990:w-[90%]"
        >
          <div
            className="w-full mx-auto flex flex-row bg-gradient-to-r from-[#2B2E7F] to-[#C25173] rounded-[40px] text-white
          screen850:flex-col-reverse
          "
          >
            <div
              className="w-[70%] mx-auto text-start py-8 px-10
            screen850:w-[100%]
            "
            >
              <h1
                className="text-4xl font-bold pb-6
               text-start
                  screen1500:text-3xl
                  
                screen1150:text-2xl
              "
              >
                {t("Title of the project or comany")}
              </h1>
              <h4 className="pb-10 w-[88%] screen1250:w-[90%]  screen990:w-[95%] screen1180:text-[13px] ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit.
              </h4>
              <div className="text-start flex flex-wrap justify-start gap-5 screen1250:gap-1 screen1600:gap-2">
                <span className="bg-[#AC4C75] rounded-full text-white px-6 py-1.5 screen1500:px-3 screen1500:text-sm screen1180:text-[13px] ">
                  {t("Network security")}
                </span>
                <span className="bg-[#AC4C75] rounded-full text-white px-6 py-1.5 screen1500:px-3 screen1500:text-sm screen1180:text-[13px] ">
                  {t("Consultant")}
                </span>
                <span className="bg-[#AC4C75] rounded-full text-white px-6 py-1.5 screen1500:px-3 screen1500:text-sm screen1180:text-[13px] ">
                  {t("Passive services")}
                </span>
              </div>
            </div>

            <div
              className="w-[30%] mx-auto screen1600:w-[40%] screen1320:w-[45%] screen1180:w-2/3 screen990:w-[40%] screen850:w-2/3
              screen600:w-full
            "
            >
              <img
                src={Media}
                alt="عکس پروژه"
                className="w-full h-full rounded-e-[40px] object-cover 
                screen850:rounded-[40px]
                screen850:mt-5
                screen600:mt-0
                screen600:rounded-b-none

                "
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
            <div className="text-lg font-[400] text-[#252B2B] whitespace-pre-line">
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
            <div className="text-lg font-[400] text-[#252B2B] whitespace-pre-line">
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
                  screen1250:w-full
                "
                >
                  {`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. `}
                </div>
                <div className="w-[50%] mx-auto my-auto  screen1250:mb-6  screen1250:w-[75%]  screen990:w-full">
                  <img
                    src={Media}
                    alt="عکس پروژه"
                    className="w-[70%] rounded-[40px] mx-auto my-auto screen1600:w-[84%] screen1250:w-[80%]"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#7595F4] to-[#082784] rounded-[40px]  text-white p-8 text-justify mt-16">
            <div className="flex flex-row justify-between">
              <div className="flex flex-row">
                <div>
                  <img alt="عکس مشتری" src={Client} className="w-10" />
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
        <div className="w-[77%] mx-auto ">
          <div className="w-full mx-auto flex flex-row bg-gradient-to-r from-[#2B2E7F] to-[#C25173] rounded-[40px] text-white ">
            <div className="w-[70%] mx-auto text-justify py-8 px-10">
              <h1 className="text-4xl font-bold pb-6">
                {t("Title of the project or comany")}
              </h1>
              <h4 className="pb-10 w-3/4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit.
              </h4>
              <div>
                <span className="bg-[#AC4C75] rounded-full text-white px-6 py-1.5">
                  {t("Network security")}
                </span>
                <span className="bg-[#AC4C75] rounded-full text-white px-6 py-1.5 mx-4">
                  {t("Consultant")}
                </span>
                <span className="bg-[#AC4C75] rounded-full text-white px-6 py-1.5">
                  {t("Passive services")}
                </span>
              </div>
            </div>

            <div className="w-[30%] mx-auto">
              <img
                alt="عکس پروژه 2"
                src={Media}
                className="w-full h-full rounded-e-[40px]"
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
            <div className="text-lg font-[400] text-[#252B2B] whitespace-pre-line">
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
            <div className="text-lg font-[400] text-[#252B2B] whitespace-pre-line">
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
              <div className="flex flex-row">
                <div className="w-[50%] mx-auto  text-lg font-[400] text-[#252B2B] whitespace-pre-line">
                  {`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. `}
                </div>
                <div className="w-[50%] mx-auto ">
                  <img
                    alt="عکس پروژه 2"
                    src={Media}
                    className="w-[70%] rounded-[40px] mx-auto"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#7595F4] to-[#082784] rounded-[40px]  text-white p-8 text-justify mt-16">
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
                <img alt="عکس کوتیشن" src={QuoteIcn} className="w-10 h-8" />
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
        <div className="w-[77%] mx-auto">
          <div className="w-full mx-auto flex flex-row bg-gradient-to-r from-[#2B2E7F] to-[#C25173] rounded-[40px] text-white ">
            <div className="w-[70%] mx-auto text-justify py-8 px-10">
              <h1 className="text-4xl font-bold pb-6">
                {t("Title of the project or comany")}
              </h1>
              <h4 className="pb-10 w-3/4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit.
              </h4>
              <div>
                <span className="bg-[#AC4C75] rounded-full text-white px-6 py-1.5">
                  {t("Network security")}
                </span>
                <span className="bg-[#AC4C75] rounded-full text-white px-6 py-1.5 mx-4">
                  {t("Consultant")}
                </span>
                <span className="bg-[#AC4C75] rounded-full text-white px-6 py-1.5">
                  {t("Passive services")}
                </span>
              </div>
            </div>

            <div className="w-[30%] mx-auto">
              <img
                alt="عکس پروژه 3"
                src={Media}
                className="w-full h-full rounded-e-[40px]"
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
            <div className="text-lg font-[400] text-[#252B2B] whitespace-pre-line">
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
            <div className="text-lg font-[400] text-[#252B2B] whitespace-pre-line">
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
              <div className="flex flex-row">
                <div className="w-[50%] mx-auto  text-lg font-[400] text-[#252B2B] whitespace-pre-line">
                  {`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. `}
                </div>
                <div className="w-[50%] mx-auto ">
                  <img
                    alt="عکس پروژه 3"
                    src={Media}
                    className="w-[70%] rounded-[40px] mx-auto object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#7595F4] to-[#082784] rounded-[40px]  text-white p-8 text-justify mt-16">
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
        <div className="w-[77%] mx-auto">
          <div className="w-full mx-auto flex flex-row bg-gradient-to-r from-[#2B2E7F] to-[#C25173] rounded-[40px] text-white ">
            <div className="w-[70%] mx-auto text-justify py-8 px-10">
              <h1 className="text-4xl font-bold pb-6">
                {t("Title of the project or comany")}
              </h1>
              <h4 className="pb-10 w-3/4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit.
              </h4>
              <div>
                <span className="bg-[#AC4C75] rounded-full text-white px-6 py-1.5">
                  {t("Network security")}
                </span>
                <span className="bg-[#AC4C75] rounded-full text-white px-6 py-1.5 mx-4">
                  {t("Consultant")}
                </span>
                <span className="bg-[#AC4C75] rounded-full text-white px-6 py-1.5">
                  {t("Passive services")}
                </span>
              </div>
            </div>

            <div className="w-[30%] mx-auto">
              <img
                alt="عکس پروژه 3"
                src={Media}
                className="w-full h-full rounded-e-[40px]"
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
            <div className="text-lg font-[400] text-[#252B2B] whitespace-pre-line">
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
            <div className="text-lg font-[400] text-[#252B2B] whitespace-pre-line">
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
              <div className="flex flex-row">
                <div className="w-[50%] mx-auto  text-lg font-[400] text-[#252B2B] whitespace-pre-line">
                  {`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. `}
                </div>
                <div className="w-[50%] mx-auto ">
                  <img
                    alt="عکس پروژه 3"
                    src={Media}
                    className="w-[70%] rounded-[40px] mx-auto object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#7595F4] to-[#082784] rounded-[40px]  text-white p-8 text-justify mt-16">
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
        <div className="w-[77%] mx-auto">
          <div className="w-full mx-auto flex flex-row bg-gradient-to-r from-[#2B2E7F] to-[#C25173] rounded-[40px] text-white ">
            <div className="w-[70%] mx-auto text-justify py-8 px-10">
              <h1 className="text-4xl font-bold pb-6">
                {t("Title of the project or comany")}
              </h1>
              <h4 className="pb-10 w-3/4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit.
              </h4>
              <div>
                <span className="bg-[#AC4C75] rounded-full text-white px-6 py-1.5">
                  {t("Network security")}
                </span>
                <span className="bg-[#AC4C75] rounded-full text-white px-6 py-1.5 mx-4">
                  {t("Consultant")}
                </span>
                <span className="bg-[#AC4C75] rounded-full text-white px-6 py-1.5">
                  {t("Passive services")}
                </span>
              </div>
            </div>

            <div className="w-[30%] mx-auto">
              <img
                alt="عکس پروژه 3"
                src={Media}
                className="w-full h-full rounded-e-[40px]"
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
            <div className="text-lg font-[400] text-[#252B2B] whitespace-pre-line">
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
            <div className="text-lg font-[400] text-[#252B2B] whitespace-pre-line">
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
              <div className="flex flex-row">
                <div className="w-[50%] mx-auto  text-lg font-[400] text-[#252B2B] whitespace-pre-line">
                  {`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. `}
                </div>
                <div className="w-[50%] mx-auto ">
                  <img
                    alt="عکس پروژه 3"
                    src={Media}
                    className="w-[70%] rounded-[40px] mx-auto object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#7595F4] to-[#082784] rounded-[40px]  text-white p-8 text-justify mt-16">
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
