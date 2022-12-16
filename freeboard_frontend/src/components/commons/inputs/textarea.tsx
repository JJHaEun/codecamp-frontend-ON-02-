import { ITextareaProps } from "./textarea.types";
import { TextAreaComment } from "./textarea.styles";
export default function TextareaQuestion(props: ITextareaProps) {
  return <TextAreaComment {...props.register} />;
}
