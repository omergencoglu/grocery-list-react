import React from "react";

import NewItem from "./components/NewItem/NewItem";
import ItemsList from "./components/ItemsList/ItemsList";
import Card from "./components/UI/Card";

const App = () => {
  return (
    <Card>
      <NewItem />
      <ItemsList />
    </Card>
  );
};

export default App;
