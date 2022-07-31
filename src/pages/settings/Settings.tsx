import React from "react";
import { Container, Divider, Select } from "ui-components";
import { SelectOptionType } from "ui-components/select/select.types";
import { Link } from "react-router-dom";
import { HomePathNames } from "pages/home/home.route";
import { ReactComponent as BackIcon } from "assets/icons/back.svg";
import { SettingsPropsTypes } from "./settings.types";
import "./settings.style.scss";

const dropdownOptions: SelectOptionType[] = [
  { label: "CH", value: "CH" },
  { label: "ES", value: "ES" },
  { label: "FR", value: "FR" },
  { label: "GB", value: "GB" },
];

const Settings: React.FC<SettingsPropsTypes> = () => {
  return (
    <Container className="settings-wrapper">
      <div className="settings-wrapper__header flex-center">
        <Link
          to={HomePathNames.root}
          className="settings-wrapper__header--back flex-center"
        >
          <BackIcon />
        </Link>
        <div>Settings</div>
        <div />
      </div>

      <Divider />

      <div className="settings-wrapper__content">
        <div className="flex-center" style={{ gap: 16 }}>
          <div>Select People Nationality :</div>
          <Select options={dropdownOptions} />
        </div>
      </div>
    </Container>
  );
};

export default Settings;
