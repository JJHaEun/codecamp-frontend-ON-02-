import { IQuery } from "../../../../commons/types/generated/types";

export interface ILoginSuccessUIProps {
  data?: Pick<IQuery, "fetchUserLoggedIn">;
}
