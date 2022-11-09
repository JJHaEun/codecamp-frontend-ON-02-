import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";

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
export default function DynamicRoutedPage() {
  const router = useRouter();
  const { data } = useQuery(FETCH_BOARD, {
    //실행할때
    variables: {
      number: Number(router.query.number), //위 쿼리문 변수 이용해 받을 것.
    },
  });
  console.log(data);
  const onClickMoveEdit = () => {
    router.push(`/08-05-boards/${router.query.number}/edit`);
  };
  return (
    <>
      <div>{router.query.number}번 게시글로 이동이 완료되었습니댜!!</div>
      <div>작성자:{data && data.fetchBoard.writer}</div>
      <div>제목:{data ? data.fetchBoard.title : "로딩중입니다"}</div>
      <div>내용:{data?.fetchBoard.contents}</div>
      <button onClick={onClickMoveEdit}>수정하기</button>
    </>
  );
}
