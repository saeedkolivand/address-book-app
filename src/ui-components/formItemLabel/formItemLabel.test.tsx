import { cleanup, render, screen } from "@testing-library/react";
import FormItemLabel from "./FormItemLabel";

describe("FormItemLabel test cases", () => {
  afterEach(cleanup);

  it("should render FormItemLabel with all the data", () => {
    render(<FormItemLabel label="label" />);

    const formItemLabelElement = screen.getByLabelText(
      "form-item-label-wrapper"
    );

    expect(formItemLabelElement.textContent).toEqual("label");
  });

  it("should render FormItemLabel with required props", () => {
    render(<FormItemLabel label="label" required />);

    const formItemLabelElement = screen.getByLabelText("form-item-label");

    expect(formItemLabelElement.classList.contains("required")).toBeTruthy();
  });

  it("should render FormItemLabel with custom class", () => {
    render(<FormItemLabel label="label" wrapperClassName="custom-class" />);

    const formItemLabelElement = screen.getByLabelText(
      "form-item-label-wrapper"
    );

    expect(
      formItemLabelElement.classList.contains("custom-class")
    ).toBeTruthy();
  });

  it("should render FormItemLabel with custom class", () => {
    render(<FormItemLabel label="label" className="custom-class" />);

    const formItemLabelElement = screen.getByLabelText("form-item-label");

    expect(
      formItemLabelElement.classList.contains("custom-class")
    ).toBeTruthy();
  });
});
