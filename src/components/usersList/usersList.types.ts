import { UsersDto } from "pages/home/home.types";

export interface UsersListPropsTypes {
  headerItems: string[];
  usersList?: UsersDto[];
  onUpdatePageNumber: () => void;
  isFirstPage: boolean;
  isFilterActive: boolean;
  onClickItem: (data: UsersDto) => void;
}
