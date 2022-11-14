import { gql, useQuery } from "@apollo/client";

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
  const { data } = useQuery(FETCH_BOARD, {
    variables: {
      number: 238,
    },
  });
  console.log(data);
  return (
    <>
      <div>2번 게시글로 이동이 완료되었습니댜!!</div>
      <div>작성자:{data && data.fetchBoard.writer}</div>
      <div>제목:{data && data.fetchBoard.title}</div>
      <div>내용:{data && data.fetchBoard.contents}</div>
    </>
  );
}
