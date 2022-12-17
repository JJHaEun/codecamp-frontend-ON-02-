import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import {
  IQuery,
  IQueryFetchPointTransactionsArgs,
} from "../../../commons/types/generated/types";

import { FETCH_POINT_TRANSCATIONS } from "./Mypage.queries";
import MyPointListUI from "./MyPointList.presenter";

export default function MyPointList() {
  const router = useRouter();
  const { data, fetchMore } = useQuery<
    Pick<IQuery, "fetchPointTransactions">,
    IQueryFetchPointTransactionsArgs
  >(FETCH_POINT_TRANSCATIONS, {
    variables: { search: "" },
  });

  const onLoadMore = async () => {
    if (!data) return;
    await fetchMore({
      variables: {
        page: Math.ceil(data?.fetchPointTransactions?.length / 10) + 1,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (fetchMoreResult.fetchPointTransactions === undefined) {
          return {
            fetchPointTransactions: [...prev.fetchPointTransactions],
          };
        }
        return {
          // prettier-ignore
          fetchPointTransactions: ([
                    ...prev.fetchPointTransactions,
                    ...fetchMoreResult.fetchPointTransactions,
                  ]),
        };
      },
    });
  };

  const onClickMyPageMain = () => {
    void router.push(`/mypage`);
  };
  return (
    <MyPointListUI
      onLoadMore={onLoadMore}
      data={data}
      onClickMyPageMain={onClickMyPageMain}
    />
  );
}
