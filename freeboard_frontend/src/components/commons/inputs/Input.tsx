import { IInputsProps } from "./input.types";

export default function InputsPage(props: IInputsProps) {
  return <input type={props.type} {...props.register} />;
}
