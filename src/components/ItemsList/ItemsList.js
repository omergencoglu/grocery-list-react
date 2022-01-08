import React from "react";

import EditAndDelete from "../UI/EditAndDelete";

import classes from "./ItemsList.module.css";

const ItemsList = (props) => {
  return (
    <div className={classes.container}>
      {props.items.map((element) => (
        <li className={classes.listItem} key={element.id}>
          <div>{element.item}</div>
          <EditAndDelete />
        </li>
      ))}
      <button className={classes.clearButton}>Clear Items</button>
    </div>
  );
};

export default ItemsList;
