import CommentButtonPage from "../../../commons/buttons/commentSubmitbutton/button";
import TextareaQuestion from "../../../commons/inputs/textarea";
import { ICommentsQuestionUIProps } from "./ProductCommentsQuestion.types";
import { Comments, All } from "./ProductCommentsQuestion.styles";

export default function CommentsQuestionUI(props: ICommentsQuestionUIProps) {
  return (
    <Comments>
      <form>
        <div>문의드립니다</div>
        <All>
          <TextareaQuestion
            register={props.register("contents")}
            value={props.register("contents") || (props.el?.contents ?? "")}
          />
          <CommentButtonPage
            title={props.isEdit ? "수정하기" : "등록하기"}
            handleSubmit={props.handleSubmit}
            onClickCommentSubmit={
              props.isEdit
                ? props.onClickEditFinish
                : props.onClickCommentSubmit
            }
          ></CommentButtonPage>
        </All>
      </form>
    </Comments>
  );
}
