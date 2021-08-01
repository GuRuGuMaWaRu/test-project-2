import React, { useState, useEffect } from "react";
import "../styles/App.css";

const App = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://api.hnpwa.com/v0/news/1.json")
      .then(res => res.json())
      .then(data => setData(data));
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  console.log(data);

  return (
    <div className="App">
      <div className="header">
        <div>Time Added</div>
        <div>Title</div>
        <div>Domain</div>
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

export default App;
