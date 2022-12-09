import styled from "@emotion/styled";
import dynamic from "next/dynamic";
import { IButtonProps } from "./ProductWrite.types";
const ReactQuill = dynamic(async () => await import("react-quill"), {
  ssr: false,
});
export const Button = styled.button`
  background-color: ${(props: IButtonProps) =>
    props.isActive ? "#f0f8ff" : ""};
`;
export const ReactQuillTextarea = styled(ReactQuill)`
  width: 906px;
  height: 480px;
  margin-top: 10px;
  padding: 5px;
  border: 1px solid #bdbdbd;
  border-radius: 8px;
  margin-bottom: 50px;
`;
