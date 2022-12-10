import { IButtonPageProps } from "./button.types";

export default function CommentButtonPage(props: IButtonPageProps) {
  return (
    <button
      type="button"
      onClick={props.handleSubmit(props.onClickCommentSubmit)}
    >
      {props.title}
    </button>
  );
}
