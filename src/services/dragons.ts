import { client, Response } from "./clients";
import { DragonsType } from "@/models/dragons";

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
  list: (): List<DragonsType> => client.get<Array<DragonsType>>(ENDPOINTS.LIST()),
  delete: (id: string): Object<void> => client.delete(ENDPOINTS.DELETE_BY_ID(id)),
  details: (id: string): Object<DragonsType> => client.get(ENDPOINTS.FIND_BY_ID(id)),
  create: (body: DragonsType): Object<DragonsType> => client.post(ENDPOINTS.CREATE(), body),
  update: (body: DragonsType, id: string): Object<DragonsType> => client.put(ENDPOINTS.UPDATE_BY_ID(id), body),
};
