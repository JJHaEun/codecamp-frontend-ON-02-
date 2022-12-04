import { IProductButtonProps } from "./button.types";

export default function ProductButtonPage(props: IProductButtonProps) {
  return (
    <button type="button" onClick={props.handleSubmit(props.onClick)}>
      {props.title}
    </button>
  );
}
