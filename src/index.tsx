import React from "react";
import ReactDOM from "react-dom/client";
import * as serviceWorkerRegistration from "app/serviceWorkerRegistration";
import reportWebVitals from "app/reportWebVitals";
import { ErrorBoundary } from "ui-components";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "react-redux";
import store from "app/redux/store";
import AppRouter from "routes/AppRouter";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
      refetchOnWindowFocus: false,
      useErrorBoundary: true,
    },
  },
});

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <ErrorBoundary>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <AppRouter />
      </QueryClientProvider>
    </Provider>
  </ErrorBoundary>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
