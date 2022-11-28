import { gql, useQuery } from "@apollo/client";
import { ChangeEvent, MouseEvent } from "react";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../src/commons/types/generated/types";
import _ from "lodash";
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
  // const [search, setSearch] = useState("");
  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS);
  console.log(data?.fetchBoards);

  const onClickPage = async (event: MouseEvent<HTMLSpanElement>) => {
    await refetch({ page: Number(event.currentTarget.id) }); // 클릭한 페이지도 검색한 그 키워드가 있는페이지어야함
  };

  // const onClickSearch = async () => {
  //   await refetch({ search, page: 1 });
  // };

  const getDebounce = _.debounce((value) => {
    // 전달 받은것을 매개변수로 받음
    void refetch({ search: value, page: 1 });
  }, 1000); // 1초 이내에 재입력된것은 무시. 1초 이내에 무언가 입력이 안되면 마지막에 한번 실행.
  const onChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    // void refetch({ search: event.target.value, page: 1 }); // 검색어가 달라질대마다 리페치
    getDebounce(event.target.value); // 여기에서의 event.target.value니까 함수에 전달
  };
  return (
    <>
      <input
        type="text"
        placeholder="검색어를 입력하세요"
        onChange={onChangeSearch}
      />
      {/* <button onClick={onClickSearch}>검색하기</button> */}
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
