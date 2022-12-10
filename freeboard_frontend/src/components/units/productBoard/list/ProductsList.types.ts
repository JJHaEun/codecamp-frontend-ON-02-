import { ApolloQueryResult } from "@apollo/client";
import { MouseEvent, MouseEventHandler } from "react";
import {
  IQuery,
  IQueryFetchUseditemsArgs,
  IUseditem,
} from "../../../../commons/types/generated/types";

export interface IProductListUIProps {
  data?: Pick<IQuery, "fetchUseditems">;
  onLoadMore: () => void;
  onClickCreateProduct: () => void;
  onClickProductDetail: (event: MouseEvent<HTMLDivElement>) => void;
  onChangeKeyword: (value: string) => void;
  refetch: (
    variables?: Partial<IQueryFetchUseditemsArgs> | undefined
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchUseditems">>>;
  onClickMoveToPage: (path: string) => MouseEventHandler<HTMLButtonElement>;
  keyword: string;
}
export interface IProductListMainUIProps {
  el: IUseditem;
  onClickProductDetail: (event: MouseEvent<HTMLDivElement>) => void;
  keyword: string;
}
export interface ITextTokenProps {
  isMatch: boolean;
}
