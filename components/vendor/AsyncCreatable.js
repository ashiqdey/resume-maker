import React from "react";
import classNames from "classnames";
import Creatable from "react-select/async-creatable";

const CustomSelect = ({ isClearable = false, ...props }) => {
  // Control
  const classes = classNames(
    props.className && props.className,
    props.isInvalid && "is-invalid"
  );

  return (
    <Creatable
      classNamePrefix="cselect"
      className={classes}
      isClearable={isClearable}
      menuPosition="auto"
      createOptionPosition="first"
      {...props}
    />
  );
};

export default CustomSelect;
