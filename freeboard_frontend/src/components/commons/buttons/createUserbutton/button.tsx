import { IButtonPageProps } from "./button.types";

export default function CreateUserButtonPage(props: IButtonPageProps) {
  return (
    <button
      type="button"
      onClick={props.handleSubmit(props.onClickCreateUsers)}
    >
      {props.title}
    </button>
  );
}
