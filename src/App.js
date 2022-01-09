import React from "react";

import NewItem from "./components/NewItem/NewItem";
import ItemsList from "./components/ItemsList/ItemsList";
import Card from "./components/UI/Card";
import ListProvider from "./store/ListProvider";

const DUMMY_LIST = [
  { id: 1, item: "Banana" },
  { id: 2, item: "Apple" },
];

const App = () => {
  return (
    <ListProvider>
      <Card>
        <NewItem />
        <ItemsList items={DUMMY_LIST} />
      </Card>
    </ListProvider>
  );
};

export default App;
