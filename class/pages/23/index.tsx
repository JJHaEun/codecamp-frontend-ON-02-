import { gql, useQuery } from "@apollo/client";
import { MouseEvent, useState } from "react";
import {
  IQuery,
  IQueryFetchBoardsArgs,
  IQueryFetchBoardsCountArgs,
} from "../../src/commons/types/generated/types";

// gql query
const FETCH_BOARDS = gql`
  query fetchBoards($page: Int) {
    fetchBoards(page: $page) {
      _id
      writer
      title
      contents
    }
  }
`;

const FETCH_BOARDS_COUNT = gql`
  query fetchBoardsCount {
    fetchBoardsCount
  }
`;
// fetchBoards

export default function PageNation() {
  const [startPage, setStartPage] = useState(1);

  const { data: dataBoardCount } = useQuery<
    Pick<IQuery, "fetchBoardsCount">,
    IQueryFetchBoardsCountArgs
  >(FETCH_BOARDS_COUNT);

  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS);

  const onClickPrevPage = () => {
    if (startPage === 1) return;
    setStartPage((prev) => prev - 10);
    //  setStartPage(startPage - 10);
    void refetch({ page: startPage - 10 });
  };

  const lastPage = dataBoardCount
    ? Math.ceil(dataBoardCount.fetchBoardsCount / 10)
    : 0; // 있으면 받아오고 없으면 아직 받아오기 전이면 마지막페이지 없다.

  const onClickNextPage = () => {
    if (startPage + 10 <= lastPage) {
      setStartPage((prev) => prev + 10);
      // 위와 동일setStartPage(startPage + 10 );
      void refetch({ page: startPage + 10 });
    }
  };
  const onClickPage =
    (boardId: number) => async (event: MouseEvent<HTMLSpanElement>) => {
      await refetch({ page: boardId });
    };
  return (
    <>
      {data?.fetchBoards?.map((el) => (
        <div key={el._id}>
          <span style={{ margin: "10px" }}>{el.writer}</span>
          <span style={{ margin: "10px" }}>{el.title}</span>
        </div>
      ))}

      <span onClick={onClickPrevPage}>이전페이지</span>
      {new Array(10).fill(1).map(
        (_, index) =>
          index + startPage <= lastPage && ( // 조건부연산자 사용법.앞에꺼 일때 뒤에꺼 실행
            <span
              key={index + startPage}
              onClick={onClickPage(index + startPage)}
              style={{ margin: "10px" }}
            >
              {index + startPage}
            </span> // last페이지보다 작거나 같으면 return부분의 span이 실행,아니면 무시
          )
      )}
      <span onClick={onClickNextPage}>다음페이지</span>

      {/* <span onClick={onClickPrevPage}>이전페이지</span>
      {new Array(10).fill(1).map((_, index) => {
        if (index + startPage <= lastPage) {
          return (
            <span
              key={index + startPage}
              id={String(index + startPage)}
              onClick={onClickPage}
              style={{ margin: "10px" }}
            >
              {index + startPage}
            </span> // last페이지보다 작거나 같으면 return부분의 span이 실행,
          );
        } else {
          // 아니라면 나머지를 빈 span으로처리.
          <span></span>;
        }
      })}
      <span onClick={onClickNextPage}>다음페이지</span> */}
      {/* {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((el) => (
        <span key={el} id={String(el)} onClick={onClickPage}>
          {el}
        </span>
      ))} */}

      {/* <span id="1" onClick={onClickPage}>
        1
      </span>
      <span id="2" onClick={onClickPage}>
        2
      </span>
      <span id="3" onClick={onClickPage}>
        3
      </span> */}
    </>
  );
}
