import React from "react";
import { useTranslation } from "react-i18next";

import NetworkDetails from "./network-details";
import Img1 from "../../../assets/network security.svg";
import Img1Hovered from "../../../assets/network security-hovered.svg";
import Img2 from "../../../assets/network setup.svg";
import Img2Hovered from "../../../assets/network setup hovered.svg";
import Img3 from "../../../assets/network support.svg";
import Img3Hovered from "../../../assets/network support hovered.svg";
import Img4 from "../../../assets/network VoIP.svg";
import Img4Hovered from "../../../assets/network VoIP hovered.svg";

const Network = () => {
  const { t } = useTranslation();

  return (
    <div className=" ">
      <h1
        className="text-4xl text-[32px] font-[600] text-[#082784]
        screen990:mt-12
      "
      >
        {t("Network Services")}
      </h1>
      <div
        className="grid grid-cols-2 w-fit mx-auto  gap-6 pt-10
          screen1150:gap-4
          screen600:gap-x-6
          screen600:gap-y-3
          screen540:grid-cols-1
          "
      >
        <NetworkDetails
          img={Img2}
          index={0}
          hoveredImg={Img2Hovered}
          title={t("Network Installation")}
          text={t("Network Installation Text")}
        />
        <NetworkDetails
          img={Img1}
          index={1}
          hoveredImg={Img1Hovered}
          title={t("Network Security")}
          text={t("Network Security Text")}
        />
        <NetworkDetails
          img={Img3}
          index={2}
          hoveredImg={Img3Hovered}
          title={t("Network Support")}
          text={t("Network Support Text")}
        />
        <NetworkDetails
          img={Img4}
          index={3}
          hoveredImg={Img4Hovered}
          title={t("VoIP Services")}
          text={t("VoIP Services Text")}
        />
      </div>
    </div>
  );
};

export default Network;
