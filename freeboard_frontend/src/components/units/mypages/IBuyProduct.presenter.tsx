import InfiniteScroll from "react-infinite-scroller";
import IBoughtMain from "./IBuyProduct.main";
import { IBoughtProductUIProps } from "./Mypage.types";

export default function IBoughtProductUI(props: IBoughtProductUIProps) {
  return (
    <>
      <h2>내 구매내역</h2>
      <div>
        <InfiniteScroll
          pageStart={0}
          loadMore={props.onLoadMore}
          hasMore={true}
          useWindow={false}
        >
          {props.data?.fetchUseditemsIBought.map((el) => (
            <IBoughtMain key={el._id} el={el} />
          ))}
        </InfiniteScroll>
      </div>
    </>
  );
}
