import React, { useEffect } from "react";
import { ReactComponent as ClearIcon } from "assets/icons/delete.svg";
import { FormItemLabel } from "ui-components";
import { InputPropsTypes } from "./input.types";
import "./input.style.scss";

const Input: React.FC<InputPropsTypes> = (props) => {
  const { className = "", value, onClear, itemLabel, ...rest } = props;

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
    <div className="input-wrapper flex-center">
      {itemLabel && (
        <FormItemLabel
          {...itemLabel}
          label={itemLabel?.title || ""}
          style={{
            alignSelf: "flex-start",
            ...itemLabel?.style,
          }}
        />
      )}
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
