import React, { useEffect } from "react";

import Header from "./header";
import Components from "./parent-component";
import ContactUs from "../../shared/contact-us";

const DesignAndDevelop = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <Components />
      <ContactUs />
    </>
  );
};

export default DesignAndDevelop;
