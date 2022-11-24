import { LikeOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";

export const InputNone = styled.input`
  display: none;
`;
export const Main = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
export const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Send = styled.button`
  width: 300px;
  height: auto;
`;

export const Like = styled(LikeOutlined)`
  width: 120px;
  height: auto;
`;
