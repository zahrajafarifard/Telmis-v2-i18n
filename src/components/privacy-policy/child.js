import React from "react";
import { useTranslation } from "react-i18next";

const Child = () => {
  const { t } = useTranslation();

  return (
    <div className="my-20  mx-auto screen540:w-[94%] ">
      <div
        className="text-[#AC4C75] font-bold text-4xl
          screen1250:text-3xl
          screen450:text-2xl
        "
      >
        {t("Introduction")}
      </div>
      <h4
        className="text-[#555858] w-[80%] leading-7 text-xl mx-auto mt-8
        screen1250:text-lg
        screen750:text-base
        "
      >
        {t("IntroText")}
      </h4>

      <div
        className="text-[#AC4C75] font-bold text-4xl mt-20 mb-6 
          screen1250:text-3xl
          screen450:text-2xl
        "
      >
        {t("Info")}
      </div>
      <h4
        className="text-[#555858] w-[80%] leading-7 text-xl mx-auto mt-8
        screen1250:text-lg
        screen750:text-base
        "
      >
        {t("InfoText")}
      </h4>

      <div
        className="text-[#AC4C75] font-bold text-4xl mt-20
          screen1250:text-3xl
          screen450:text-2xl
        "
      >
        {t("HowWeUse")}
      </div>

      <h4
        className="text-[#555858] w-[80%] leading-7 text-xl mx-auto mt-8
        screen1250:text-lg
        screen750:text-base
        "
      >
        {t("HowWeUseText")}
      </h4>

      <div
        className="text-[#AC4C75] font-bold text-4xl mt-20
          screen1250:text-3xl
          screen450:text-2xl
        "
      >
        {t("ShareInfo")}
      </div>

      <h4
        className="text-[#555858] w-[80%] leading-7 text-xl mx-auto mt-8
        screen1250:text-lg
        screen750:text-base
        "
      >
        {t("ShareInfoText")}
      </h4>

      <div
        className="text-[#AC4C75] font-bold text-4xl mt-20
          screen1250:text-3xl
          screen450:text-2xl
        "
      >
        {t("DataSecurity")}
      </div>

      <h4
        className="text-[#555858] w-[80%] leading-7 text-xl mx-auto mt-8
        screen1250:text-lg
        screen750:text-base
        "
      >
        {t("DataSecurityText")}
      </h4>
      <div
        className="text-[#AC4C75] font-bold text-4xl mt-20
          screen1250:text-3xl
          screen450:text-2xl
        "
      >
        {t("Rights")}
      </div>

      <h4
        className="text-[#555858] w-[80%] leading-7 text-xl mx-auto mt-8
        screen1250:text-lg
        screen750:text-base
        "
      >
        {t("RightsText")}
      </h4>
      <div
        className="text-[#AC4C75] font-bold text-4xl mt-20
          screen1250:text-3xl
          screen450:text-2xl
        "
      >
        {t("ChangePrivacy")}
      </div>

      <h4
        className="text-[#555858] w-[80%] leading-7 text-xl mx-auto mt-8
        screen1250:text-lg
        screen750:text-base
        "
      >
        {t("ChangePrivacyText")}
      </h4>
    </div>
  );
};

export default Child;
