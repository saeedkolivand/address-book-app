import { cleanup, render, screen } from "@testing-library/react";
import UsersList from "./UsersList";
import { mockedApiResponse } from "../../../__mocks__/apiResponse";

describe("UsersList test cases", () => {
  afterAll(cleanup);

  it("should render two items in list", () => {
    render(
      <UsersList
        usersList={mockedApiResponse}
        headerItems={[
          "Picture",
          "First Name",
          "Last Name",
          "Username",
          "Email",
        ]}
        onUpdatePageNumber={() => {}}
        isFirstPage
        isFilterActive
        onClickItem={() => {}}
      />
    );

    const repositoryElement = screen.getAllByLabelText("user-card-wrapper");

    expect(repositoryElement.length).toBe(2);
  });

  it("should pass user data to onClickItem", () => {
    const onClickItem = jest.fn();

    render(
      <UsersList
        usersList={mockedApiResponse}
        headerItems={[
          "Picture",
          "First Name",
          "Last Name",
          "Username",
          "Email",
        ]}
        onUpdatePageNumber={() => {}}
        isFirstPage
        isFilterActive
        onClickItem={onClickItem}
      />
    );

    const repositoryElement = screen.getAllByLabelText("user-card-wrapper");

    repositoryElement[0].click();

    expect(onClickItem).toHaveBeenCalled();
  });
});
