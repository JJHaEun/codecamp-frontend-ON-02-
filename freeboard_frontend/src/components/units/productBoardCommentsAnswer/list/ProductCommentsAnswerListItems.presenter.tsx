import { Modal } from "antd";
import { getDate } from "../../../commons/utils/utils";
import CommentsAnswer from "../write/ProductCommentsAnswer.container";
import { ICommentsAnswerListItemsUIProps } from "./ProductCommentsAnswerList.types";

export default function CommentsAnswerListItemsUI(
  props: ICommentsAnswerListItemsUIProps
) {
  return (
    <>
      {props.isOpenDelete && (
        <Modal
          title="삭제"
          visible={true}
          onOk={props.OnclickDeleteComment}
          onCancel={props.handleCancel}
          cancelText="취소"
        ></Modal>
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
          </div>
        </div>
      )}
      {props.isEdit && (
        <CommentsAnswer
          el={props.el}
          isEdit={true}
          setIsEdit={props.setIsEdit}
        />
      )}
    </>
  );
}
