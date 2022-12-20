import { useQuery } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { MouseEvent } from "react";
import {
  IQuery,
  IQueryFetchUseditemsArgs,
} from "../../../commons/types/generated/types";
import { FETCH_USED_ITEMS } from "../productBoard/list/ProductsList.queries";
import UnUserBasketPageUI from "./unUser.presenter";

export default function UnUserBasket() {
  const router = useRouter();

  const { data, fetchMore } = useQuery<
    Pick<IQuery, "fetchUseditems">,
    IQueryFetchUseditemsArgs
  >(FETCH_USED_ITEMS);

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
  const onClickProductDetail = (event: MouseEvent<HTMLDivElement>) => {
    void router.push(`/market/${event.currentTarget.id}`);
  };
  const onClickBasket = (basket: any) => () => {
    const baskets = JSON.parse(localStorage.getItem("baskets") ?? "[]");

    const basketTemp = baskets.filter((el: any) => el._id === basket._id);
    if (basketTemp.length === 1) {
      Modal.info({ content: "이미 장바구니에 담긴 상품입니다." });
      return;
    }

    const { __typename, ...rest } = basket;
    baskets.push(rest);
    localStorage.setItem("baskets", JSON.stringify(baskets));
  };
  // useEffect(() => {
  //   // 로컬스토리지를 찾기 위해 유즈 이펙트를 사용한다
  //   const baskets = JSON.parse(localStorage.getItem("basket") ?? "[]");
  //   setBesketItem(baskets);
  // }, []);

  return (
    <UnUserBasketPageUI
      data={data}
      onLoadMore={onLoadMore}
      onClickProductDetail={onClickProductDetail}
      onClickBasket={onClickBasket}
    />
  );
}
