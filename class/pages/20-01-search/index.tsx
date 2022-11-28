import { gql, useQuery } from "@apollo/client";
import { ChangeEvent, MouseEvent, useState } from "react";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../src/commons/types/generated/types";

// gql query
const FETCH_BOARDS = gql`
  query fetchBoards($page: Int, $search: String) {
    fetchBoards(page: $page, search: $search) {
      _id
      writer
      title
      contents
    }
  }
`;

// fetchBoards

export default function PageNation() {
  const [search, setSearch] = useState("");
  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS);
  console.log(data?.fetchBoards);

  const onClickPage = async (event: MouseEvent<HTMLSpanElement>) => {
    await refetch({ page: Number(event.currentTarget.id) }); // 클릭한 페이지도 검색한 그 키워드가 있는페이지어야함
    // 검색에서 refetch할 때 사용한 search검색어가 저장되어있는 상태이므로 추가로 search 포함하지 않아도 됨.
  };

  const onClickSearch = async () => {
    await refetch({ search, page: 1 });
  };
  const onChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };
  return (
    <>
      <input
        type="text"
        placeholder="검색어를 입력하세요"
        onChange={onChangeSearch}
      />
      <button onClick={onClickSearch}>검색하기</button>
      {data?.fetchBoards?.map((el) => (
        <div key={el._id}>
          <span style={{ margin: "10px" }}>{el.writer}</span>
          <span style={{ margin: "10px" }}>{el.title}</span>
        </div>
      ))}

      {new Array(10).fill(1).map((_, index) => (
        <span key={index + 1} id={String(index + 1)} onClick={onClickPage}>
          {index + 1}
        </span>
      ))}
    </>
  );
}
