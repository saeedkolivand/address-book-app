import { cleanup, render, screen } from "@testing-library/react";
import Button from "./Button";

describe("Button test cases", () => {
  afterAll(cleanup);

  it("should render button with custom text", () => {
    render(<Button>test</Button>);
    const buttonElement = screen.getByLabelText("button-wrapper");
    expect(buttonElement.textContent).toBe("test");
  });
});
