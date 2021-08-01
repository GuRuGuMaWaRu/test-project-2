import React from "react";

import { useData } from "../contexts/data";
import "../styles/List.css";

const List = () => {
  const { data, status, sortData } = useData();

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="header">
        <div onClick={() => sortData("time")}>Time Added</div>
        <div onClick={() => sortData("title")}>Title</div>
        <div onClick={() => sortData("domain")}>Domain</div>
      </div>
      {data.map(item => (
        <a className="row" key={item.id} href={item.url} target="_blank">
          <div>{item.time}</div>
          <div>{item.title}</div>
          <div>{item.domain}</div>
        </a>
      ))}
    </div>
  );
};

export default List;
