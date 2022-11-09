import styled from "@emotion/styled";

export const Input = styled.input`
  background-color: ${(props) => props.color};
  border: ${(props) => props.border};
`;

export const Bt = styled.button`
  border: ${(props) => (props.clicked ? "default" : "none")};
  background: ${(props) => (props.clicked ? "ivory" : "none")};
  cursor: ${(props) => (props.clicked ? "pointer" : "default")};
`;
