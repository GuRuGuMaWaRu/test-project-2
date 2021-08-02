import React, { useState, useEffect, useCallback } from "react";

const DataContext = React.createContext(null);

const useData = () => React.useContext(DataContext);

const DataProvider = ({ children }) => {
  const [page, setPage] = useState(1);
  const [data, setData] = useState(null);
  const [dataStatus, setDataStatus] = useState("loading");

  // const loadData = () => {
  //   console.log('loading data...');
  //   console.log('page:', page);
  //   fetch(`https://api.hnpwa.com/v0/news/${page}.json`)
  //     .then(res => res.json())
  //     .then(data => {
  //       // const normalizedData = data.map(data => {
  //       //   const dateObj = new Date(data.time);
  //       //   return { ...data, time: dateObj.toDateString() };
  //       // });

  //       setData(data);
  //     });
  // };

  useEffect(() => {
    fetch(`https://api.hnpwa.com/v0/news/${page}.json`)
      .then(res => res.json())
      .then(data => {
        // const normalizedData = data.map(data => {
        //   const dateObj = new Date(data.time);
        //   return { ...data, time: dateObj.toDateString() };
        // });

        setData(prevData => {
          if (!prevData) {
            if (dataStatus === "loading") {
              setDataStatus("ready");
            }
              
            return data;
          } else {
            if (data.length < 1) {
              setDataStatus("all loaded")
            }

            return [...prevData, ...data];
          }
        });
      });
  }, [page]);

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

  const loadMoreData = () => {
    setPage(prevState => prevState + 1);
    // loadData();
  };

  return (
    <DataContext.Provider
      value={{ data, status: dataStatus, sortData, loadMoreData }}
    >
      {children}
    </DataContext.Provider>
  );
};

export { DataProvider, useData };
