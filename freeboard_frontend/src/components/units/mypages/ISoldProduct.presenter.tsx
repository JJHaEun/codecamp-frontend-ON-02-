import InfiniteScroll from "react-infinite-scroller";
import ISoldMain from "./ISoldProduct.main";
import { IISoldUIProps } from "./Mypage.types";

export default function ISoldProductsUI(props: IISoldUIProps) {
  return (
    <>
      <h2>내 판매내역</h2>
      <div>
        <InfiniteScroll
          pageStart={0}
          loadMore={props.onLoadMore}
          hasMore={true}
          useWindow={false}
        >
          {props.data?.fetchUseditemsISold.map((el) => (
            <ISoldMain key={el._id} el={el} />
          ))}
        </InfiniteScroll>
      </div>
    </>
  );
}
