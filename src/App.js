import React from "react";

import NewItem from "./components/NewItem/NewItem";
import ItemsList from "./components/ItemsList/ItemsList";
import Card from "./components/UI/Card";
import ListProvider from "./store/ListProvider";

const App = () => {
  return (
    <ListProvider>
      <Card>
        <NewItem />
        <ItemsList />
      </Card>
    </ListProvider>
  );
};

export default App;
