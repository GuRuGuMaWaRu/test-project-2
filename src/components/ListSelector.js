import React from "react";

import { useData } from "../contexts/data";
import "../styles/ListSelector.css";

const ListSelector = () => {
  const { source, changeSource } = useData();

  const channels = [
    { name: "News", link: "https://api.hnpwa.com/v0/news/" },
    { name: "Newest", link: "https://api.hnpwa.com/v0/newest/" },
  ];

  return (
    <div className="list-selector">
      {channels.map(channel => (
        <div
          key={channel.name}
          className={`${
            source === channel.link
              ? "list-selector-btn--selected"
              : "list-selector-btn"
          }`}
          onClick={() => changeSource(channel.link)}
        >
          {channel.name}
        </div>
      ))}
    </div>
  );
};

export default ListSelector;
