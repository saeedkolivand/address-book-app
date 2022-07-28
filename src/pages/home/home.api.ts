import HttpService from "app/network/httpService";
import { HomeApiParamsTypes } from "./home.types";

const API = "/";

export const getUsersListApi = (params: HomeApiParamsTypes) => {
  return HttpService.get(`${API}`, { params });
};
