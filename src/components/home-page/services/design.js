import React from "react";
import DesignDetails from "./design-details";
import Img1 from "../../../assets/design-UI (1).svg";
import Img1Hovered from "../../../assets/design-UI (1)-hovered.svg";
import Img2 from "../../../assets/design-UI-2-red.svg";
import Img2Hovered from "../../../assets/design-UI-2-red-hovered.svg";
import Img3 from "../../../assets/design-UI-3-red.svg";
import Img3Hovered from "../../../assets/design-UI-3-red-hovered.svg";
import Img4 from "../../../assets/design-UI-4-red.svg";
import Img4Hovered from "../../../assets/design-UI-4-red-hovered.svg";
import { useTranslation } from "react-i18next";

const Design = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h1
        className="text-[32px] font-[600] text-[#E13D74]
        screen990:mt-12
      "
      >
        {t("Design & Develop")}
      </h1>
      <div
        className="grid grid-cols-2 w-fit mx-auto  gap-6 pt-10
          screen1150:gap-4
          screen600:gap-x-6
          screen600:gap-y-3
          screen540:grid-cols-1
        "
      >
        <DesignDetails
          index={0}
          img={Img1}
          hoveredImg={Img1Hovered}
          title={t("UI/UX Design")}
          text={t("UI/UX Design Text")}
        />
        <DesignDetails
          index={1}
          img={Img2}
          hoveredImg={Img2Hovered}
          title={t("Desktop Development")}
          text={t("Desktop Development Text")}
        />
        <DesignDetails
          index={2}
          hoveredImg={Img3Hovered}
          img={Img3}
          title={t("Mobile Development")}
          text={t("Mobile Development Text")}
        />
        <DesignDetails
          index={3}
          img={Img4}
          hoveredImg={Img4Hovered}
          title={t("UI/UX Design")}
          text={t("UI/UX Design Text")}
        />
      </div>
    </div>
  );
};

export default Design;
