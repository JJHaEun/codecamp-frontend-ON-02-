import { gql, useQuery } from "@apollo/client";
import { MouseEvent } from "react";
import {
  IQuery,
  IQueryFetchBoardsArgs,
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

// fetchBoards

export default function PageNation() {
  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS);
  console.log(data?.fetchBoards);

  const onClickPage = async (event: MouseEvent<HTMLSpanElement>) => {
    await refetch({ page: Number(event.currentTarget.id) });
  };
  return (
    <>
      {/*  임시배열 10개를 생성하여 데이터가 없을떼도 높이 30px을 유지해 리플로우방지(느리게 레이아웃받는것) */}
      {data?.fetchBoards ??
        new Array(10).fill(1).map((el) => (
          <div key={el._id} style={{ height: "30px" }}>
            {/* 리플로우 방지위해 만약 없다는 가정에서도 높이 유지되게. 처음부터 위치가 정해져있음  또는 빈 div하나 만든 뒤 로딩 사진을 넣어도됨 */}
            <span style={{ margin: "10px" }}>{el.writer}</span>
            <span style={{ margin: "10px" }}>{el.title}</span>
          </div>
        ))}

      {new Array(10).fill(1).map((_, index) => (
        <span key={index + 1} id={String(index + 1)} onClick={onClickPage}>
          {index + 1}
        </span>
      ))}
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
