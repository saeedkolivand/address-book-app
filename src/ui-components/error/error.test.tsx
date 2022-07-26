import { cleanup, render, screen } from "@testing-library/react";
import React from "react";
import Error from "./Error";

export const initErrorModalPortal = () => {
  const div = document.createElement("div");
  const body = document.querySelector("body")!;
  div.setAttribute("id", "error-modal");
  body.appendChild(div);
};

describe("Error test cases", () => {
  beforeAll(initErrorModalPortal);
  afterAll(cleanup);

  it("should render Error portal", () => {
    const callbackFunction = jest.fn();

    render(
      <Error
        hasError
        errorMessage="errorMessage"
        callbackFunction={callbackFunction}
      />
    );

    const errorElement = screen.getByLabelText("error-wrapper");
    const errorText = screen.getByText("errorMessage");

    expect(errorElement.classList.contains("show-error")).toBeTruthy();
    expect(errorText).toBeTruthy();
  });
});
