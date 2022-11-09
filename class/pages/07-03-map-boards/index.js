import { gql, useQuery } from "@apollo/client";
import styled from "@emotion/styled";

const FETCH_BOARDS = gql`
  query fetchBoards {
    fetchBoards {
      number
      writer
      title
      contents
    }
  }
`;

const Row = styled.div`
  display: flex;
`;
const Column = styled.div`
  width: 25%;
`;
export default function staticRoutedPage() {
  const { data } = useQuery(FETCH_BOARDS);
  console.log(data);
  return (
    <>
      {data?.fetchBoards.map((el) => (
        <Row>
          <Column>
            <input type="checkbox" />
          </Column>
          <Column> 작성자: {el.writer}</Column>
          <Column> 제목: {el.title}</Column>
          <Column> 내용: {el.contents}</Column>
        </Row>
      ))}
    </>
  );
}
