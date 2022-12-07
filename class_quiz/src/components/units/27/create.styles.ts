import styled from "@emotion/styled";
import dynamic from "next/dynamic";
const ReactQuill = dynamic(async () => await import("react-quill"), {
  ssr: false,
});

export const ReactQuillTextarea = styled(ReactQuill)`
  width: 900px;
  height: 450px;
  margin-top: 50px;
`;
export const Button = styled.button`
  margin-top: 120px;
`;
