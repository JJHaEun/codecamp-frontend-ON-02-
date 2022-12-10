import { HeartTwoTone } from "@ant-design/icons";
import styled from "@emotion/styled";
import { ITextTokenProps } from "./ProductsList.types";

export const Scroll = styled.div`
  height: 500px;
  overflow: auto;
  /* border: 3px solid red; */
  width: 800px;
`;

export const AllLine = styled.div`
  border-bottom: 1px solid black;
  padding-top: 30px;
`;
export const TextToken = styled.span`
  color: ${(props: ITextTokenProps) => (props.isMatch ? "red" : "black")};
`;
export const MainTitle = styled.h1`
  font-size: 35px;
`;
export const Main = styled.div`
  margin-left: 50px;
`;
export const ImgList = styled.img`
  width: 120px;
  height: 100px;
  margin-right: 30px;
`;

export const ListSetting = styled.div`
  display: flex;
  margin-left: 30px;
`;
export const PickCount = styled.div`
  margin-left: 100px;
`;
export const SellerName = styled.div`
  margin-left: 20px;
`;
export const ClicksDetail = styled.div`
  :hover {
    cursor: pointer;
  }
`;
export const PickIcon = styled(HeartTwoTone)`
  margin-right: 5px;
`;
