import React, { useEffect } from "react";

import Header from "./header";
import Child from "./child";

const Terms = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Header />
      <Child />
    </div>
  );
};

export default Terms;
