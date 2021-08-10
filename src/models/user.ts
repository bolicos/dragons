import { Dispatch, SetStateAction } from "react";

export interface UserModel {
  username: string;
  password: string;
}

export interface RoleModel {
  name: string;
}

export interface TokenModel {
  token: string;
}

export type Token = {
    iat: string;
    exp: string;
    iss: string;
    aud: string;
    sub: string;
    username: string;
    applicationId: string,
    roles: Array<string>;
}

export type UserPrincipal = {
  name: string;
  roles: Array<string>;
  isAuthenticated: boolean;
  token: string;
};

export enum Roles {
  VIEW = "VIEW",
  EDIT = "EDIT",
  DELETE = "DELETE",
  NEW = "NEW",
}

export interface UserProps {
  user: UserPrincipal;
  setUser: Dispatch<SetStateAction<UserPrincipal>>;
  setIsSignIn: Dispatch<SetStateAction<boolean>>;
}
