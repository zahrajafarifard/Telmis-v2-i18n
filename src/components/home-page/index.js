import React, { useEffect } from "react";

import Header from "./header";
import FirstChild from "./first-child";
import OurServices from "./services";
import Platform from "./platform";
import Testimonial from "./testimonials";
import ContactUs from "../shared/contact-us";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <div className="bg-[#EAEEFF] ">
        <Header />
      </div>

      <FirstChild />
      <OurServices />
      <Platform />
      <Testimonial />
      <ContactUs />
    </div>
  );
};

export default Home;
