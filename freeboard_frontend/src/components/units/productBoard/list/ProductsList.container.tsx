import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { MouseEvent, useState } from "react";
import {
  IQuery,
  IQueryFetchUseditemsArgs,
} from "../../../../commons/types/generated/types";
import { useMoveToPage } from "../../../commons/hooks/useMoToPage";
import ProductListUI from "./ProductsList.presenter";
import { FETCH_USED_ITEMS } from "./ProductsList.queries";

export default function ProductList() {
  const router = useRouter();
  const [keyword, setKeyword] = useState("");
  const { onClickMoveToPage } = useMoveToPage();
  const { data, fetchMore, refetch } = useQuery<
    Pick<IQuery, "fetchUseditems">,
    IQueryFetchUseditemsArgs
  >(FETCH_USED_ITEMS);

  console.log(data?.fetchUseditems);

  const onLoadMore = async () => {
    if (!data) return;
    await fetchMore({
      variables: { page: Math.ceil(data?.fetchUseditems?.length / 10) + 1 },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (fetchMoreResult.fetchUseditems === undefined) {
          return {
            fetchUseditems: [...prev.fetchUseditems],
          };
        }
        return {
          // prettier-ignore
          fetchUseditems: ([
            ...prev.fetchUseditems,
            ...fetchMoreResult.fetchUseditems,
          ]),
        };
      },
    });
  };
  const onClickCreateProduct = () => {
    void router.push(`/market/new`);
  };
  const onClickProductDetail = (event: MouseEvent<HTMLDivElement>) => {
    void router.push(`/market/${event.currentTarget.id}`);
  };
  const onChangeKeyword = (value: string) => {
    setKeyword(value);
  };

  return (
    <ProductListUI
      data={data}
      onLoadMore={onLoadMore}
      onClickCreateProduct={onClickCreateProduct}
      onClickProductDetail={onClickProductDetail}
      onChangeKeyword={onChangeKeyword}
      refetch={refetch}
      onClickMoveToPage={onClickMoveToPage}
      keyword={keyword}
    />
  );
}
