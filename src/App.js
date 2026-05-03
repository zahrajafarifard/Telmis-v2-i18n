import React, { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import ReactDOM from "react-dom";

import Header from "./components/shared/header";
import HeaderSmallScreen from "./components/shared/header/header-small-screen";

import Home from "./components/home-page";
import DesignDev from "./components/services/design-dev";
import Network from "./components/services/network";

import DesignDevProj from "./components/projects/design-dev";
import NetworkProj from "./components/projects/network";
import ContactUs from "./components/contact-us";
import AboutUs from "./components/about-us";

import PrivacyPolicy from "./components/privacy-policy";
import Terms from "./components/terms&conditions";

import Footer from "./components/shared/footer";
import "./App.css";

function App() {
  const _lang = useSelector((state) => state.lang);
  const [language, setLanguage] = useState();

  useEffect(() => {
    setLanguage(_lang);
  }, [setLanguage, _lang]);

  const location = useLocation();
  const [scrolling, setScrolling] = useState(false);

  const [showMenu, setShowMenu] = useState(false);

  const handleShowMenu = (selectedLanguage) => {
    setShowMenu(selectedLanguage);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    window.scrollY > 0 && window.addEventListener("load", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolling]);

  return (
    <div
      className={`App relative ${
        language === "ar" ? "font-Almarai" : "font-Lato"
      } `}
    >
      <header>
        <div className=" relative screen750:hidden">
          {ReactDOM.createPortal(
            <div
              className={`z-30 fixed top-0 justify-center h-fit mx-auto inset-x-0 my-auto    screen750:hidden
                   ${scrolling && "bg-opacity-50 bg-[#EAEEFF] menu "}
                   ${
                     location.pathname !== "/" &&
                     "bg-opacity-50 bg-[#EAEEFF] menu "
                   }`}
            >
              <Header />
            </div>,
            document.getElementById("modal")
          )}
        </div>
      </header>

      <div className="relative">
        {ReactDOM.createPortal(
          <div
            className={`hidden screen750:flex   justify-center h-fit mx-auto inset-x-0 my-auto fixed  top-0  bg-[#eaeeff] z-50 
            menu ${showMenu ? " bg-opacity-90" : "bg-opacity-50"}  `}
          >
            <HeaderSmallScreen onShowMen={handleShowMenu} />
          </div>,
          document.getElementById("modal")
        )}
      </div>
      <main>
        <Routes>
          <Route exact path="/" element={<Home />} />

          <Route path="/services/design-develop" element={<DesignDev />} />
          <Route exact path="/services/network" element={<Network />} />

          <Route path="/projects/design-develop" element={<DesignDevProj />} />
          <Route exact path="/projects/network" element={<NetworkProj />} />

          <Route exact path="/contact-us" element={<ContactUs />} />

          <Route exact path="/about-us" element={<AboutUs />} />
          <Route exact path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route exact path="/terms-conditions" element={<Terms />} />
        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
