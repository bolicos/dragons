import { client, Response } from "./clients";
import { DragonModel } from "@/models/dragons";

interface List<T> extends Promise<Response<Array<T>>> {}
interface Object<T> extends Promise<Response<T>> {}

export const ENDPOINTS = {
  LIST: () => "/api/v1/dragon",
  DELETE_BY_ID: (id: string) => `/api/v1/dragon/${id}`,
  FIND_BY_ID: (id: string) => `/api/v1/dragon/${id}`,
  EDIT_BY_ID: (id: string) => `/api/v1/dragon/${id}`,
  CREATE: () => "/api/v1/dragon",
};

export const DragonsAPI = {
  list: (): List<DragonModel> => client.get<Array<DragonModel>>(ENDPOINTS.LIST()),
  delete: (id: string): Object<void> => client.delete(ENDPOINTS.DELETE_BY_ID(id)),
  details: (id: string): Object<DragonModel> => client.get(ENDPOINTS.FIND_BY_ID(id)),
  edit: (id: string, body: DragonModel): Object<DragonModel> => client.put(ENDPOINTS.EDIT_BY_ID(id), body),
  create: (body: DragonModel): Object<DragonModel> => client.post(ENDPOINTS.CREATE(), body),
};
