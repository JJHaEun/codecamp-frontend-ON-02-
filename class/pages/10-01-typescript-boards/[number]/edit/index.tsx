import BoardWrite from "../../../../src/components/units/board/10-write/BoardWrite.container";
import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
export default function GraphqlMutationPage() {
  const router = useRouter();
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
  const { data } = useQuery(FETCH_BOARD, {
    //실행할때
    variables: {
      number: Number(router.query.number), //위 쿼리문 변수 이용해 받을 것.
    },
  });

  return <BoardWrite isEdit={true} data={data} />;
}
