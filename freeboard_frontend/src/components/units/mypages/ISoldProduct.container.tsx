import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import {
  IQuery,
  IQueryFetchUseditemsISoldArgs,
} from "../../../commons/types/generated/types";

import ISoldProductsUI from "./ISoldProduct.presenter";
import { FETCH_USED_ITEMS_I_SOLD } from "./Mypage.queries";

export default function ISoldProducts() {
  const router = useRouter();
  const { data, fetchMore } = useQuery<
    Pick<IQuery, "fetchUseditemsISold">,
    IQueryFetchUseditemsISoldArgs
  >(FETCH_USED_ITEMS_I_SOLD, {
    variables: { search: "" },
  });

  const onLoadMore = async () => {
    if (!data) return;

    await fetchMore({
      variables: {
        page: Math.ceil(data?.fetchUseditemsISold?.length / 10) + 1,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (fetchMoreResult.fetchUseditemsISold === undefined) {
          return {
            fetchUseditemsISold: [...prev.fetchUseditemsISold],
          };
        }
        return {
          // prettier-ignore
          fetchUseditemsISold: ([
                    ...prev.fetchUseditemsISold,
                    ...fetchMoreResult.fetchUseditemsISold,
                  ]),
        };
      },
    });
  };
  const onClickMyPageMain = () => {
    void router.push(`/mypage`);
  };
  return (
    <ISoldProductsUI
      data={data}
      onLoadMore={onLoadMore}
      onClickMyPageMain={onClickMyPageMain}
    />
  );
}
