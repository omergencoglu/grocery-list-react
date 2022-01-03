import React from "react";

import classes from "./EditAndDelete.module.css";

const EditAndDelete = () => {
  const editCLasses = `${classes.edit} fas fa-edit`;
  const deleteClasses = `${classes.delete} fas fa-trash-alt`;

  return (
    <div className={classes.container}>
      <i className={editCLasses}></i>
      <i className={deleteClasses}></i>
    </div>
  );
};

export default EditAndDelete;
