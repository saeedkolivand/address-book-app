import { AppRouterTypes } from "routes/appRouter.types";

export interface SettingsPropsTypes extends AppRouterTypes {}

export type NationalityValuesTypes = "default" | "CH" | "ES" | "FR" | "GB";

export interface SettingsInitialStateReduxTypes {
  nationality: NationalityValuesTypes;
}
