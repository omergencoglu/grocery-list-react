import React, { useContext } from "react";

import EditAndDelete from "../UI/EditAndDelete";
import ListContext from "../../store/list-context";

import classes from "./ItemsList.module.css";

const ItemsList = (props) => {
  const listCtx = useContext(ListContext);

  return (
    <div className={classes.container}>
      {listCtx.items.map((element) => (
        <li className={classes.listItem} key={element.id}>
          <div>{element.name}</div>
          <EditAndDelete id={element.id} />
        </li>
      ))}
      <button className={classes.clearButton}>Clear Items</button>
    </div>
  );
};

export default ItemsList;
