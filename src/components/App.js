import React from "react";

import { DataProvider } from "../contexts/data";
import List from "./List";
import SortButton from "./SortButton";

const App = () => {
  return (
    <DataProvider>
      <SortButton />
      <List />
    </DataProvider>
  );
};

export default App;
