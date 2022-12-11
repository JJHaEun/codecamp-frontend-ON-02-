import { useMutation } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { MouseEvent, useState } from "react";
import {
  IMutation,
  IMutationDeleteUseditemQuestionAnswerArgs,
} from "../../../../commons/types/generated/types";
import { FETCH_USED_ITEM_QUESTIONS } from "../../productBoardCommentsQuestion/list/ProductCommentsQustionList.queries";
import { DELETE_USED_ITEM_QUESTION_ANSWER } from "./ProductCommentsAnswerList.queries";
import { ICommentsAnswerListItems } from "./ProductCommentsAnswerList.types";
import CommentsAnswerListItemsUI from "./ProductCommentsAnswerListItems.presenter";

export default function CommentsAnswerListItems(
  props: ICommentsAnswerListItems
) {
  const router = useRouter();
  const [isOpenDelete, setIsOpenDelete] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [useditemQuestionAnswerId, setUseditemQuestionAnswerId] = useState("");
  const [deleteUseditemQuestionAnswer] = useMutation<
    Pick<IMutation, "deleteUseditemQuestionAnswer">,
    IMutationDeleteUseditemQuestionAnswerArgs
  >(DELETE_USED_ITEM_QUESTION_ANSWER);

  const onClickEdit = () => {
    setIsEdit(true);
  };

  const OnclickDeleteComment = async (event: MouseEvent<HTMLElement>) => {
    if (!(event.target instanceof HTMLElement)) return;
    try {
      await deleteUseditemQuestionAnswer({
        variables: {
          //  ...inputs
          useditemQuestionAnswerId,
        },

        refetchQueries: [
          {
            query: FETCH_USED_ITEM_QUESTIONS,
            variables: { useditemId: router.query._id },
          },
        ],
      });
      setIsOpenDelete((prev) => !prev);

      Modal.success({ content: "삭제되었습니다" });
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  const onClickcheckPermissionDeleteModal = (
    event: MouseEvent<HTMLButtonElement>
  ) => {
    setUseditemQuestionAnswerId(event.currentTarget.id);
    setIsOpenDelete((prev) => !prev);
  };

  const handleCancel = () => {
    if (typeof router.query._id !== "string") return;
    setIsOpenDelete((prev) => !prev);
    void router.push(`/market/${router.query._id}`);
  };

  return (
    <CommentsAnswerListItemsUI
      onClickEdit={onClickEdit}
      isEdit={isEdit}
      setIsEdit={setIsEdit}
      isOpenDelete={isOpenDelete}
      OnclickDeleteComment={OnclickDeleteComment}
      onClickcheckPermissionDeleteModal={onClickcheckPermissionDeleteModal}
      handleCancel={handleCancel}
      el={props.el}
    />
  );
}
