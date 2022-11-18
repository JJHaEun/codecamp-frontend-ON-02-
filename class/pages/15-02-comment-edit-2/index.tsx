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
  const [myIndex, setMyIndex] = useState([
    false, // index 0
    false, // index 1
    false, // index 2
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);
  // new Array(10).fill(false)
  const { data } = useQuery<Pick<IQuery, "fetchBoards">, IQueryFetchBoardsArgs>(
    FETCH_BOARDS
  );

  const onClickEdit = (event: MouseEvent<HTMLButtonElement>) => {
    const qqq = [...myIndex]; // 복사한 새 배열을 만듬.그리고 qqq와 myIndex를 비교해 교체하는 방식
    // 스프레드 연산자 사용하지 않으면 원본도 바뀌어져 습관적으로 배열가저올 시 스프레드로!!
    qqq[Number(event.currentTarget.id)] = true;
    setMyIndex(qqq); // 클릭한 인덱스를 두개이상도 input창 열 수있게.
  };
  // id 부분은 문자만 들어가기에 문자로 바꿈. 다만 지금 setMyIndex에는 숫자가 들어가기에 다시 숫자로 변환.
  return (
    <>
      {data?.fetchBoards?.map((el, index) => (
        <div key={el._id}>
          {!myIndex[index] && ( // false면 기본으로나오게
            <div>
              <span style={{ margin: "10px" }}>{el.writer}</span>
              <span style={{ margin: "10px" }}>{el.title}</span>
              <button id={String(index)} onClick={onClickEdit}>
                수정하기
              </button>
            </div>
          )}
          {myIndex[index] && ( // true면 수정하기 input창 열리게
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
