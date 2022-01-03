import React from "react";

import classes from "./ItemsList.module.css";

const ItemsList = () => {
  return (
    <div className={classes.container}>
      <li className={classes.listItem}>omer</li>
      <li className={classes.listItem}>deneme</li>
      <li className={classes.listItem}>deneme</li>
      <button className={classes.clearButton}>Clear Items</button>
    </div>
  );
};

export default ItemsList;
