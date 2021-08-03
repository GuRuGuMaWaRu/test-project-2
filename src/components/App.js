import React from "react";

import { DataProvider } from "../contexts/data";
import ListSelector from "./ListSelector";
import SortButton from "./SortButton";
import List from "./List";

const App = () => {
  return (
    <React.StrictMode>
      <DataProvider>
        <ListSelector />
        <SortButton />
        <List />
      </DataProvider>
    </React.StrictMode>
  );
};

export default App;
