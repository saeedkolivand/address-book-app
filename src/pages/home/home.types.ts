import { AppRouterTypes } from "routes/appRouter.types";

export interface HomePropsTypes extends AppRouterTypes {}

export interface HomeApiParamsTypes {
  page: number;
  results: number;
  inc?: string;
  nat: string;
}

export type useFilterUsersListHookTypes = (
  usersList: UsersDto[],
  searchValue?: string
) => { filterResult: UsersDto[] };

export interface UsersListApiErrorResponseTypes {
  error: string;
}

export interface UsersListApiResponseTypes {
  info: {
    seed: string;
    results: number;
    page: number;
    version: string;
  };
  results: UsersDto[];
}

export interface UsersDto {
  name: Name;
  location: Location;
  email: string;
  login: Login;
  phone: string;
  cell: string;
  picture: Picture;
  nat: string;
}

export interface Location {
  street: Street;
  city: string;
  state: string;
  country: string;
  postcode: number | string;
  coordinates: Coordinates;
  timezone: Timezone;
}

export interface Coordinates {
  latitude: string;
  longitude: string;
}

export interface Street {
  number: number;
  name: string;
}

export interface Timezone {
  offset: string;
  description: string;
}

export interface Login {
  uuid: string;
  username: string;
  password: string;
  salt: string;
  md5: string;
  sha1: string;
  sha256: string;
}

export interface Name {
  title: Title;
  first: string;
  last: string;
}

export enum Title {
  MS = "Ms",
  Madame = "Madame",
  Miss = "Miss",
  Monsieur = "Monsieur",
  Mr = "Mr",
  Mrs = "Mrs",
}

export interface Picture {
  large: string;
  medium: string;
  thumbnail: string;
}
