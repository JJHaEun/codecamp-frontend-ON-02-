import { ChangeEvent, MouseEvent } from "react";
import { IQuery, IUseditem } from "../../../commons/types/generated/types";

export interface IMypageUIProps {
  onChangeRadio: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickCharge: () => void;
  data?: Pick<IQuery, "fetchUserLoggedIn">;
  onClickMyPick: () => void;
}

export interface IIPikedPageUIProps {
  data?: Pick<IQuery, "fetchUseditemsIPicked">;
  onLoadMore: () => void;
  onClickProductDetail: (event: MouseEvent<HTMLDivElement>) => void;
}

export interface IMyPickedMainProps {
  el: IUseditem;
  onClickProductDetail: (event: MouseEvent<HTMLDivElement>) => void;
}
