import { IButtonPageProps } from "./button.types";
import * as S from "./button.styles";

export default function LoginUserButtonPage(props: IButtonPageProps) {
  return (
    <S.LogInButton
      type="button"
      onClick={props.handleSubmit(props.onClickLogIn)}
    >
      {props.title}
    </S.LogInButton>
  );
}
