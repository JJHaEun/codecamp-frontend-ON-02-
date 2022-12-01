import { ChangeEvent } from "react";

export interface ILogInPageUIProps {
  onChangeEmail: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickLogIn: () => void;
}
