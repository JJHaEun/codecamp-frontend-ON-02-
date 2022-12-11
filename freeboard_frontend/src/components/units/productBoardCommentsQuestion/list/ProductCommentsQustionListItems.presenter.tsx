import { Modal } from "antd";
import { getDate } from "../../../commons/utils/utils";
import CommentsAnswer from "../../productBoardCommentsAnswer/write/ProductCommentsAnswer.container";
import CommentsQuestion from "../write/ProductCommentsQuestion.container";
import { ICommentsListItemsUIProps } from "./ProductCommentsQustionList.types";

export default function CommentsListItemsUI(props: ICommentsListItemsUIProps) {
  return (
    <>
      {props.isOpenDelete && (
        <Modal
          title="삭제"
          visible={true}
          onOk={props.OnclickDeleteComment}
          onCancel={props.handleCancel}
          cancelText="취소"
        >
          <div>삭제하시겠습니까?</div>
        </Modal>
      )}
      {!props.isEdit && (
        <div key={props.el._id}>
          <div>{props.el.contents}</div>
          <div>{getDate(props.el?.createdAt)}</div>
          <div>
            <button onClick={props.onClickEdit}>수정</button>
            <button
              id={props.el._id}
              onClick={props.onClickcheckPermissionDeleteModal}
            >
              삭제
            </button>
            <button onClick={props.onClickAnswer}>댓글</button>
          </div>
        </div>
      )}
      {props.isEdit && (
        <CommentsQuestion
          el={props.el}
          isEdit={true}
          setIsEdit={props.setIsEdit}
        />
      )}
      {props.isHaveAnswer && (
        <CommentsAnswer
          isHaveAnswer={true}
          setIsHaveAnswer={props.setIsHaveAnswer}
        />
      )}
    </>
  );
}
