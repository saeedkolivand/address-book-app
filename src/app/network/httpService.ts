import axios from "axios";
import Config from "../config/config";

const HttpService = axios.create({
  baseURL: Config.baseUrl + Config.apiPrefix,
  timeout: 6000,
});

export default HttpService;
