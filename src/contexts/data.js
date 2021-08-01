import React, { useState, useEffect } from "react";

const DataContext = React.createContext(null);

const useData = () => React.useContext(DataContext);

const DataProvider = ({ children }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://api.hnpwa.com/v0/news/1.json")
      .then(res => res.json())
      .then(data => {
        const normalizedData = data.map(data => {
          const dateObj = new Date(data.time);
          return { ...data, time: dateObj.toDateString() };
        });

        setData(data);
      });
  }, []);

  const sortData = type => {
    const sortedData = [...data].sort((a, b) => {
      if (a[type] < b[type]) {
        return -1;
      }
      if (a[type] > b[type]) {
        return 1;
      }

      return 0;
    });

    setData(sortedData);
  };

  return (
    <DataContext.Provider
      value={{ data, status: data ? "ready" : "loading", sortData }}
    >
      {children}
    </DataContext.Provider>
  );
};

export { DataProvider, useData };
