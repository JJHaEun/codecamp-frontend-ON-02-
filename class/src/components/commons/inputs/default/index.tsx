import { UseFormRegisterReturn } from "react-hook-form";

interface IInputsDefaultProps {
  type: "text" | "password";
  register: UseFormRegisterReturn;
}

export default function InputsDefault(props: IInputsDefaultProps) {
  return <input type={props.type} {...props.register} />;
}
