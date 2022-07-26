import React, { Suspense } from "react";
import { Helmet } from "react-helmet";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Loading from "ui-components/loading/Loading";
import NotFound from "ui-components/notFound/NotFound";
import { HomeRoutes } from "pages/home/home.route";
import { AppRouterTypes } from "./appRouter.types";

export const appRoutes: AppRouterTypes[] = [
  ...HomeRoutes,
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
