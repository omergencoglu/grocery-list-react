import React from "react";

const ListContext = React.createContext({
  items: [],
  addItem: (item) => {},
  removeItem: (id) => {},
  removeAll: () => {},
});

export default ListContext;
