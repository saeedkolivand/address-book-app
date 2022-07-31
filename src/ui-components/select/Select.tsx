import React, { memo, useCallback, useEffect, useState } from "react";
import { Button, FormItemLabel } from "ui-components";
import "./select.style.scss";
import { SelectPropsTypes, SelectOptionType } from "./select.types";

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
  } = props;

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

  const [selectedItem, setSelectedItem] = useState<SelectOptionType>({
    label: "Select an option",
    value: "",
  });

  const onSelectMenuItem = useCallback((selected: SelectOptionType) => {
    setSelectedItem(selected);
    onClickOutSide();
    onChange && onChange(selected);
  }, []);

  return (
    <div
      className={`select-container ${wrapperClassName}`}
      id={id}
      style={wrapperStyle}
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
          boxShadow: isDropDownVisible ? "0 1px 8px rgba(0, 0, 0, 0.3)" : "",
          ...buttonStyle,
        }}
      >
        <span>{selectedItem.label}</span>
      </Button>
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
          {options?.map((option) => (
            <li key={option.value + option.label}>
              <div onClick={() => onSelectMenuItem(option)}>{option.label}</div>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default memo(Select);
