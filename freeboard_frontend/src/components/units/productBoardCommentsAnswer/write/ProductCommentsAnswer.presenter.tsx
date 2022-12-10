import CommentButtonPage from "../../../commons/buttons/commentSubmitbutton/button";
import TextareaQuestion from "../../../commons/inputs/textarea";
import { ICommentsAnswerUIProps } from "./ProductCommentsAnswer.types";

export default function CommentsAnswerUI(props: ICommentsAnswerUIProps) {
  return (
    <div>
      <form>
        <div>답변드립니다</div>
        <TextareaQuestion register={props.register("contents")} />
        <div>{props.formState.errors.contents?.message}</div>
        <CommentButtonPage
          title={props.isEdit ? "수정하기" : "등록하기"}
          handleSubmit={props.handleSubmit}
          onClickCommentSubmit={props.onClickCommentSubmit}
        ></CommentButtonPage>
      </form>
    </div>
  );
}
