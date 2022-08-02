import { render } from "@testing-library/react";
import ErrorBoundary from "./ErrorBoundary";

const ChildWithError = () => {
  throw new Error();
};

describe("Error Boundary", () => {
  it(`should render error boundary component when there is an error`, () => {
    const errorBoundaryElement = render(
      <ErrorBoundary>
        <ChildWithError />
      </ErrorBoundary>
    );
    const errorMessage = errorBoundaryElement.getByText(
      "Something went wrong... :("
    );

    expect(errorMessage).toBeTruthy();
  });
});
