import React from "react";

import EditAndDelete from "../UI/EditAndDelete";

import classes from "./ItemsList.module.css";

const ItemsList = () => {
  return (
    <div className={classes.container}>
      <li className={classes.listItem}>
        <div>Omer</div>
        <EditAndDelete />
      </li>
      <li className={classes.listItem}>
        <div>deneme</div>
        <EditAndDelete />
      </li>
      <li className={classes.listItem}>
        <div>deneme</div>
        <EditAndDelete />
      </li>
      <button className={classes.clearButton}>Clear Items</button>
    </div>
  );
};

export default ItemsList;
