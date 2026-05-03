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
        {t("IntroTextTerms")}
      </h4>

      <div
        className="text-[#AC4C75] font-bold text-4xl mt-20 mb-6 
          screen1250:text-3xl
          screen450:text-2xl
        "
      >
        {t("Acceptance")}
      </div>
      <h4
        className="text-[#555858] w-[80%] leading-7 text-xl mx-auto mt-8
        screen1250:text-lg
        screen750:text-base
        "
      >
        {t("AcceptanceText")}
      </h4>

      <div
        className="text-[#AC4C75] font-bold text-4xl mt-20
          screen1250:text-3xl
          screen450:text-2xl
        "
      >
        {t("ChangesTerms")}
      </div>

      <h4
        className="text-[#555858] w-[80%] leading-7 text-xl mx-auto mt-8
        screen1250:text-lg
        screen750:text-base
        "
      >
        {t("ChangesTermsText")}
      </h4>

      <div
        className="text-[#AC4C75] font-bold text-4xl mt-20
          screen1250:text-3xl
          screen450:text-2xl
        "
      >
        {t("UseServices")}
      </div>

      <h4
        className="text-[#555858] w-[80%] leading-7 text-xl mx-auto mt-8
        screen1250:text-lg
        screen750:text-base
        "
      >
        {t("UseServicesText")}
      </h4>

      <div
        className="text-[#AC4C75] font-bold text-4xl mt-20
          screen1250:text-3xl
          screen450:text-2xl
        "
      >
        {t("Intellectual")}
      </div>

      <h4
        className="text-[#555858] w-[80%] leading-7 text-xl mx-auto mt-8
        screen1250:text-lg
        screen750:text-base
        "
      >
        {t("IntellectualText")}
      </h4>
      <div
        className="text-[#AC4C75] font-bold text-4xl mt-20
          screen1250:text-3xl
          screen450:text-2xl
        "
      >
        {t("Limitation")}
      </div>

      <h4
        className="text-[#555858] w-[80%] leading-7 text-xl mx-auto mt-8
        screen1250:text-lg
        screen750:text-base
        "
      >
        {t("LimitationText")}
      </h4>
      <div
        className="text-[#AC4C75] font-bold text-4xl mt-20
          screen1250:text-3xl
          screen450:text-2xl
        "
      >
        {t("ContactInformation")}
      </div>

      <h4
        className="text-[#555858] w-[80%] leading-7 text-xl mx-auto mt-8
        screen1250:text-lg
        screen750:text-base
        "
      >
        {t("ContactInformationText")}
      </h4>
      <div
        className="text-[#AC4C75] font-bold text-4xl mt-20
          screen1250:text-3xl
          screen450:text-2xl
        "
      >
        {t("Termination")}
      </div>

      <h4
        className="text-[#555858] w-[80%] leading-7 text-xl mx-auto mt-8
        screen1250:text-lg
        screen750:text-base
        "
      >
        {t("TerminationText")}
      </h4>
    </div>
  );
};

export default Child;
