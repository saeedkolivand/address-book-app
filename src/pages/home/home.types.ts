import { AppRouterTypes } from "routes/appRouter.types";

export interface HomePropsTypes extends AppRouterTypes {}

export interface HomeApiParamsTypes {
  page: number;
  results: number;
  inc?: string;
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
  email: string;
  login: Login;
  picture: Picture;
  nat: Nat;
  cell: string;
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
  Mademoiselle = "Mademoiselle",
  Miss = "Miss",
  Monsieur = "Monsieur",
  Mr = "Mr",
  Mrs = "Mrs",
}

export enum Nat {
  Au = "AU",
  Br = "BR",
  CA = "CA",
  Ch = "CH",
  De = "DE",
  Dk = "DK",
  Es = "ES",
  Fi = "FI",
  Fr = "FR",
  GB = "GB",
  IR = "IR",
  Ie = "IE",
  In = "IN",
  MX = "MX",
  Nl = "NL",
  No = "NO",
  Nz = "NZ",
  Rs = "RS",
  Tr = "TR",
  Ua = "UA",
  Us = "US",
}

export interface Picture {
  large: string;
  medium: string;
  thumbnail: string;
}
