import { AppRouterTypes } from "routes/appRouter.types";
import Home from "./Home";

export const HomePathNames = {
  root: "/",
};

export const HomeRoutes: AppRouterTypes[] = [
  {
    title: "Home",
    path: HomePathNames.root,
    element: <Home />,
    exact: true,
  },
];
