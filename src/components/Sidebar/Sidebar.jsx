import React, { memo, useState } from "react";
import { Home, User, Settings } from "react-feather";
import { useTranslation } from "react-i18next";

import logo from "assets/images/mondayjob.png";
import "./Sidebar.scss";

const Sidebar = () => {
  const [lang, setLang] = useState("en");
  const { t, i18n } = useTranslation();

  const handleChangeLang = (e) => {
    const { lang } = e.target.dataset;
    setLang(lang);
    i18n.changeLanguage(lang);
  };

  return (
    <aside className="sidebar">
      <img src={logo} alt="MondayJob" className="logo" />
      <ul>
        <li>
          <a href="#!" className=" nav-link active">
            <Home />
            <span>{t("Home")}</span>
          </a>
        </li>
        <li>
          <a href="#!" className="nav-link">
            <User />
            <span>{t("Profile")}</span>
          </a>
        </li>
        <li>
          <a href="#!" className="nav-link">
            <Settings />
            <span>{t("Settings")}</span>
          </a>
        </li>
      </ul>
      <div className="languages">
        <span
          data-lang="en"
          onClick={handleChangeLang}
          className={lang === "en" ? "active" : ""}
        >
          En
        </span>
        <span
          data-lang="fr"
          onClick={handleChangeLang}
          className={lang === "fr" ? "active" : ""}
        >
          Fr
        </span>
      </div>
    </aside>
  );
};

export default memo(Sidebar);
