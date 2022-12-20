import { gql, useQuery } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { MouseEvent } from "react";
import InfiniteScroll from "react-infinite-scroller";
import {
  IQuery,
  IQueryFetchUseditemsArgs,
} from "../../src/commons/types/generated/types";
import styled from "@emotion/styled";
import { ShoppingCartOutlined } from "@ant-design/icons";
export const FETCH_USED_ITEMS = gql`
  query fetchUseditems($isSoldout: Boolean, $search: String, $page: Int) {
    fetchUseditems(isSoldout: $isSoldout, search: $search, page: $page) {
      _id
      name
      remarks
      contents
      price
      useditemAddress {
        address
        # addressDetail
        createdAt
      }
      createdAt
    }
  }
`;
export default function UnUserBasketPage() {
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
  const Scroll = styled.div`
    height: 300px;
    overflow: auto;
    width: 1000px;
  `;
  const All = styled.div`
    display: flex;
    justify-content: center;
  `;
  const ClicksDetail = styled.div`
    :hover {
      cursor: pointer;
      color: blanchedalmond;
    }
  `;
  return (
    <All>
      <Scroll>
        <InfiniteScroll
          pageStart={0}
          loadMore={onLoadMore}
          hasMore={true}
          useWindow={false}
        >
          {data?.fetchUseditems.map((el: any) => (
            <div key={el._id}>
              <ClicksDetail onClick={onClickProductDetail}>
                {el.name}
              </ClicksDetail>
              <div>{el.price} ₩</div>
              <button onClick={onClickBasket(el)}>
                <ShoppingCartOutlined />
                담기
              </button>
            </div>
          ))}
        </InfiniteScroll>
      </Scroll>
    </All>
  );
}
