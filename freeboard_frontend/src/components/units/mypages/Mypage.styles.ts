import styled from "@emotion/styled";
import { DollarCircleOutlined, TransactionOutlined } from "@ant-design/icons";

export const PointIcon = styled(DollarCircleOutlined)`
  * {
    font-size: 35px;
  }
  color: darkgreen;
  padding-right: 5px;
`;

export const MyPage = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  width: 70%;
  margin-top: 30px;
`;
export const MyPoint = styled.span`
  font-size: 35px;
`;
export const ChargePoint = styled.span`
  font-size: 20px;
  margin-left: 10px;
  margin-right: 20px;
`;
export const Charge = styled(TransactionOutlined)`
  * {
    font-size: 25px;
  }
  color: blue;
  :hover {
    cursor: pointer;
  }
  padding-right: 5px;
`;
export const ChargeButton = styled.button`
  background-color: white;
  border: none;
  :hover {
    cursor: pointer;
  }
  border: 1px solid blue;
  border-radius: 9px;
  height: 40px;
  :active {
    position: relative;
    left: 1px;
    top: 1px;
  }
`;
export const MyList = styled.h1`
  font-size: 30px;
  font-weight: 800;
`;
export const GoTo = styled.a`
  all: unset;
  font-size: 20px;
  color: #cf409a;

  :visited {
    text-decoration: none;
    color: #cf409a;
  }
  :active {
    text-decoration: none;
    color: #f20f71;
  }
  :hover {
    text-decoration: none;
    cursor: pointer;
    color: #f20f71;
  }
`;
export const Line = styled.div`
  border-top: 2px solid #0b5f8f;
  border-bottom: 1px solid #0b5f8f;
  margin-bottom: 10px;
  margin-top: 5px;
`;
export const BottomLine = styled.div`
  border-bottom: 2px solid #0b5f8f;
  margin-top: 5px;
`;
export const BottomLinePrice = styled.div`
  border-bottom: 2px solid #0b5f8f;
  font-size: 25px;
  font-weight: 700;
`;
export const MyPageScroll = styled.div`
  height: 300px;
  overflow: auto;
`;

export const BuyerAndProductName = styled.div`
  font-size: 20px;
`;
export const SellerAndProductName = styled.div`
  font-size: 20px;
`;
export const MyPageISold = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  width: 50%;
  margin-top: 30px;
`;
export const MyPageIBought = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  width: 50%;
  margin-top: 30px;
`;
export const MyPageLogOut = styled.button`
  width: 100px;
  height: 35px;
  padding: 4px 12px;
  font-size: 12px;
  background: white;
  box-shadow: 1px 2px 0px #73b9c9;
  :hover {
    cursor: pointer;
  }
  :active {
    position: relative;
    left: 1px;
    top: 1px;
    box-shadow: 0 0 #73b9c9;
  }
`;
export const StatusPoint = styled.div`
  font-size: 20px;
  font-weight: 700;
`;
export const ReturnToMyPage = styled.button`
  width: 100px;
  height: 35px;
  padding: 4px 12px;
  font-size: 12px;
  background: white;
  box-shadow: 1px 2px 0px #73b9c9;
  :hover {
    cursor: pointer;
  }
  :active {
    position: relative;
    left: 1px;
    top: 1px;
    box-shadow: 0 0 #73b9c9;
  }
`;

export const MyPageMyPick = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  width: 50%;
  margin-top: 30px;
`;
