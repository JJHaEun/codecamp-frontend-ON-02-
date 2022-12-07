import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import {
  IQuery,
  IQueryFetchBoardArgs,
} from "../../../../commons/types/generated/types";

import DetailBoardPagUI from "./detail.presenter";

export default function DetailBoardPage() {
  const FETCH_BOARDS = gql`
    query fetchBoard($boardId: ID!) {
      fetchBoard(boardId: $boardId) {
        _id
        writer
        title
        contents
      }
    }
  `;
  const router = useRouter();
  const { data } = useQuery<Pick<IQuery, "fetchBoard">, IQueryFetchBoardArgs>(
    FETCH_BOARDS,
    {
      variables: {
        boardId: String(router.query.id),
      },
    }
  );
  console.log(data);

  return <DetailBoardPagUI data={data} />;
}
