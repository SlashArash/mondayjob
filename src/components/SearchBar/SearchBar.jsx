import React from "react";
import { Search } from "react-feather";

import "./Search.scss";

const SearchBar = () => {
  return (
    <div className="search-container">
      <Search className="search-icon" />
      <input
        type="text"
        aria-label="Search"
        placeholder="Job Title, Company Name"
        className="search-input"
      />
    </div>
  );
};

export default SearchBar;
