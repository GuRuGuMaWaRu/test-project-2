import React from "react";

import { useData } from "../contexts/data";
import "../styles/ListSelector.css";

const ListSelector = () => {
  const { changeSource } = useData();

  return (
    <div className="list-selector">
      <div
        className="list-selector-btn"
        onClick={() => changeSource("https://api.hnpwa.com/v0/news/")}
      >
        News
      </div>
      <div
        className="list-selector-btn"
        onClick={() => changeSource("https://api.hnpwa.com/v0/newest/")}
      >
        Newest
      </div>
    </div>
  );
};

export default ListSelector;
