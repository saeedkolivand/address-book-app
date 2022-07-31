import { UsersDto } from "pages/home/home.types";

export interface UserCardPropsTypes extends UsersDto {
  onClick: (data: UsersDto) => void;
}
