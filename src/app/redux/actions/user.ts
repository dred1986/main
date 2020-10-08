import { UsersPermissionsMe } from "../../@types/queryTypes";

export enum actions {
  USER_SET_USER = "USER_SET_USER",
  USER_SET_TOKEN = "USER_SET_TOKEN",
  USER_LOGIN = "USER_LOGIN",
  USER_LOADING = "USER_LOADING",
  USER_ERROR = "USER_ERROR",
  USER_RESET = "USER_RESET",
  USER_LOGOUT = "USER_LOGOUT",
}

interface IsetUser {
  type: typeof actions.USER_SET_USER;
  payload: UsersPermissionsMe | boolean;
}

export const setUser = (user: UsersPermissionsMe | boolean): IsetUser => ({
  type: actions.USER_SET_USER,
  payload: user,
});

interface IsetToken {
  type: typeof actions.USER_SET_TOKEN;
  payload: string;
}

export const setToken = (jwt: string): IsetToken => ({
  type: actions.USER_SET_TOKEN,
  payload: jwt,
});

interface IonLoadingType {
  type: typeof actions.USER_LOADING;
}

export const onLoading = (): IonLoadingType => ({
  type: actions.USER_LOADING,
});

interface IonErrorType {
  type: typeof actions.USER_ERROR;
}

export const onError = (): IonErrorType => ({
  type: actions.USER_ERROR,
});

interface IonResetType {
  type: typeof actions.USER_RESET;
}

export const onReset = (): IonResetType => ({
  type: actions.USER_RESET,
});

interface IonLogoutType {
  type: typeof actions.USER_LOGOUT;
}

export const onLogout = (): IonLogoutType => ({
  type: actions.USER_LOGOUT,
});

export type UserActionTypes =
  | IonLoadingType
  | IonErrorType
  | IonResetType
  | IsetUser
  | IsetToken
  | IonLogoutType;
