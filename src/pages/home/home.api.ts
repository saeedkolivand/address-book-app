import HttpService from "app/network/httpService";

const API = "/";

export const getUsersListApi = () => {
  const params = {
    results: 1000,
  };

  return HttpService.get(`${API}`, { params });
};
