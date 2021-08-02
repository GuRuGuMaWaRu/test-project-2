import React from "react";

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
        <div className="header-time" onClick={() => sortData("time")}>
          Time Added
        </div>
        <div className="header-title" onClick={() => sortData("title")}>
          Title
        </div>
        <div className="header-title-mobile">Title</div>
        <div className="header-domain" onClick={() => sortData("domain")}>
          Domain
        </div>
      </div>
      {data.map(item => (
        <a className="row" key={item.id} href={item.url} target="_blank">
          <div className="row-time">{item.time}</div>
          <div className="row-title">
            {item.title?.length > 100
              ? `${item.title.slice(0, 100)}...`
              : item.title}
          </div>
          <div className="row-domain">
            {item.domain?.length > 30
              ? `${item.domain.slice(0, 30)}...`
              : item.domain}
          </div>
        </a>
      ))}
      {status !== "loading" && status !== "all loaded" && (
        <div className="load-indicator" ref={targetRef}>
          More is coming...
        </div>
      )}
    </div>
  );
};

export default List;
