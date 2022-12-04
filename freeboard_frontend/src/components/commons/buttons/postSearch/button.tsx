import { IPostSearchButtonProps } from "./button.types";

export default function PostSearchButton(props: IPostSearchButtonProps) {
  return (
    <button type="button" onClick={props.handleSubmit(props.onClickAddress)}>
      {props.title}
    </button>
  );
}
