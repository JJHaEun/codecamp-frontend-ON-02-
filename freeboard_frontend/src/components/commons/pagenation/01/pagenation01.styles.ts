import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";
import { IPageProps } from "./pagenation01.types";

export const PageNumber = styled.span`
  margin: 20px;
  color: ${(props: IPageProps) => (props.isActive ? "blue" : "black")};
  cursor: ${(props: IPageProps) => (props.isActive ? "default" : "pointer")};
  font-weight: bold;
`;
export const PageNationBox = styled.div`
  display: flex;
  justify-content: center;
  gap: 50px;
`;
export const MoveNextPage = styled(RightOutlined)`
  * {
    font-size: 20px;
  }
  :hover {
    color: royalblue;
  }
`;
export const NextButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`;
export const MovePrevPage = styled(LeftOutlined)`
  * {
    font-size: 20px;
  }
  :hover {
    color: royalblue;
  }
`;
export const PrevButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`;
