import { IButtonPageProps } from "./button.types";
import { ButtonStyle } from "./button.style";
export default function CommentButtonPage(props: IButtonPageProps) {
  return (
    <ButtonStyle
      type="button"
      onClick={props.handleSubmit(props.onClickCommentSubmit)}
    >
      {props.title}
    </ButtonStyle>
  );
}
