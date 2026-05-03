import React, { useEffect } from "react";

import Contactus from "../../components/shared/contact-us";
import Header from "./header";
import Child from "./child";

const ContactUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Header />
      <Child />
      <Contactus />
    </div>
  );
};

export default ContactUs;
