import { ChangeEvent, MouseEvent } from "react";
import { IQuery, IUseditem } from "../../../commons/types/generated/types";

export interface IMypageUIProps {
  onChangeRadio: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickCharge: () => void;
  data?: Pick<IQuery, "fetchUserLoggedIn">;
  onClickMyPick: () => void;
  CountIPick?: Pick<IQuery, "fetchUseditemsCountIPicked">;
  IBought?: Pick<IQuery, "fetchUseditemsCountIBought">;
  onClickIBought: () => void;
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

export interface IBoughtProductUIProps {
  data?: Pick<IQuery, "fetchUseditemsIBought">;
  onLoadMore: () => void;
}

export interface IIBoughtMainProps {
  el: IUseditem;
}
