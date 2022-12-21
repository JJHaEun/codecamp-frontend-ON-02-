import { ILogInInputsProps } from "./input.types";
import * as S from "./input.styles";

export default function CreateUserInputsPage(props: ILogInInputsProps) {
  return <S.CreateUserInInput type={props.type} {...props.register} />;
}
