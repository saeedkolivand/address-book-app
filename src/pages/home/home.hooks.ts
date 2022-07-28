import { useQuery } from "@tanstack/react-query";
import { AxiosError, AxiosResponse } from "axios";
import { getUsersListApi } from "./home.api";
import {
  HomeApiParamsTypes,
  useFilterUsersListHookTypes,
  UsersDto,
  UsersListApiErrorResponseTypes,
  UsersListApiResponseTypes,
} from "./home.types";

export const useUsersList = (params: HomeApiParamsTypes) =>
  useQuery<
    AxiosResponse<UsersListApiResponseTypes>,
    AxiosError<UsersListApiErrorResponseTypes>
  >(["usersList", params], ({ queryKey }) =>
    getUsersListApi(queryKey[1] as HomeApiParamsTypes)
  );

export const useFilterUsersList: useFilterUsersListHookTypes = (
  usersList: UsersDto[],
  searchValue: string
) => {
  const filteredResult = usersList?.filter((user) => {
    const name = `${user.name.first} ${user.name.last}`;
    return name.toLowerCase().includes(searchValue.toLowerCase());
  });

  return [filteredResult, searchValue];
};
