import styled from "@emotion/styled";

export const MainBoard = styled.div`
  width: 1200px;
  height: 1562px;
  background: #fafbfc;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
  display: flex;
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
  border-bottom: 1px solid #bdbdbd;
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

export const Title = styled.h2`
  margin-top: 80px;
  margin-bottom: 50px;
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
  height: 20px;
`;
export const Button2 = styled.button`
  width: 50px;
  height: 30px;
  background: none;
  padding: 3px;
  cursor: pointer;
  border: none;
`;
export const Count = styled.div`
  justify-content: center;
`;
export const Count1 = styled.div`
  display: flex;
  flex-direction: row;
  color: #ffd600;
  margin-left: 15px;
`;
export const Count2 = styled.div`
  display: flex;
  flex-direction: row;
  color: #828282;
  margin-left: 15px;
`;
export const Contents = styled.div`
  width: 996px;
  height: 96px;
  resize: none;
  margin-top: 40px;
`;
export const ButtonGroup = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 80px;

  gap: 20px;
  border-bottom: 1px solid #bdbdbd;
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

export const Max = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
