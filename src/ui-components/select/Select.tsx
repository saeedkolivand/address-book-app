import React, { memo, useCallback, useEffect, useRef, useState } from "react";
import { Button } from "ui-components";
import { useOnClickOutside } from "usehooks-ts";
import "./select.style.scss";
import { SelectPropsTypes, SelectOptionType } from "./select.types";

const Select: React.FC<SelectPropsTypes> = (props) => {
  const { dropdownStyle, listHeight, onChange, options } = props;

  const [isDropDownVisible, setIsDropDownVisible] = useState(false);

  const dropdownRef = useRef(null);
  const onClickInside = () => setIsDropDownVisible(true);
  const onClickOutSide = () => setIsDropDownVisible(false);
  useOnClickOutside(dropdownRef, onClickOutSide);

  const [selectedItem, setSelectedItem] = useState<SelectOptionType>({
    label: "Select an option",
    value: "",
  });

  const onSelectMenuItem = useCallback((selected: SelectOptionType) => {
    setSelectedItem(selected);
    onClickOutSide();
    onChange && onChange(selected);
  }, []);

  useEffect(() => {
    const handleKeydown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isDropDownVisible) {
        setIsDropDownVisible(false);
      }
    };

    document.addEventListener("keydown", handleKeydown);

    return () => {
      document.removeEventListener("keydown", handleKeydown);
    };
  }, []);

  return (
    <div className="select-container">
      <Button
        onClick={!isDropDownVisible ? onClickInside : () => null}
        className="select-container__menu-trigger flex-center"
      >
        <span>{selectedItem.label}</span>
      </Button>
      <nav
        ref={dropdownRef}
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
