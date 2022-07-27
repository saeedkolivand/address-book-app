import { useQuery } from "@tanstack/react-query";
import { AxiosError, AxiosResponse } from "axios";
import { getUsersListApi } from "./home.api";
import {
  UsersListApiErrorResponseTypes,
  UsersListApiResponseTypes,
} from "./home.types";

export const useUsersList = () =>
  useQuery<
    | AxiosResponse<UsersListApiResponseTypes>
    | AxiosError<UsersListApiErrorResponseTypes>
  >(["usersList"], getUsersListApi);
