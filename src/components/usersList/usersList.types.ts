import { UsersDto } from "pages/home/home.types";

export interface UsersListPropsTypes {
  headerItems: string[];
  usersList?: UsersDto[];
}
