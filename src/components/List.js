import React, { useRef } from "react";

import { useData } from "../contexts/data";
import useIntersectionObserver from "../hooks/useIntersectionObserver";
import "../styles/List.css";

const List = () => {
  const { data, status, sortData, loadMoreData } = useData();

  const [targetRef] = useIntersectionObserver({
    activationFn: () => {
      loadMoreData();
    },
  });

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
      {
        (status !== "loading" && status !== "all loaded") &&
        <div className="load-indicator" ref={targetRef}>More is coming...</div>
      }
    </div>
  );
};

export default List;
