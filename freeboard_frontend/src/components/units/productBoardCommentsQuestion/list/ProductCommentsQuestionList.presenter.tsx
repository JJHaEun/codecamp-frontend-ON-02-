import InfiniteScroll from "react-infinite-scroller";
import { ICommentsListUIProps } from "./ProductCommentsQuestionList.types";
import CommentsListItems from "./ProductCommentsQuestionListItems.container";
import { CommentsList } from "./ProductCommentsQuestion.styles";
export default function CommentsListUI(props: ICommentsListUIProps) {
  return (
    <>
      <CommentsList>
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
      </CommentsList>
    </>
  );
}
