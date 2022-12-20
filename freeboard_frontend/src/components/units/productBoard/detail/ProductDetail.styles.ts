import { EnvironmentOutlined, HeartFilled } from "@ant-design/icons";
import styled from "@emotion/styled";

export const LikeButton = styled.button`
  background-color: white;
  border: none;
  width: 70px;
  height: 25px;
  :hover {
    cursor: pointer;
  }
`;
export const Heart = styled(HeartFilled)`
  padding-top: 5px;
  color: hotpink;
  * {
    font-size: 30px;
  }
  margin-right: 8px;

  margin-bottom: 20px;
`;
export const ProductName = styled.h1`
  font-size: 23px;
`;
export const Contents = styled.div`
  display: flex;
  gap: 150px;
`;
export const Buttons = styled.div`
  display: flex;
  margin-left: 300px;
  gap: 30px;
`;
export const Button = styled.button`
  color: #7986cb;

  :hover {
    border-color: #21333c;
    background-color: rosybrown;
    color: darkred;
    cursor: pointer;
  }
  :active {
    position: relative;
    left: 1px;
    top: 1px;
  }
  width: 120px;
  height: 40px;
`;
export const AllButtons = styled.div`
  display: flex;
  margin-top: 20px;
  gap: 650px;
`;
export const SellerAndDate = styled.div`
  border-bottom: 2px solid skyblue;
  display: flex;
  gap: 1105px;
`;
export const LocationToggleImg = styled(EnvironmentOutlined)`
  * {
    font-size: 30px;
  }
  color: blueviolet;
`;
export const DetailPage = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  width: 70%;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 15px;
`;

export const ProductImages = styled.img`
  width: 125px;
  height: 200px;
`;

export const ContentsText = styled.div`
  width: 700px;
`;
