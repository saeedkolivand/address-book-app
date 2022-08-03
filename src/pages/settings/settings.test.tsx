import { cleanup, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "app/redux/store";
import { initLoadingPortal } from "ui-components/loading/loading.test";
import { initErrorModalPortal } from "ui-components/error/error.test";
import { BrowserRouter } from "react-router-dom";
import Settings from "./Settings";
import SettingsSlice, { addNationalityAction } from "./settings.slice";
import { SettingsInitialStateReduxTypes } from "./settings.types";

describe("Settings page test cases", () => {
  beforeAll(() => {
    initLoadingPortal();
    initErrorModalPortal();
  });

  afterAll(cleanup);

  const MockedSettings = () => {
    return (
      <BrowserRouter>
        <Provider store={store}>
          <Settings />
        </Provider>
      </BrowserRouter>
    );
  };

  it("should render settings page", () => {
    render(<MockedSettings />);

    const settingsElement = screen.getByLabelText("settings-wrapper");
    expect(settingsElement).toBeTruthy();
  });
});

describe("Settings page Redux test cases", () => {
  afterAll(cleanup);
  const { reducer } = SettingsSlice;

  it("should return the initial state", () => {
    expect(reducer(undefined, { type: "" })).toEqual({
      nationality: "default",
    });
  });

  it("should set the new nationality", () => {
    const previousState: SettingsInitialStateReduxTypes = {
      nationality: "default",
    };

    expect(reducer(previousState, addNationalityAction("ES"))).toEqual({
      nationality: "ES",
    });
  });
});
