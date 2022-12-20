import { ITextareaProps } from "./textarea.types";
import { TextAreaComment } from "./textarea.styles";
export default function TextareaQuestion(props: ITextareaProps) {
  return (
    <TextAreaComment
      {...props.register}
      placeholder="문의는 내용과 메일을 남겨주세요"
    />
  );
}
