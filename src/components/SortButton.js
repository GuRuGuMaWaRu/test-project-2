import React from "react";

import { useData } from "../contexts/data";
import "../styles/SortButton.css";

const SortButton = () => {
  const { sortData } = useData();

  return (
    <button className="sort-button" onClick={() => sortData("title")}>
      Sort
    </button>
  );
};

export default SortButton;
