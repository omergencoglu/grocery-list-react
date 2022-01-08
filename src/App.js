import React from "react";

import NewItem from "./components/NewItem/NewItem";
import ItemsList from "./components/ItemsList/ItemsList";
import Card from "./components/UI/Card";

const DUMMY_LIST = [
  { id: 1, item: "Banana" },
  { id: 2, item: "Apple" },
];

const App = () => {
  return (
    <Card>
      <NewItem />
      <ItemsList items={DUMMY_LIST} />
    </Card>
  );
};

export default App;
