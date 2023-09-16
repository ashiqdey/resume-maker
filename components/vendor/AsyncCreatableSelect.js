import React from "react";
import classNames from "classnames";
import AsyncCreatableSelect from "react-select/async-creatable"

const AsyncCreatableSelectCustom = ({
    isClearable = false,
    ...props }) => {
    // Control
    const classes = classNames(
        props.className && props.className,
        props.isInvalid && "is-invalid"
    );

    return (
        <AsyncCreatableSelect
            cacheOptions
            classNamePrefix="cselect"
            className={classes}
            isClearable={isClearable}
            {...props}
        />
    );
};

export default AsyncCreatableSelectCustom;
