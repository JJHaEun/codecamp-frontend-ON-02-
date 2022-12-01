import { ChangeEvent } from "react";

export interface ICreateUsersUIProps {
  onChangeEmailSubmit: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeNameSubmit: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangePasswordSubmit: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickCreateUsers: () => void;
}
