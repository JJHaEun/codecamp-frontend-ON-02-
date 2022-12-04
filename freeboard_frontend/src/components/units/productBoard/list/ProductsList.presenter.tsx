import InfiniteScroll from "react-infinite-scroller";
import ProductListMainUI from "./ProductList.main";
import { IProductListUIProps } from "./ProductsList.types";

export default function ProductListUI(props: IProductListUIProps) {
  return (
    <div>
      {/* <div>{props}</div> */}
      <h1>상품리스트</h1>
      <div>
        <InfiniteScroll
          pageStart={0}
          loadMore={props.onLoadMore}
          hasMore={true}
          useWindow={false}
        >
          {props.data?.fetchUseditems.map((el) => (
            <ProductListMainUI key={el._id} el={el} />
          ))}
        </InfiniteScroll>
      </div>
    </div>
  );
}
