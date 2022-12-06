import { IButtonPageProps } from "./button.types";
import * as S from "./button.styles";
export default function ButtonPage2(props: IButtonPageProps) {
  return (
    <S.CreateButton
      type="button"
      onClick={props.handleSubmit(props.onClickCreate)}
    >
      {props.title}
    </S.CreateButton>
  );
}
