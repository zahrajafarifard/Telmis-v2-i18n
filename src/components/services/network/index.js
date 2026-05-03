import React, { useEffect } from "react";
import Header from "./header";
import ContactUs from "../../shared/contact-us";
import Components from "./parent-component";

const Network = () => {
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

export default Network;
