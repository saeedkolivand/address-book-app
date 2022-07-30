import React from "react";
import "./settings.style.scss";
import { Container, Select } from "ui-components";
import { SelectOptionType } from "ui-components/select/select.types";
import { SettingsPropsTypes } from "./settings.types";

const Settings: React.FC<SettingsPropsTypes> = () => {
  const dropdownOptions: SelectOptionType[] = [
    { label: "CH", value: "CH" },
    { label: "ES", value: "ES" },
    { label: "FR", value: "FR" },
    { label: "GB", value: "GB" },
  ];

  return (
    <Container className="settings-wrapper">
      <div className="settings-wrapper__header">
        <h1>Settings</h1>
      </div>
      <div className="settings-wrapper__content">
        <Select options={dropdownOptions} />
      </div>
    </Container>
  );
};

export default Settings;
