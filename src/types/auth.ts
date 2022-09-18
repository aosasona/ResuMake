export enum AuthActionsEnum {
  LOGIN = "LOGIN",
  REGISTER = "REGISTER",
}

export interface AuthDataState {
  email: string;
  password: string;
}