import { ILogInInputsProps } from "./input.types";
import * as S from "./input.styles";

export default function LogInInputsPage(props: ILogInInputsProps) {
  return <S.LogInInput type={props.type} {...props.register} />;
}
