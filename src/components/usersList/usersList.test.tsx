import { cleanup, render, screen } from "@testing-library/react";
import UsersList from "./UsersList";
import { mockedApiResponse } from "../../../__mocks__/apiResponse";

describe("RepositoryList test cases", () => {
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
      />
    );

    const repositoryElement = screen.getAllByLabelText("user-card-wrapper");

    expect(repositoryElement.length).toBe(2);
  });
});
