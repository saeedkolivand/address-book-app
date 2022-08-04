import React, { memo, useCallback, useEffect, useState } from "react";
import { Button, FormItemLabel } from "ui-components";
import "./select.style.scss";
import { SelectPropsTypes } from "./select.types";

const Select: React.FC<SelectPropsTypes> = (props) => {
  const {
    buttonStyle,
    dropdownStyle,
    listHeight,
    onChange,
    options,
    id = "",
    wrapperStyle,
    wrapperClassName = "",
    open = false,
    itemLabel,
    placeholder = "Select an option",
    value,
  } = props;

  const [selectedItem, setSelectedItem] = useState(value);
  const [isDropDownVisible, setIsDropDownVisible] = useState(open);

  const onClickInside = () => setIsDropDownVisible(!isDropDownVisible);
  const onClickOutSide = () => setIsDropDownVisible(false);

  useEffect(() => {
    const handleKeydown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isDropDownVisible) {
        onClickOutSide();
      }
    };

    document.addEventListener("keydown", handleKeydown);

    return () => {
      document.removeEventListener("keydown", handleKeydown);
    };
  }, [isDropDownVisible]);

  const onSelectMenuItem = useCallback((selected: string) => {
    setSelectedItem(selected);
    onChange && onChange(selected);
    onClickOutSide();
  }, []);

  return (
    <div
      className={`select-container ${wrapperClassName}`}
      id={id}
      style={wrapperStyle}
      aria-label="select-wrapper"
    >
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
      <Button
        onClick={onClickInside}
        className="select-container__menu-trigger flex-center"
        style={{
          border: isDropDownVisible ? "1px solid #3eaeff" : "",
          ...buttonStyle,
        }}
      >
        <span aria-label="select-container__placeholder">
          {selectedItem || placeholder}
        </span>
      </Button>

      {isDropDownVisible && (
        <div
          className="select-container-background absolute-center"
          onClick={onClickOutSide}
          style={{
            top: window.scrollY,
          }}
        />
      )}
      <nav
        className={`select-container__dropdown ${
          isDropDownVisible ? "show-select-menu" : ""
        }`}
        style={{
          height: listHeight,
          ...dropdownStyle,
        }}
      >
        <ul>
          {options?.map((option, index) => (
            <li key={option}>
              <div
                aria-label={`select-option-${index}`}
                onClick={() => onSelectMenuItem(option)}
              >
                {option}
              </div>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default memo(Select);
