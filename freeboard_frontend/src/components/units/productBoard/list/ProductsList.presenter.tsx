import InfiniteScroll from "react-infinite-scroller";
import Search02 from "../../../commons/search/02/Search02.container";
import ProductListMainUI from "./ProductList.main";
import { IProductListUIProps } from "./ProductsList.types";
import * as S from "./ProductsList.styles";

export default function ProductListUI(props: IProductListUIProps) {
  return (
    <div>
      {/* <div>{props}</div> */}

      <h1>상품리스트</h1>
      <div>
        <Search02
          refetch={props.refetch}
          onChangeKeyword={props.onChangeKeyword}
        />
      </div>
      <div></div>
      <div>
        <S.Scroll>
          <InfiniteScroll
            pageStart={0}
            loadMore={props.onLoadMore}
            hasMore={true}
            useWindow={false}
          >
            {props.data?.fetchUseditems.map((el) => (
              <ProductListMainUI
                key={el._id}
                el={el}
                onClickProductDetail={props.onClickProductDetail}
              />
            ))}
          </InfiniteScroll>
        </S.Scroll>
        <button onClick={props.onClickMoveToPage(`/market/new`)}>
          등록하기
        </button>
      </div>
    </div>
  );
}
