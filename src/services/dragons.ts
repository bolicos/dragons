import { client } from "./clients";
import { DragonsType } from "@/models/dragons";

export const ENDPOINTS = {
  LIST: () => "/api/v1/dragon",
  CREATE: () => "/api/v1/dragon",
  FIND_BY_ID: (id: number) => `/api/v1/dragon/${id}`,
  DELETE_BY_ID: (id: number) => `/api/v1/dragon/${id}`,
  UPDATE_BY_ID: (id: number) => `/api/v1/dragon/${id}`,
};

export const Dragons = {
  list: (): Promise<DragonsType[]> => client.get(ENDPOINTS.LIST()),
  delete: (id: number): Promise<void> =>
    client.delete(ENDPOINTS.DELETE_BY_ID(id)),
  details: (id: number): Promise<DragonsType> =>
    client.get(ENDPOINTS.FIND_BY_ID(id)),
  create: (body: DragonsType): Promise<DragonsType> =>
    client.post(ENDPOINTS.CREATE(), body),
  update: (body: DragonsType, id: number): Promise<DragonsType> =>
    client.put(ENDPOINTS.UPDATE_BY_ID(id), body),
};
