import { IButtonPageProps } from "./button.types";

export default function ButtonPage(props: IButtonPageProps) {
  return (
    <button type="button" onClick={props.handleSubmit(props.onClickSubmit)}>
      {props.title}
    </button>
  );
}
