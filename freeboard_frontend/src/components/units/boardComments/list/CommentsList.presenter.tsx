import { ICommentWritListUIProps } from "./CommentsList.types";
import * as S from "./CommentsList.styles";
import InfiniteScroll from "react-infinite-scroller";
import BoardCommentListItemsUI from "./CommentsListItems.presenter";

export default function CommentWritListUI(props: ICommentWritListUIProps) {
  return (
    <div>
      <S.CommentList>
        <S.Scroll>
          <InfiniteScroll
            pageStart={0}
            loadMore={props.onLoadMore}
            hasMore={true}
            useWindow={false}
          >
            {props.data?.fetchBoardComments.map((el) => (
              <BoardCommentListItemsUI key={el._id} el={el} />
            ))}
          </InfiniteScroll>
        </S.Scroll>
      </S.CommentList>
    </div>
  );
}
