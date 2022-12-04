import styled from "@emotion/styled";
import { IButtonProps } from "./ProductWrite.types";

export const Button = styled.button`
  background-color: ${(props: IButtonProps) =>
    props.isActive ? "#f0f8ff" : ""};
`;
