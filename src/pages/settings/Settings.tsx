import React from "react";
import { Container, Divider, Select } from "ui-components";
import { Link } from "react-router-dom";
import { HomePathNames } from "pages/home/home.route";
import { ReactComponent as BackIcon } from "assets/icons/back.svg";
import { useDispatch, useSelector } from "app/redux/redux.hooks";
import { NationalityValuesTypes, SettingsPropsTypes } from "./settings.types";
import "./settings.style.scss";
import { addNationalityAction } from "./settings.slice";

export const dropdownOptions = ["default", "CH", "ES", "FR", "GB"];

const Settings: React.FC<SettingsPropsTypes> = () => {
  const { nationality } = useSelector((state) => state.settingsReducer);
  const dispatch = useDispatch();

  const onSelectNationality = (value: NationalityValuesTypes) =>
    dispatch(addNationalityAction(value));

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

      <div className="settings-wrapper__content flex-center">
        <div>Select Nationality :</div>
        <Select
          options={dropdownOptions}
          placeholder="Select a nationality"
          value={nationality}
          onChange={onSelectNationality}
        />
      </div>
    </Container>
  );
};

export default Settings;
