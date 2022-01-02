import React from "react";

import Input from "../UI/Input";

import classes from "./NewItemForm.module.css";

const NewItemForm = () => {
  return (
    <form>
      <Input placeholder="e.g. eggs" type="text" />
      <button className={classes.button}>Submit</button>
    </form>
  );
};

export default NewItemForm;
