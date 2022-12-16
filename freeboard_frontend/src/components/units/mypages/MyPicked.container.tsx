import {
  IQuery,
  IQueryFetchUseditemsIPickedArgs,
} from "../../../commons/types/generated/types";
import { FETCH_USED_ITEMS_I_PICKED } from "./Mypage.queries";
import { useQuery } from "@apollo/client";
import IPikedPageUI from "./MyPicked.presenter";
import { useRouter } from "next/router";
import { MouseEvent } from "react";

export default function IPikedPage() {
  const router = useRouter();

  const { data, fetchMore } = useQuery<
    Pick<IQuery, "fetchUseditemsIPicked">,
    IQueryFetchUseditemsIPickedArgs
  >(FETCH_USED_ITEMS_I_PICKED, {
    variables: { search: "" },
  });
  console.log(data?.fetchUseditemsIPicked);

  const onLoadMore = async () => {
    if (!data) return;
    await fetchMore({
      variables: {
        page: Math.ceil(data?.fetchUseditemsIPicked?.length / 10) + 1,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (fetchMoreResult.fetchUseditemsIPicked === undefined) {
          return {
            fetchUseditemsIPicked: [...prev.fetchUseditemsIPicked],
          };
        }
        return {
          // prettier-ignore
          fetchUseditemsIPicked: ([
            ...prev.fetchUseditemsIPicked,
            ...fetchMoreResult.fetchUseditemsIPicked,
          ]),
        };
      },
    });
  };

  const onClickMyPageMain = () => {
    void router.push(`/mypage`);
  };

  const onClickProductDetail = (event: MouseEvent<HTMLDivElement>) => {
    void router.push(`/market/${event?.currentTarget.id}`);
  };

  return (
    <IPikedPageUI
      data={data}
      onLoadMore={onLoadMore}
      onClickProductDetail={onClickProductDetail}
      onClickMyPageMain={onClickMyPageMain}
    />
  );
}
