import React from "react";
import "./settings.style.scss";
import { Container } from "ui-components";
import { SettingsPropsTypes } from "./settings.types";

const Settings: React.FC<SettingsPropsTypes> = () => {
  return (
    <Container className="settings-wrapper">
      <div className="settings-wrapper__header">
        <h1>Settings</h1>
      </div>
      <div className="settings-wrapper__content" />
    </Container>
  );
};

export default Settings;
