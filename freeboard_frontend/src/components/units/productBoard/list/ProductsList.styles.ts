import { HeartTwoTone } from "@ant-design/icons";
import styled from "@emotion/styled";
import { ITextTokenProps } from "./ProductsList.types";

export const Scroll = styled.div`
  height: 800px;
  overflow: auto;
  /* border: 3px solid red; */
  width: 1000px;
`;

export const AllLine = styled.div`
  border-bottom: 1px solid black;
  padding-top: 20px;
`;
export const TextToken = styled.span`
  color: ${(props: ITextTokenProps) => (props.isMatch ? "red" : "black")};
`;
export const MainTitle = styled.h1`
  font-size: 35px;
`;
export const Main = styled.div`
  margin-left: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SearchAndTitle = styled.div`
  display: flex;
  gap: 15px;
  margin-right: 200px;
  margin-top: 20px;
`;
export const ImgList = styled.img`
  width: 100px;
  height: 100px;
  margin-right: 30px;
  margin-bottom: 10px;
  margin-top: 10px;
`;

export const ListSetting = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 30px;
  background-color: skyblue;
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
    color: blanchedalmond;
  }
`;
export const PickIcon = styled(HeartTwoTone)`
  margin-right: 5px;
`;
export const SendButton = styled.button`
  width: 120px;
  height: 40px;

  position: relative;
  margin-top: 50px;
  margin-left: 880px;
  text-decoration: none;
  font-weight: 700;
  font-family: "paybooc-Light", sans-serif;
  transition: 0.25s;
  color: #9dc8c8;
  :hover {
    background-color: #519d9e;
    cursor: pointer;
    color: #fff;
  }
  outline: none;
  border: 2px solid #9dc8c8;
`;
