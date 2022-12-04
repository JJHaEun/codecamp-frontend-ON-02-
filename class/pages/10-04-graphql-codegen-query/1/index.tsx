import { gql, useQuery } from "@apollo/client";
import {
  IQuery,
  IQueryFetchBoardArgs,
} from "../../../src/commons/types/generated/types";

const FETCH_BOARD = gql`
  query fetchBoard($number: Int) {
    fetchBoard(number: $number) {
      number
      writer
      title
      contents
    }
  }
`;
export default function staticRoutedPage() {
  // result (받는)타입, variables타입
  const { data } = useQuery<Pick<IQuery, "fetchBoard">, IQueryFetchBoardArgs>(
    FETCH_BOARD,
    {
      // 실행할때
      variables: {
        number: 238,
      },
    }
  );
  console.log(data);
  return (
    <>
      <div>1번 게시글로 이동이 완료되었습니댜!!</div>
      <div>작성자:{data && data.fetchBoard?.writer}</div>
      <div>제목:{data ? data.fetchBoard?.title : "로딩중입니다"}</div>
      <div>내용:{data?.fetchBoard?.contents}</div>
    </>
  );
}
