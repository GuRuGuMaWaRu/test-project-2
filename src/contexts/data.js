import React, { useState, useEffect } from "react";

const DataContext = React.createContext(null);

const useData = () => React.useContext(DataContext);

const DataProvider = ({ children }) => {
  const [data, setData] = useState({
    data: null,
    page: 1,
    status: "loading",
    source: "https://api.hnpwa.com/v0/news/",
  });

  useEffect(() => {
    fetch(`${data.source}${data.page}.json`)
      .then(res => res.json())
      .then(data => {
        setData(prevState => {
          if (!prevState.data) {
            return { ...prevState, data, status: "ready" };
          } else {
            if (data.length < 1) {
              return { ...prevState, status: "all loaded" };
            }

            return { ...prevState, data: [...prevState.data, ...data] };
          }
        });
      });
  }, [data.page, data.source]);

  const sortData = type => {
    const sortedData = [...data.data].sort((a, b) => {
      if (a[type] < b[type]) {
        return -1;
      }
      if (a[type] > b[type]) {
        return 1;
      }

      return 0;
    });

    setData(prevState => ({ ...prevState, data: sortedData }));
  };

  const loadMoreData = () => {
    setData(prevState => ({ ...prevState, page: prevState.page + 1 }));
  };

  const changeSource = source => {
    setData({ data: null, status: "loading", source, page: 1 });
  };

  return (
    <DataContext.Provider
      value={{
        data: data.data,
        status: data.status,
        sortData,
        loadMoreData,
        changeSource,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export { DataProvider, useData };
