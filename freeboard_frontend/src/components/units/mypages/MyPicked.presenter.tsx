import InfiniteScroll from "react-infinite-scroller";
import { IIPikedPageUIProps } from "./Mypage.types";
import MyPickedMain from "./MyPicked.main";

export default function IPikedPageUI(props: IIPikedPageUIProps) {
  return (
    <>
      <h2>나의 픽!</h2>
      <div>
        <InfiniteScroll
          pageStart={0}
          loadMore={props.onLoadMore}
          hasMore={true}
          useWindow={false}
        >
          {props.data?.fetchUseditemsIPicked.map((el) => (
            <MyPickedMain
              key={el._id}
              el={el}
              onClickProductDetail={props.onClickProductDetail}
            />
          ))}
        </InfiniteScroll>
      </div>
    </>
  );
}
