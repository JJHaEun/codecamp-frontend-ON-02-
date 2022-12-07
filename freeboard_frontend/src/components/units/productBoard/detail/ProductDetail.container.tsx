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
import { FETCH_USED_ITEM } from "../write/ProductWrite.queries";
import ProductDetailUI from "./ProductDetail.presenter";
import {
  DELETE_USED_ITEM,
  TOGGLE_USED_ITME_PICK,
} from "./ProductDetail.queries";

export default function ProductDetail() {
  const router = useRouter();
  const { onClickMoveToPage } = useMoveToPage();
  const [toggleUseditemPick] = useMutation(TOGGLE_USED_ITME_PICK);
  const [deleteUseditem] = useMutation(DELETE_USED_ITEM);
  const [isOpenDelete, setIsOpenDelete] = useRecoilState(isOpenDeleteState);
  const { data } = useQuery<
    Pick<IQuery, "fetchUseditem">,
    IQueryFetchUseditemArgs
  >(FETCH_USED_ITEM, {
    variables: {
      useditemId: String(router.query._id),
    },
  });

  const onClickPick = async () => {
    await toggleUseditemPick({
      variables: {
        useditemId: router.query._id,
      },
      refetchQueries: [
        {
          query: FETCH_USED_ITEM,
          variables: {
            useditemId: router.query._id,
          },
        },
      ],
    });
  };
  const onClickDelete = async () => {
    try {
      await deleteUseditem({
        variables: {
          useditemId: router.query._id,
        },
        update(cache, { data }) {
          cache.modify({
            fields: {
              fetchUsedItems: (prev) => {
                const deleteUseditemId = data.deleteUseditem;
                const filteredPrev = prev.filter(
                  (el: any) => el._id !== deleteUseditemId
                );
                return [...filteredPrev];
              },
            },
          });
        },
      });

      Modal.success({ content: "삭제가 완료되었습니다" });
      void router.push(`/market`);
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };
  const onClickcheckPermissionDeleteModal = () => {
    setIsOpenDelete(true);
  };

  const handleCancel = () => {
    if (typeof router.query._id !== "string") return;
    setIsOpenDelete(false);
    void router.push(`/market/${router.query._id}`);
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
      />
    </>
  );
}
