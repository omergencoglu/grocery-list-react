import React, { useReducer } from "react";

import ListContext from "./list-context";

const defaultListState = {
  items: [],
};

const listReducer = (state, action) => {
  if (action.type === "ADD") {
    const existingListItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const existingListItem = state.items[existingListItemIndex];

    let updatedItems;

    if (existingListItem) {
      const updatedItem = {
        ...existingListItem,
      };
      updatedItems = [...state.items];
      updatedItems[existingListItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }

    return {
      items: updatedItems,
    };
  }

  if (action.type === "EDIT") {
    console.log("editttt");
    // const existingListItemIndex = state.items.findIndex(
    //   (item) => item.id === action.item.id
    // );
    // const existingListItem = state.items[existingListItemIndex];
    // let updatedItems;
    // if (existingListItem) {
    //   const updatedItem = {
    //     ...existingListItem,
    //   };
    //   updatedItems = [...state.items];
    //   updatedItems[existingListItemIndex] = updatedItem;
    // } else {
    //   updatedItems = state.items.concat(action.item);
    // }
    // return {
    //   items: updatedItems,
    // };
  }

  if (action.type === "REMOVE") {
    let updatedItems;
    updatedItems = state.items.filter((item) => item.id !== action.id);
    return {
      items: updatedItems,
    };
  }
  return defaultListState;
};

const ListProvider = (props) => {
  const [listState, dispatchListAction] = useReducer(
    listReducer,
    defaultListState
  );

  const addItemToListHandler = (item) => {
    dispatchListAction({ type: "ADD", item: item });
  };

  const editItemHandler = (item) => {
    dispatchListAction({ type: "EDIT", item: item });
  };

  const removeItemFromListHandler = (id) => {
    dispatchListAction({ type: "REMOVE", id: id });
  };

  const cartContext = {
    items: listState.items,
    addItem: addItemToListHandler,
    editItem: editItemHandler,
    removeItem: removeItemFromListHandler,
  };

  return (
    <ListContext.Provider value={cartContext}>
      {props.children}
    </ListContext.Provider>
  );
};

export default ListProvider;
