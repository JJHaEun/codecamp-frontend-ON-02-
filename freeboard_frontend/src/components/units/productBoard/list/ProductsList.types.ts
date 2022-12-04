import { IQuery, IUseditem } from "../../../../commons/types/generated/types";

export interface IProductListUIProps {
  data: Pick<IQuery, "fetchUseditems"> | undefined;
  onLoadMore: () => void;
}
export interface IProductListMainUIProps {
  el: IUseditem;
}
