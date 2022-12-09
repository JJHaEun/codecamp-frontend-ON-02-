import { ChangeEvent } from "react";
import { IQuery } from "../../../commons/types/generated/types";

export interface IMypageUIProps {
  onChangeRadio: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickCharge: () => void;
  data: Pick<IQuery, "fetchUserLoggedIn"> | undefined;
}
