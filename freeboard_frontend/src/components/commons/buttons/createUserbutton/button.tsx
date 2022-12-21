import { IButtonPageProps } from "./button.types";
import { CreateUserButton } from "./button.styles";
export default function CreateUserButtonPage(props: IButtonPageProps) {
  return (
    <CreateUserButton
      type="button"
      onClick={props.handleSubmit(props.onClickCreateUsers)}
    >
      {props.title}
    </CreateUserButton>
  );
}
