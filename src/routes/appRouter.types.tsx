import { RouteObject } from "react-router-dom";

export interface AppRouterTypes extends RouteObject {
  title?: string;
  exact?: boolean;
}
