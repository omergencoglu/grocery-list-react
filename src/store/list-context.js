import React from "react";

const ListContext = React.createContext({
  items: [],
  addItem: (item) => {},
  editItem: (item) => {},
  removeItem: (id) => {},
});

export default ListContext;
