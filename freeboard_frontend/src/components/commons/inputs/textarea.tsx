import { ITextareaProps } from "./textarea.types";

export default function TextareaPage(props: ITextareaProps) {
  return <textarea {...props.register} />;
}
