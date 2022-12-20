import { MouseEvent } from "react";
import { IQuery } from "../../../commons/types/generated/types";

export interface IUnUserBasketPageUIProps {
  data?: Pick<IQuery, "fetchUseditems">;
  onLoadMore: () => void;
  onClickProductDetail: (event: MouseEvent<HTMLDivElement>) => void;
  onClickBasket: (basket: any) => () => void;
}
