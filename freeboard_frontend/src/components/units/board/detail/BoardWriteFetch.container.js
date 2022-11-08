import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";

import BoardWriteFetchUI from "./BoardWriteFetch.presenter";
import { FETCH_BOARD } from "./BoardWriteFetch.queries";

export default function BoardWriteFetch() {
  const router = useRouter();

  const { data } = useQuery(FETCH_BOARD, {
    variables: {
      boardId: router.query._id,
    },
  });

  return <BoardWriteFetchUI data={data} />;
}
