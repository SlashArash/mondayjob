import React, { memo } from "react";
import { Search } from "react-feather";
import { useTranslation } from "react-i18next";

import "./Search.scss";

const SearchBar = () => {
  const { t } = useTranslation();

  return (
    <div className="search-container">
      <Search className="search-icon" />
      <input
        type="text"
        aria-label="Search"
        placeholder={t("Job Title, Company Name")}
        className="search-input"
      />
    </div>
  );
};

export default memo(SearchBar);
