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
      <div>Time Added</div>
      <div>Title</div>
      <div>Domain</div>
      {data.map(item => (
        <React.Fragment key={item.id}>
          <div>{item.time}</div>
          <div>{item.title}</div>
          <div>{item.domain}</div>
        </React.Fragment>
      ))}
    </div>
  );
};

export default App;
