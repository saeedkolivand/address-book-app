import { cleanup, render, screen, fireEvent } from "@testing-library/react";
import { Select } from "ui-components";

describe("Select test cases", () => {
  afterEach(cleanup);

  it("should render select component", () => {
    render(<Select />);

    const selectElement = screen.getByLabelText("select-wrapper");
    expect(selectElement).toBeTruthy();
  });

  it("should render select component with placeholder", () => {
    render(<Select placeholder="Select an option" />);

    const selectElement = screen.getByLabelText(
      "select-container__placeholder"
    );
    expect(selectElement.textContent).toEqual("Select an option");
  });

  it("should render select component with options", () => {
    render(<Select options={["Option 1", "Option 2"]} />);

    const optionElementOne = screen.getByLabelText("select-option-0");
    const optionElementTwo = screen.getByLabelText("select-option-1");

    expect(optionElementOne.textContent).toEqual("Option 1");
    expect(optionElementTwo.textContent).toEqual("Option 2");
  });

  it("should render select component with options and selected value", () => {
    let selectedValue = "Option 1";

    const handleChange = jest.fn((value: string) => {
      selectedValue = value;
    });

    render(
      <Select
        options={["Option 1", "Option 2"]}
        value={selectedValue}
        onChange={handleChange}
      />
    );

    const optionElementTwo = screen.getByLabelText("select-option-1");

    fireEvent.click(optionElementTwo);

    const selectElement = screen.getByLabelText(
      "select-container__placeholder"
    );
    expect(selectElement.textContent).toEqual("Option 2");
    expect(selectedValue).toEqual("Option 2");
  });
});
