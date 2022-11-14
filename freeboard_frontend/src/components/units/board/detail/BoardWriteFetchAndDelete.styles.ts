import styled from "@emotion/styled";

export const MainBoard = styled.div`
  width: 1200px;
  height: 1562px;
  position: relative;

  :before {
    content: "";
    position: absolute;
    background-image: linear-gradient(rgba(0, 0, 0, 0.001), rgba(0, 0, 0, 0.01)),
      url("https://source.unsplash.com/featured/?vacation");
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    filter: blur(6px);
    background-size: cover;
  }
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
  display: flex;
  border: 2px solid #9bfa73;
`;

export const Image1 = styled.img`
  margin-right: 10px;
  width: 46.67px;
  height: 46.67px;
`;
export const Top = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 50px 106px 15px 106px;
  width: 996px;
  border-bottom: 3px solid #a0dfe1;
`;
export const TopLeft = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const DateBox = styled.div`
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  padding-top: 0px;
  color: #828282;
`;
export const Writer = styled.div`
  font-weight: 500;
  font-size: 20px;
  line-height: 36px;

  color: #000000;
`;

export const TopRight = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-end;
  margin-top: 20px;
  width: 22px;
  height: 22px;
`;
export const Img3 = styled.img`
  width: 30px;
  height: 30px;
`;
export const Title = styled.h2`
  margin-top: 80px;
  margin-bottom: 50px;
  font-size: 40px;
`;
export const MainMiddle = styled.div`
  margin: 50px 106px 15px 106px;
`;
export const UnderVideo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 120px;
`;
export const Score = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 56px;
  gap: 80px;
`;
export const ScoreImg = styled.img`
  width: 30px;
  height: 30px;
`;
export const Button2 = styled.button`
  width: 50px;
  height: 30px;
  background: none;
  padding: 3px;
  cursor: pointer;
  border: none;
  margin-bottom: 15px;
`;
export const Count = styled.div`
  justify-content: center;
`;
export const Count1 = styled.div`
  display: flex;
  flex-direction: row;
  color: #cd3861;
  margin-left: 20px;
`;
export const Count2 = styled.div`
  display: flex;
  flex-direction: row;
  color: #828282;
  margin-left: 20px;
`;
export const Contents = styled.div`
  width: 996px;
  height: 96px;
  resize: none;
  margin-top: 40px;
  font-size: 20px;
  font-weight: 600;
`;
export const ButtonGroup = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 80px;

  gap: 20px;
  border-bottom: 2px solid #a0dfe1;
  width: 1199px;
`;

export const Button1 = styled.button`
  width: 179px;
  height: 52px;
  padding: 14px 60px;

  border: 1px solid #bdbdbd;
  margin-bottom: 80px;
  cursor: pointer;

  background: #ffffff;
  border-radius: 8px;
  border: 1px solid #dcdcdc;

  font-weight: bold;

  text-decoration: none;
  text-shadow: 0px 1px 0px #ffffff;

  &:active {
    position: relative;
    top: 1px;
    left: 2px;
  }
`;
export const ButtonImg = styled.img`
  width: 20px;
  height: 15px;
  padding-right: 5px;
  padding-bottom: 1px;
  text-align: center;
`;
export const ButtonImg2 = styled.img`
  width: 25px;
  height: 25px;
`;
export const UpdateSend = styled.div`
  display: flex;
  flex-direction: colum;
  align-items: center;
  justify-content: center;
`;
export const Max = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
