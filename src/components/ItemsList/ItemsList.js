import React, { useContext } from "react";

import Delete from "../UI/Delete";
import ListContext from "../../store/list-context";

import classes from "./ItemsList.module.css";

const ItemsList = () => {
  const listCtx = useContext(ListContext);

  return (
    <div className={classes.container}>
      {listCtx.items.map((element) => (
        <li className={classes.listItem} key={element.id}>
          <div>{element.name}</div>
          <Delete id={element.id} />
        </li>
      ))}
      <button className={classes.clearButton}>Clear Items</button>
    </div>
  );
};

export default ItemsList;
