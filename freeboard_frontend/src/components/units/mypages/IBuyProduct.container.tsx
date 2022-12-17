import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import {
  IQuery,
  IQueryFetchUseditemsIBoughtArgs,
} from "../../../commons/types/generated/types";

import IBoughtProductUI from "./IBuyProduct.presenter";
import { FETCH_USED_ITEM_IBOUGHT } from "./Mypage.queries";

export default function IBoughtProduct() {
  const router = useRouter();
  const { data, fetchMore } = useQuery<
    Pick<IQuery, "fetchUseditemsIBought">,
    IQueryFetchUseditemsIBoughtArgs
  >(FETCH_USED_ITEM_IBOUGHT, {
    variables: { search: "" },
  });

  const onLoadMore = async () => {
    if (!data) return;
    await fetchMore({
      variables: {
        page: Math.ceil(data?.fetchUseditemsIBought?.length / 10) + 1,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (fetchMoreResult.fetchUseditemsIBought === undefined) {
          return {
            fetchUseditemsIBought: [...prev.fetchUseditemsIBought],
          };
        }
        return {
          // prettier-ignore
          fetchUseditemsIBought: ([
                ...prev.fetchUseditemsIBought,
                ...fetchMoreResult.fetchUseditemsIBought,
              ]),
        };
      },
    });
  };
  const onClickMyPageMain = () => {
    void router.push(`/mypage`);
  };
  return (
    <IBoughtProductUI
      data={data}
      onLoadMore={onLoadMore}
      onClickMyPageMain={onClickMyPageMain}
    />
  );
}
