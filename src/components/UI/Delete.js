import React, { useContext } from "react";

import ListContext from "../../store/list-context";

import classes from "./Delete.module.css";

const Delete = (props) => {
  const listCtx = useContext(ListContext);

  const deleteClickHandler = () => {
    listCtx.removeItem(props.id);
  };

  const deleteClasses = `${classes.delete} fas fa-trash-alt`;

  return (
    <div className={classes.container}>
      <i className={deleteClasses} onClick={deleteClickHandler}></i>
    </div>
  );
};

export default Delete;
