import React, { Fragment } from "react";

import NewItem from "./components/NewItem/NewItem";
import ItemsList from "./components/ItemsList/ItemsList";

import "./App.css";

function App() {
  return (
    <Fragment>
      <NewItem />
      <ItemsList />
    </Fragment>
  );
}

export default App;
