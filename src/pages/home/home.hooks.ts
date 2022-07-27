import { useQuery } from "@tanstack/react-query";
import { getUsersListApi } from "./home.api";

export const useUsersList = () => useQuery(["usersList"], getUsersListApi);
