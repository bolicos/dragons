import { auth, Response } from "./clients";
import { TokenModel, UserModel } from "@/models/user";

interface Object<T> extends Promise<Response<T>> {}

export const ENDPOINTS = {
  AUTH: () => "/api/v1/auth",
};

export const AuthAPI = {
  signIn: (body: UserModel): Object<TokenModel> => auth.post(ENDPOINTS.AUTH(), body),
};
