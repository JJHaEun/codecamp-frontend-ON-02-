import { Modal, Rate } from "antd";
import { useRouter } from "next/router";
import { MouseEvent, useState } from "react";
import { getDate } from "../../../commons/utils/utils";
import * as S from "./CommentsList.styles";
import { IBoardCommentListItemsProps } from "./CommentsList.types";
import { UPDATE_BOARD_COMMENT } from "./CommentsList.queries";
import { success } from "../../board/alert/Alert";
import CommentsWrite from "../write/Comments.container";
import { useMutation } from "@apollo/client";
import {
  IMutation,
  IMutationUpdateBoardCommentArgs,
} from "../../../../commons/types/generated/types";

export default function BoardCommentListItemsUI(
  props: IBoardCommentListItemsProps
) {
  const router = useRouter();
  const [isEdit, setIsEdit] = useState(false);

  const onClickEdit = async () => {
    // 수정버튼을 누르면 댓글을 찾을 수 없습니다라고뜸
    setIsEdit((prev) => !prev);
  };
  //     try {
  //       await updateBoardComment({
  //         variables: {
  //           boardCommentId: props.el?._id
  //           password,
  //           updateBoardCommentInput: {
  //             contents,
  //             rating: value,
  //           },
  //         },
  //       });
  //       success();
  //     } catch (error) {
  //       if (error instanceof Error) Modal.error({ content: error.message });
  //     }
  //   };
  return (
    <>
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
                  onClick={props.onClickcheckPermissionDeleteModal}
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
