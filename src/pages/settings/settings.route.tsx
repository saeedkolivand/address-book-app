import { AppRouterTypes } from "routes/appRouter.types";
import Settings from "./Settings";

export const SettingsPathNames = {
  root: "/settings",
};

export const SettingsRoutes: AppRouterTypes[] = [
  {
    title: "Settings",
    path: SettingsPathNames.root,
    element: <Settings />,
    exact: true,
  },
];
