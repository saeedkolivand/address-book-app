import React, { Suspense } from "react";
import { Helmet } from "react-helmet";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NotFound, Loading } from "ui-components";
import { HomeRoutes } from "pages/home/home.route";
import { SettingsRoutes } from "pages/settings/settings.route";
import { AppRouterTypes } from "./appRouter.types";
import "assets/styles/_global.scss";

export const appRoutes: AppRouterTypes[] = [
  ...HomeRoutes,
  ...SettingsRoutes,
  {
    title: "404",
    element: <NotFound />,
    exact: true,
  },
];

const AppRouter: React.FC = () => (
  <Suspense fallback={<Loading loading />}>
    <BrowserRouter>
      <Routes>
        {appRoutes.map((item) => (
          <Route
            path={`${item.path || ""}/${item.exact && "*"}`}
            element={
              <>
                <Helmet>
                  <title>{`Address Book | ${item.title || "-"}`}</title>
                </Helmet>
                {item.element}
              </>
            }
            key={`route-${item.title}`}
          />
        ))}
      </Routes>
    </BrowserRouter>
  </Suspense>
);

export default AppRouter;
