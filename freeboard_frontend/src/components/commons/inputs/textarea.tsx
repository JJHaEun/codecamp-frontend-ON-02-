import { ITextareaProps } from "./textarea.types";

export default function TextareaQuestion(props: ITextareaProps) {
  return <textarea {...props.register} />;
}
