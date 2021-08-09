import { client, Response } from "./clients";
import { DragonModel } from "@/models/dragons";

export const ENDPOINTS = {
  LIST: () => "/api/v1/dragon",
  CREATE: () => "/api/v1/dragon",
  FIND_BY_ID: (id: string) => `/api/v1/dragon/${id}`,
  DELETE_BY_ID: (id: string) => `/api/v1/dragon/${id}`,
  UPDATE_BY_ID: (id: string) => `/api/v1/dragon/${id}`,
};

interface List<T> extends Promise<Response<Array<T>>> {}
interface Object<T> extends Promise<Response<T>> {}

export const DragonsAPI = {
  list: (): List<DragonModel> => client.get<Array<DragonModel>>(ENDPOINTS.LIST()),
  delete: (id: string): Object<void> => client.delete(ENDPOINTS.DELETE_BY_ID(id)),
  details: (id: string): Object<DragonModel> => client.get(ENDPOINTS.FIND_BY_ID(id)),
  create: (body: DragonModel): Object<DragonModel> => client.post(ENDPOINTS.CREATE(), body),
  update: (body: DragonModel, id: string): Object<DragonModel> => client.put(ENDPOINTS.UPDATE_BY_ID(id), body),
};
