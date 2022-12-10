import InfiniteScroll from "react-infinite-scroller";
import { ICommentsAnswerListUIProps } from "./ProductCommentsAnswerList.types";
import CommentsAnswerListItems from "./ProductCommentsAnswerListItems.container";

export default function CommentsAnswerListUI(
  props: ICommentsAnswerListUIProps
) {
  return (
    <>
      <div>
        <InfiniteScroll
          pageStart={0}
          loadMore={props.onLoadMore}
          hasMore={true}
          useWindow={false}
        >
          {props.data?.fetchUseditemQuestionAnswers.map((el) => (
            <CommentsAnswerListItems key={el._id} el={el} />
          ))}
        </InfiniteScroll>
      </div>
    </>
  );
}
