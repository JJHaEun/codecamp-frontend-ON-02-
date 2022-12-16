import { ChangeEvent, MouseEvent } from "react";
import {
  IPointTransaction,
  IQuery,
  IUseditem,
} from "../../../commons/types/generated/types";

export interface IMypageUIProps {
  onChangeRadio: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickCharge: () => void;
  data?: Pick<IQuery, "fetchUserLoggedIn">;
  onClickMyPick: () => void;
  CountIPick?: Pick<IQuery, "fetchUseditemsCountIPicked">;
  IBought?: Pick<IQuery, "fetchUseditemsCountIBought">;
  onClickIBought: () => void;
  ISold?: Pick<IQuery, "fetchUseditemsCountISold">;
  onClickISold: () => void;
  onClickLogOut: () => void;
  MyPointList?: Pick<IQuery, "fetchPointTransactionsCountOfLoading">;
  onClickMyPointList: () => void;
}

export interface IIPikedPageUIProps {
  data?: Pick<IQuery, "fetchUseditemsIPicked">;
  onLoadMore: () => void;
  onClickProductDetail: (event: MouseEvent<HTMLDivElement>) => void;
  onClickMyPageMain: () => void;
}

export interface IMyPickedMainProps {
  el: IUseditem;
  onClickProductDetail: (event: MouseEvent<HTMLDivElement>) => void;
}

export interface IBoughtProductUIProps {
  data?: Pick<IQuery, "fetchUseditemsIBought">;
  onLoadMore: () => void;
  onClickMyPageMain: () => void;
}

export interface IIBoughtMainProps {
  el: IUseditem;
}
export interface IISoldUIProps {
  data?: Pick<IQuery, "fetchUseditemsISold">;
  onLoadMore: () => void;
  onClickMyPageMain: () => void;
}
export interface IISoldMainProps {
  el: IUseditem;
}

export interface IMyPointListUIProps {
  data?: Pick<IQuery, "fetchPointTransactions">;
  onLoadMore: () => void;
  onClickMyPageMain: () => void;
}
export interface IMyPointListMainProps {
  el: IPointTransaction;
}
