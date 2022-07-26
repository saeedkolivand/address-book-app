import { cleanup, render, screen } from "@testing-library/react";
import NotFound from "./NotFound";

describe("Not Found test cases", () => {
  afterAll(cleanup);

  it("should render not found component on screen", () => {
    render(<NotFound className="show-not-found" />);

    const notFoundElement = screen.getByLabelText("not-found-wrapper");
    expect(notFoundElement.classList.contains("show-not-found")).toBeTruthy();
  });
});
