import { Modal } from "antd";
import { getDate } from "../../../commons/utils/utils";
// import CommentsAnswer from "../../productBoardCommentsAnswer/write/ProductCommentsAnswer.container";
import CommentsQuestion from "../write/ProductCommentsQuestion.container";
import { ICommentsListItemsUIProps } from "./ProductCommentsQustionList.types";
import {
  CommentButton,
  ButtonEditAndDelete,
} from "./ProductCommentsQuestion.styles";
import {
  ClearOutlined,
  EditOutlined,
  // , CommentOutlined
} from "@ant-design/icons";
export default function CommentsListItemsUI(props: ICommentsListItemsUIProps) {
  return (
    <>
      {props.isOpenDelete && (
        <Modal
          title="삭제"
          open={true}
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
          <CommentButton>
            <ButtonEditAndDelete onClick={props.onClickEdit}>
              <EditOutlined />
              수정
            </ButtonEditAndDelete>
            <ButtonEditAndDelete
              id={props.el._id}
              onClick={props.onClickcheckPermissionDeleteModal}
            >
              <ClearOutlined /> 삭제
            </ButtonEditAndDelete>
            {/* <ButtonReplyAndDelete onClick={props.onClickAnswer}> */}
            {/* <CommentOutlined onClick={props.onClickAnswer} /> */}
            {/* 댓글 */}
            {/* </ButtonReplyAndDelete> */}
          </CommentButton>
        </div>
      )}
      {props.isEdit && (
        <CommentsQuestion
          el={props.el}
          isEdit={true}
          setIsEdit={props.setIsEdit}
        />
      )}
      {/* {props.isHaveAnswer && (
        <CommentsAnswer
          setIsHaveAnswer={props.setIsHaveAnswer}
          isHaveAnswer={props.isHaveAnswer}
          id={props.el._id}
          isEdit={false}
          el={{
            __typename: undefined,
            _id: "",
            contents: "",
            createdAt: undefined,
            deletedAt: undefined,
            updatedAt: undefined,
            useditemQuestion: {
              __typename: undefined,
              _id: "",
              contents: "",
              createdAt: undefined,
              deletedAt: undefined,
              updatedAt: undefined,
              useditem: {
                __typename: undefined,
                _id: "",
                buyer: undefined,
                contents: "",
                createdAt: undefined,
                deletedAt: undefined,
                images: undefined,
                name: "",
                pickedCount: undefined,
                price: undefined,
                remarks: "",
                seller: undefined,
                soldAt: undefined,
                tags: undefined,
                updatedAt: undefined,
                useditemAddress: undefined,
              },
              user: {
                __typename: undefined,
                _id: "",
                createdAt: undefined,
                deletedAt: undefined,
                email: "",
                name: "",
                picture: undefined,
                updatedAt: undefined,
                userPoint: undefined,
              },
            },
            user: {
              __typename: undefined,
              _id: "",
              createdAt: undefined,
              deletedAt: undefined,
              email: "",
              name: "",
              picture: undefined,
              updatedAt: undefined,
              userPoint: undefined,
            },
          }}
        />
      )} */}
    </>
  );
}
