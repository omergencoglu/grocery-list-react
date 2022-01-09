import React, { useContext } from "react";

import Input from "../UI/Input";
import ListContext from "../../store/list-context";

import classes from "./NewItemForm.module.css";

const NewItemForm = () => {
  const listCtx = useContext(ListContext);

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    listCtx.addItem({
      id: Math.random(),
      name: capitalizeFirstLetter(event.target[0].value),
    });

    event.target[0].value = "";
  };

  return (
    <form onSubmit={submitHandler}>
      <Input placeholder="e.g. eggs" type="text" />
      <button className={classes.button} type="submit">
        Submit
      </button>
    </form>
  );
};

export default NewItemForm;
