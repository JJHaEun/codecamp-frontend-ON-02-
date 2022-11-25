import { Modal, Rate } from "antd";
import { useRouter } from "next/router";
import { ChangeEvent, MouseEvent, useState } from "react";
import { getDate } from "../../../commons/utils/utils";
import * as S from "./CommentsList.styles";
import { IBoardCommentListItemsProps } from "./CommentsList.types";
import {
  DELETE_BOARD_COMMENT,
  FETCH_BOARD_COMMENT,
} from "./CommentsList.queries";
import CommentsWrite from "../write/Comments.container";
import { useMutation } from "@apollo/client";
import {
  IMutation,
  IMutationDeleteBoardCommentArgs,
} from "../../../../commons/types/generated/types";

export default function BoardCommentListItemsUI(
  props: IBoardCommentListItemsProps
) {
  const router = useRouter();
  const [isEdit, setIsEdit] = useState(false);
  const [isOpenDelete, setIsOpenDelete] = useState(false);
  const [boardCommentId, setBoardCommentId] = useState("");
  const [password, setPassword] = useState("");

  const onClickEdit = async () => {
    setIsEdit((prev) => !prev);
  };

  const [deleteBoardComment] = useMutation<
    Pick<IMutation, "deleteBoardComment">,
    IMutationDeleteBoardCommentArgs
  >(DELETE_BOARD_COMMENT);

  const OnclickDeleteComment = async (event: MouseEvent<HTMLElement>) => {
    if (!(event.target instanceof HTMLElement)) return;
    try {
      await deleteBoardComment({
        variables: {
          //  ...inputs
          boardCommentId,
          password,
        },

        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENT,
            variables: { boardId: router.query._id },
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
    setBoardCommentId(event.currentTarget.id);
    setIsOpenDelete((prev) => !prev);
  };

  const onChangeDeletePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleCancel = () => {
    if (typeof router.query._id !== "string") return;
    setIsOpenDelete((prev) => !prev);
    void router.push(`/boards/${router.query._id}`);
  };

  return (
    <>
      {isOpenDelete && (
        <Modal
          title="삭제"
          visible={true}
          onOk={OnclickDeleteComment}
          onCancel={handleCancel}
          cancelText="취소"
        >
          <div>비밀번호를 입력후,ok버튼을 누르시면 삭제됩니다</div>
          <div> 비밀번호 입력</div>
          <input type="password" onChange={onChangeDeletePassword} />
        </Modal>
      )}
      {!isEdit && (
        <S.All key={props.el._id} id={props.el.writer}>
          <S.Img src="/messenger.png"></S.Img>

          <div>
            <Rate allowHalf disabled value={props.el?.rating} />
            <S.Writer>{props.el?.writer}</S.Writer>
            <S.Contents>{props.el?.contents}</S.Contents>
            <S.Date>{getDate(props.el?.createdAt)}</S.Date>
            <S.ButtonGroup>
              <div>
                <S.Button onClick={onClickEdit}>수정</S.Button>
              </div>
              <div>
                <S.Button2
                  id={props.el._id}
                  onClick={onClickcheckPermissionDeleteModal}
                >
                  <S.ButtonImg
                    id={props.el._id}
                    src="/delete-button.png"
                  ></S.ButtonImg>
                </S.Button2>
              </div>
            </S.ButtonGroup>
          </div>
        </S.All>
      )}
      {isEdit && (
        <CommentsWrite isEdit={true} setIsEdit={setIsEdit} el={props.el} />
      )}
    </>
  );
}
