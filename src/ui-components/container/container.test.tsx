import React from "react";
import { cleanup, render, screen } from "@testing-library/react";
import Container from "./Container";
import { initLoadingPortal } from "../loading/loading.test";
import { initErrorModalPortal } from "../error/error.test";

describe("Container test cases", () => {
  beforeAll(() => {
    initLoadingPortal();
    initErrorModalPortal();
  });
  afterAll(cleanup);

  it("should render children", () => {
    const MockContainer = (props: { text: string }) => {
      const { text } = props;
      return (
        <Container>
          <p aria-label="container">{text}</p>
        </Container>
      );
    };

    render(<MockContainer text="text" />);
    const searchBoxElement = screen.getByText("text");
    expect(searchBoxElement).toBeTruthy();
  });

  it("should render loading on screen", () => {
    render(<Container loading />);

    const loadingElement = screen.getByLabelText("loading-wrapper");
    expect(loadingElement.classList.contains("show-loading")).toBeTruthy();
  });
});
