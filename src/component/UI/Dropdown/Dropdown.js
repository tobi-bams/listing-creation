import React, { useState } from "react";

import classes from "./Dropdown.module.css";
import DropdownImage from "../../../assets/Dropdown.svg";
import DropdownItemContainer from "./DropdownItemsContainer/DropdownItemsContainer";

function Dropdown(props) {
  const [isActive, setIsActive] = useState(false);

  return (
    <div
      className={classes.DropdownContainer}
    >
      <div className={classes.DropdownHeader}>
        <p
          className={`${classes.DropdownLabel} ${
            isActive ? classes.FocusDropDownLabel : ""
          }`}
        >
          {props.label}
        </p>
        <div
          className={classes.SelectedItemContainer}
          onClick={() => setIsActive(!isActive)}
        >
          <p className={classes.SelectedItem}>{props.selectedItem}</p>
          <img
            src={DropdownImage}
            alt="Dropdown"
            className={classes.DropdownImage}
            style={{
              transform: `${isActive ? "rotate(180deg)" : "rotate(0deg)"}`,
            }}
          />
        </div>
      </div>
      <DropdownItemContainer
        items={props.items}
        isActive={isActive}
        setIsActive={setIsActive}
        setSelectedItem={props.setSelectedItem}
      />
    </div>
  );
}


export default Dropdown;

// export default onClickOutside(Dropdown, clickOutsideConfig);
