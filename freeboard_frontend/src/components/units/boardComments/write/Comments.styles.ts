import styled from "@emotion/styled";
import { Rate } from "antd";

export const Max = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Com = styled.div`
  display: flex;
  padding: 20px 0 10px 0;
`;
export const CommentImg = styled.img`
  width: 30px;
`;
export const CommentTitle = styled.div`
  margin-left: 10px;
`;

export const InputGroup = styled.div`
  display: flex;
  gap: 25px;
  margin-bottom: 20px;
`;
export const InPut = styled.input`
  height: 40px;
  border: 2px solid #78e150;
  :focus {
    border: 3px solid red;
  }
`;
export const Under = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Star = styled(Rate)`
  margin-bottom: 5px;
`;
export const TextArea = styled.textarea`
  resize: none;
  width: 1198px;
  height: 150px;
  border: 2px solid #34c6be;
  border-radius: 8px;
  :focus {
    border: 4px solid #78a9ed;
  }
`;
export const Button3 = styled.button`
  box-shadow: inset 0px 1px 0px 0px #29bbff;
  margin-top: 10px;
  background: #a5d943;
  border-radius: 6px;
  border: 1px solid #b3cf8c;
  display: inline-block;
  cursor: pointer;
  color: #ffffff;
  font-family: Arial;
  font-size: 15px;
  font-weight: bold;
  padding: 6px 24px;
  text-decoration: none;
  width: 110px;
  height: 40px;
  &:hover {
    background: #2471b5;
  }
  :active {
    position: relative;
    left: 1px;
  }
`;
export const Bt = styled.div`
  margin-left: 1090px;
  margin-bottom: 10px;
`;
