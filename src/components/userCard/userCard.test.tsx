import { cleanup, render, screen } from "@testing-library/react";
import UserCard from "./UserCard";
import { mockedApiResponse } from "../../../__mocks__/apiResponse";

describe("UserCard test cases", () => {
  afterAll(cleanup);

  it("should render without throwing an error", () => {
    render(<UserCard {...mockedApiResponse[0]} />);

    const userCardElement = screen.getByLabelText("user-card-wrapper");

    expect(userCardElement).toBeTruthy();
  });

  it("should render user card with all the data", () => {
    render(<UserCard {...mockedApiResponse[0]} />);

    const userCardPictureElement = document.querySelector(
      "img"
    ) as HTMLImageElement;

    const userCardFirstNameElement = screen.getByLabelText(
      "user-card-wrapper__first-name"
    );
    const userCardLastNameElement = screen.getByLabelText(
      "user-card-wrapper__last-name"
    );
    const userCardUsernameElement = screen.getByLabelText(
      "user-card-wrapper__username"
    );
    const userCardEmailElement = screen.getByLabelText(
      "user-card-wrapper__email"
    );

    expect(userCardPictureElement.src).toEqual(
      "https://randomuser.me/api/portraits/thumb/men/63.jpg"
    );
    expect(userCardFirstNameElement.textContent).toEqual("Arian");
    expect(userCardLastNameElement.textContent).toEqual("Tsegay");
    expect(userCardUsernameElement.textContent).toEqual("orangeelephant548");
    expect(userCardEmailElement.textContent).toEqual(
      "arian.tsegay@example.com"
    );
  });

  it("should pass user data on click", () => {
    const onClick = jest.fn();
    render(<UserCard {...mockedApiResponse[0]} onClick={onClick} />);

    const userCardElement = screen.getByLabelText("user-card-wrapper");

    userCardElement.click();

    expect(onClick).toHaveBeenCalledWith(mockedApiResponse[0]);
  });
});
