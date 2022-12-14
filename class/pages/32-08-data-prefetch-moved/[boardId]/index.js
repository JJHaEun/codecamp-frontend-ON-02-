import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";

const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      _id

      writer
      title
      contents
    }
  }
`;
export default function DynamicRoutedPage() {
  const router = useRouter();
  const { data } = useQuery(FETCH_BOARD, {
    // 실행할때
    variables: {
      boardId: router.query.boardId, // 위 쿼리문 변수 이용해 받을 것.
    },
  });
  console.log(data);
  // const onClickMoveEdit = () => {
  //   router.push(`/09-01-boards/${router.query._id}/edit`);
  // };
  return (
    <>
      {/* <div>{router.query.number}번 게시글로 이동이 완료되었습니댜!!</div> */}
      <div>작성자:{data && data.fetchBoard.writer}</div>
      <div>제목:{data ? data.fetchBoard.title : "로딩중입니다"}</div>
      <div>내용:{data?.fetchBoard.contents}</div>
      {/* <button onClick={onClickMoveEdit}>수정하기</button> */}
    </>
  );
}
