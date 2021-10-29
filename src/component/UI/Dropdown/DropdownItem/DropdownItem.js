import React from "react";

import classes from "./DropdownItem.module.css";

const DropdownItem = (props) => {
  const onClickHandler = (item) => {
    props.setSelectedItem(item);
    props.setIsActive(false);
  };
  return (
    <div
      className={classes.DropdownItemContainer}
      onClick={() => onClickHandler(props.item)}
    >
      <p className={classes.DropdownItem}>{props.item}</p>
    </div>
  );
};

export default DropdownItem;
