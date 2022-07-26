import { cleanup, render, screen } from "@testing-library/react";
import React from "react";
import Loading from "./Loading";

export const initLoadingPortal = () => {
  const div = document.createElement("div");
  const body = document.querySelector("body")!;
  div.setAttribute("id", "loading");
  body.appendChild(div);
};

describe("Loading test cases", () => {
  beforeEach(initLoadingPortal);
  afterAll(cleanup);

  it("should show loading", () => {
    initLoadingPortal();
    render(<Loading loading />);

    const loadingElement = screen.getByLabelText("loading-wrapper");
    expect(loadingElement.classList.contains("show-loading")).toBeTruthy();
  });

  it("should NOT show loading portal", () => {
    initLoadingPortal();
    render(<Loading loading={false} />);

    const loadingElement = screen.getByLabelText("loading-wrapper");
    expect(loadingElement.classList.contains("hide-loading")).toBeTruthy();
  });
});
