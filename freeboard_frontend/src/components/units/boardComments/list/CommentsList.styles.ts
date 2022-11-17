import styled from "@emotion/styled";

export const All = styled.div`
  display: flex;
  border-bottom: 3px solid #fff0f5;
  margin-top: 15px;

  width: 1198px;
`;
export const CommentList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Img = styled.img`
  width: 50px;
  height: 60px;
  margin-right: 20px;
  margin-bottom: 40px;
`;
export const Writer = styled.div`
  font-size: 35px;
  font-weight: 600;
`;
export const Contents = styled.div`
  font-size: 25px;
`;
export const Date = styled.div`
  margin: 4px;
  font-size: 14px;
`;
export const ButtonGroup = styled.div`
  display: flex;
  gap: 15px;
`;

export const Button = styled.button`
  font-size: 16px;
  width: 80px;
  height: 30px;
  border-radius: 10px;
  margin-top: 10px;
  margin-bottom: 20px;
  margin-left: 20px;
  background: linear-gradient(to right top, #861657, #ffa69e);
  color: transparent;
  -webkit-background-clip: text;
  cursor: pointer;
  :active {
    position: relative;
    left: 1px;
  }
`;
export const Button2 = styled.button`
  font-size: 16px;
  width: 80px;
  height: 30px;
  border-radius: 10px;
  margin-top: 10px;
  margin-bottom: 20px;
  margin-left: 20px;
  cursor: pointer;
  background: none;

  :active {
    position: relative;
    left: 1px;
  }
`;
export const ButtonImg = styled.img`
  width: 25px;
  height: 25px;
`;
