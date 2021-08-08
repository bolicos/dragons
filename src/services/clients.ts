import axios, { ResponseType, AxiosResponse } from "axios";
import { WEB_APP } from "@/helpers/system/constants-variables";

const AxiosConfig = {
  baseURL: WEB_APP.API_BASE_URL,
  timeout: 30000,
  headers: {
    common: {
      "Cache-Control": "no-cache, no-store, must-revalidate",
      Pragma: "no-cache",
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  },
  responseType: "json" as ResponseType,
  withCredentials: false,
};

export interface Response<T = any> extends AxiosResponse<T> {}

export const client = axios.create({
  baseURL: AxiosConfig.baseURL,
  timeout: AxiosConfig.timeout,
  headers: AxiosConfig.headers,
  responseType: AxiosConfig.responseType,
  withCredentials: AxiosConfig.withCredentials,
});
