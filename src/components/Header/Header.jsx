import React, { memo } from "react";
import { useTranslation } from "react-i18next";

import "./Header.scss";

const Header = () => {
  const { t } = useTranslation();

  return (
    <header className="header">
      <h2>{t("Job Seeker")}</h2>
      <p>2543 {t("Available Jobs")}</p>
    </header>
  );
};

export default memo(Header);
