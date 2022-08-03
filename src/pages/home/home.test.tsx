import { cleanup, render, screen } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "react-redux";
import { initErrorModalPortal } from "ui-components/error/error.test";
import { initLoadingPortal } from "ui-components/loading/loading.test";
import store from "app/redux/store";
import { BrowserRouter } from "react-router-dom";
import { initModalPortal } from "ui-components/modal/modal.test";
import { useUsersList } from "./home.hooks";
import Home from "./Home";
import { mockedApiResponse } from "../../../__mocks__/apiResponse";

const mockedUseRepositoriesList = useUsersList as jest.Mock<any>;
jest.mock("./home.hooks");

describe("Home page test cases", () => {
  beforeAll(() => {
    initLoadingPortal();
    initErrorModalPortal();
    initModalPortal();
    const div = document.createElement("div");
    const body = document.querySelector("body")!;
    div.setAttribute("id", "root");
    body.appendChild(div);
  });

  afterAll(cleanup);

  afterEach(() => {
    jest.clearAllMocks();
  });

  const MockedContainer = () => {
    const queryClient = new QueryClient({
      defaultOptions: {
        queries: {
          retry: false,
        },
      },
    });

    return (
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <BrowserRouter>
            <Home />
          </BrowserRouter>
        </Provider>
      </QueryClientProvider>
    );
  };

  it("should show loading", () => {
    mockedUseRepositoriesList.mockImplementation(() => ({
      isLoading: true,
      data: {
        data: {
          results: mockedApiResponse,
        },
      },
    }));
    render(<MockedContainer />);

    const loadingElement = screen.getByLabelText("loading-wrapper");

    expect(loadingElement.classList.contains("show-loading")).toBeTruthy();
  });

  it("should HIDE loading", () => {
    mockedUseRepositoriesList.mockImplementation(() => ({ isLoading: false }));

    render(<MockedContainer />);

    const loadingElement = screen.getByLabelText("loading-wrapper");

    expect(loadingElement.classList.contains("hide-loading")).toBeTruthy();
  });

  it("should SHOW Error", () => {
    mockedUseRepositoriesList.mockImplementation(() => ({
      isError: true,
    }));

    render(<MockedContainer />);

    const errorElement = screen.getByLabelText("error-wrapper");

    expect(errorElement.classList.contains("show-error")).toBeTruthy();
  });

  it("should HIDE Error", () => {
    mockedUseRepositoriesList.mockImplementation(() => ({
      isError: false,
    }));

    render(<MockedContainer />);

    const errorElement = screen.getByLabelText("error-wrapper");

    expect(errorElement.classList.contains("hide-error")).toBeTruthy();
  });

  it("should show Data", () => {
    mockedUseRepositoriesList.mockImplementation(() => ({
      isLoading: false,
      isError: false,
      data: {
        data: {
          results: mockedApiResponse,
        },
      },
    }));

    render(<MockedContainer />);

    const repositoriesElements = screen.getAllByLabelText("user-card-wrapper");

    expect(repositoriesElements.length).toBe(2);
  });
});
