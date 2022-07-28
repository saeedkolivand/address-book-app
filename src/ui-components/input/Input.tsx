import React, { useEffect } from "react";
import { ReactComponent as ClearIcon } from "assets/icons/delete.svg";
import { InputPropsTypes } from "./input.types";
import "./input.style.scss";

const Input: React.FC<InputPropsTypes> = (props) => {
  const { className = "", value, onClear, ...rest } = props;

  useEffect(() => {
    const handleClearOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape" && onClear) {
        onClear();
      }
    };

    window.addEventListener("keypress", handleClearOnEscape);

    return () => {
      document.removeEventListener("keypress", handleClearOnEscape);
    };
  }, []);

  return (
    <div className="input-wrapper">
      <input
        {...rest}
        className={`input-wrapper__input ${className}`}
        value={value}
      />
      {value && (
        <ClearIcon className="input-wrapper__clear-icon" onClick={onClear} />
      )}
    </div>
  );
};

export default Input;
