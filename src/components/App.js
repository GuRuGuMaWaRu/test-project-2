import React from "react";

import { DataProvider } from "../contexts/data";
import List from "./List";

const App = () => {
  return (
    <DataProvider>
      <List />
    </DataProvider>
  );
};

export default App;
