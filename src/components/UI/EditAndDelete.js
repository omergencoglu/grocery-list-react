import React, { useContext } from "react";

import ListContext from "../../store/list-context";

import classes from "./EditAndDelete.module.css";

const EditAndDelete = (props) => {
  const listCtx = useContext(ListContext);

  const editClickHandler = () => {
    listCtx.editItem(props.id);
  };
  const deleteClickHandler = () => {
    listCtx.removeItem(props.id);
  };

  const editCLasses = `${classes.edit} fas fa-edit`;
  const deleteClasses = `${classes.delete} fas fa-trash-alt`;

  return (
    <div className={classes.container}>
      <i className={editCLasses} onClick={editClickHandler}></i>
      <i className={deleteClasses} onClick={deleteClickHandler}></i>
    </div>
  );
};

export default EditAndDelete;
