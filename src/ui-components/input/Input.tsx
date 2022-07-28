import React from "react";
import { ReactComponent as ClearIcon } from "assets/icons/delete.svg";
import { InputPropsTypes } from "./input.types";
import "./input.style.scss";

const Input: React.FC<InputPropsTypes> = (props) => {
  const { className = "", onClear, ...rest } = props;

  return (
    <div className="input-wrapper">
      <input {...rest} className={`input-wrapper__input ${className}`} />
      {rest.value && (
        <ClearIcon className="input-wrapper__clear-icon" onClick={onClear} />
      )}
    </div>
  );
};

export default Input;
