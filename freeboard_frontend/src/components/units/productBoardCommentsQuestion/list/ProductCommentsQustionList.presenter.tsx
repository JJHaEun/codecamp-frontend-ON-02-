import InfiniteScroll from "react-infinite-scroller";
import { ICommentsListUIProps } from "./ProductCommentsQustionList.types";
import CommentsListItems from "./ProductCommentsQustionListItems.container";

export default function CommentsListUI(props: ICommentsListUIProps) {
  return (
    <>
      <div>
        <InfiniteScroll
          pageStart={0}
          loadMore={props.onLoadMore}
          hasMore={true}
          useWindow={false}
        >
          {props.data?.fetchUseditemQuestions.map((el) => (
            <CommentsListItems key={el._id} el={el} />
          ))}
        </InfiniteScroll>
      </div>
    </>
  );
}
