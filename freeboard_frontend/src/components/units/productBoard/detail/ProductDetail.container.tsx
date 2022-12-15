import { useMutation, useQuery } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
// import { FETCH_USED_ITEMS } from "../../../../../pages/unUserBasket";
import { isOpenDeleteState } from "../../../../commons/libraries/store";
import {
  IQuery,
  IQueryFetchUseditemArgs,
} from "../../../../commons/types/generated/types";
import { useMoveToPage } from "../../../commons/hooks/useMoToPage";
import { FETCH_USER_LOGGED_IN } from "../../../commons/login-sucess/01/LoginSuccess.queries";
import { FETCH_USED_ITEMS } from "../list/ProductsList.queries";
import { FETCH_USED_ITEM } from "../write/ProductWrite.queries";
import ProductDetailUI from "./ProductDetail.presenter";
import {
  CREATE_POINT_TRANSACTION_OF_BUYING_AND_SELLING,
  DELETE_USED_ITEM,
  TOGGLE_USED_ITEM_PICK,
} from "./ProductDetail.queries";

export default function ProductDetail() {
  const router = useRouter();
  const { onClickMoveToPage } = useMoveToPage();
  const [toggleUseditemPick] = useMutation(TOGGLE_USED_ITEM_PICK);
  const [deleteUseditem] = useMutation(DELETE_USED_ITEM);
  const [createPointTransactionOfBuyingAndSelling] = useMutation(
    CREATE_POINT_TRANSACTION_OF_BUYING_AND_SELLING
  );
  const [isOpenDelete, setIsOpenDelete] = useRecoilState(isOpenDeleteState);
  const { data } = useQuery<
    Pick<IQuery, "fetchUseditem">,
    IQueryFetchUseditemArgs
  >(FETCH_USED_ITEM, {
    variables: {
      useditemId: String(router.query._id),
    },
  });
  // console.log(data?.fetchUserLoggedIn?.email ?? "");

  const onClickPick = async () => {
    // if (typeof router.query._id !== "string") return;
    if (!localStorage.getItem("accessToken")) {
      Modal.info({ content: "로그인이 필요합니다" });
      void router.push("/login");
      return;
    }
    await toggleUseditemPick({
      variables: {
        useditemId: router.query._id,
      },
      optimisticResponse: {
        toggleUseditemPick: (data?.fetchUseditem.pickedCount ?? 0) + 1, // 현제값 +1을 데이터 요청하고 바로 넣음. 일단 먼저 업데이트되게.(속임수) 숫자면(있으면 앞에꺼 없으면 0 +1)
      },
      refetchQueries: [
        {
          query: FETCH_USED_ITEM,
          variables: { useditemId: router.query._id },
        },
      ],
    });
  };
  console.log(data?.fetchUseditem.pickedCount);
  const onClickDelete = async () => {
    if (typeof router.query._id !== "string") return;
    try {
      await deleteUseditem({
        variables: {
          useditemId: router.query._id,
        },
        refetchQueries: [
          {
            query: FETCH_USED_ITEMS,
            variables: { useditemId: router.query._id },
          },
        ],
      });

      Modal.success({ content: "삭제가 완료되었습니다" });
      void router.push(`/market`);
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };
  const onClickcheckPermissionDeleteModal = () => {
    if (!data?.fetchUseditem.seller?.name) {
      Modal.info({ content: "권한이 없습니다" });
      void router.push("/market");
      return;
    }
    setIsOpenDelete(true);
  };

  const handleCancel = () => {
    if (typeof router.query._id !== "string") return;
    setIsOpenDelete(false);
    void router.push(`/market/${router.query._id}`);
  };
  const onClickBuy = async () => {
    if (!localStorage.getItem("accessToken")) {
      Modal.info({ content: "로그인 후 이용 가능합니다" });
      void router.push("/login");
      return;
    }

    console.log(data?.fetchUseditem.buyer);

    if (typeof router.query._id !== "string") return;

    try {
      const result = await createPointTransactionOfBuyingAndSelling({
        variables: {
          useritemId: router.query._id,
        },

        refetchQueries: [
          {
            query: FETCH_USER_LOGGED_IN,
          },
        ],
      });
      console.log(result);
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  return (
    <>
      <ProductDetailUI
        data={data}
        onClickMoveToPage={onClickMoveToPage}
        onClickPick={onClickPick}
        onClickDelete={onClickDelete}
        onClickcheckPermissionDeleteModal={onClickcheckPermissionDeleteModal}
        handleCancel={handleCancel}
        isOpenDelete={isOpenDelete}
        onClickBuy={onClickBuy}
      />
    </>
  );
}
