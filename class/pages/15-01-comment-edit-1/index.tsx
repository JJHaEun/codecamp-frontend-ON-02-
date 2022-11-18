import { gql, useQuery } from "@apollo/client";
import { MouseEvent, useState } from "react";
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
  const [myIndex, setMyIndex] = useState(0);
  const { data } = useQuery<Pick<IQuery, "fetchBoards">, IQueryFetchBoardsArgs>(
    FETCH_BOARDS
  );

  const onClickEdit = (event: MouseEvent<HTMLButtonElement>) => {
    setMyIndex(Number(event.currentTarget.id));
  };
  // id 부분은 문자만 들어가기에 문자로 바꿈. 다만 지금 setMyIndex에는 숫자가 들어가기에 다시 숫자로 변환.
  return (
    <>
      {data?.fetchBoards?.map((el, index) => (
        <div key={el._id}>
          {index !== myIndex && ( // 클릭시 인덱스가 아니면 기본으로 목록출력.
            <div>
              <span style={{ margin: "10px" }}>{el.writer}</span>
              <span style={{ margin: "10px" }}>{el.title}</span>
              <button id={String(index)} onClick={onClickEdit}>
                수정하기
              </button>
            </div>
          )}
          {index === myIndex && ( // 인덱스면 수정창으로 바뀜.
            <div>
              수정할 내용:
              <input type="text" />
            </div>
          )}
        </div>
      ))}
    </>
  );
}
