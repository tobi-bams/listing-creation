import React from "react";

import classes from "./DropdownItemsContainer.module.css";
import DropdownItem from "../DropdownItem/DropdownItem";

const DropdownItemContainer = (props) => {
  return (
    <>
      {props.isActive && (
        <div className={classes.DropDownItemContainer}>
          {props.items &&
            props.items.map((item, index) => {
              return (
                <DropdownItem
                  item={item}
                  key={index}
                  setIsActive={props.setIsActive}
                  setSelectedItem={props.setSelectedItem}
                />
              );
            })}
        </div>
      )}
    </>
  );
};

export default DropdownItemContainer;
