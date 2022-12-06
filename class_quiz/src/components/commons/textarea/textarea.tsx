import { ITextareaProps } from "./textarea.types";
import { TextBox } from "./textarea.styles";
export default function TextareaPage(props: ITextareaProps) {
  return <TextBox {...props.register} />;
}
