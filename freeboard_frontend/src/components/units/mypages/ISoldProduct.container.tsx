import { useQuery } from "@apollo/client";
import {
  IQuery,
  IQueryFetchUseditemsISoldArgs,
} from "../../../commons/types/generated/types";
import ISoldProductsUI from "./ISoldProduct.presenter";
import { FETCH_USED_ITEMS_I_SOLD } from "./Mypage.queries";

export default function ISoldProducts() {
  const { data, fetchMore } = useQuery<
    Pick<IQuery, "fetchUseditemsISold">,
    IQueryFetchUseditemsISoldArgs
  >(FETCH_USED_ITEMS_I_SOLD, {
    variables: { search: "" },
  });

  const onLoadMore = async () => {
    if (!data) return;

    const result = await fetchMore({
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
    console.log(result);
  };
  return <ISoldProductsUI data={data} onLoadMore={onLoadMore} />;
}
