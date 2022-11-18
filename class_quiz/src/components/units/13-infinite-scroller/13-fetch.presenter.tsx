import InfiniteScroll from "react-infinite-scroller";
import { IInfiniteScrollUIProps } from "./13-fetch.types";
import * as S from "./13-fetch.styles";
export default function InfiniteScrollUI(props: IInfiniteScrollUIProps) {
  return (
    <S.Title>
      <h1>게시판 목록</h1>
      <S.Scroll>
        <InfiniteScroll
          pageStart={0}
          loadMore={props.onLoadMore}
          hasMore={true}
          useWindow={false}
        >
          {props.data?.fetchBoards?.map((el) => (
            <S.Box key={el.number}>
              <S.Div>{el.title}</S.Div>
              <S.Div>{el.writer}</S.Div>
            </S.Box>
          )) ?? <div></div>}
        </InfiniteScroll>
      </S.Scroll>
    </S.Title>
  );
}
