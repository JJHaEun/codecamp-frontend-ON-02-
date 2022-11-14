import styled from "@emotion/styled";
import { IBtProps } from "./BoardWrite.types";

export const WriterMain = styled.div`
  display: flex;
  justify-content: center;
`;
export const MainDiv = styled.div`
  width: 1200px;

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
  flex-direction: column;
  justify-content: center;
`;
export const H1 = styled.h1`
  display: flex;
  justify-content: center;
  font-size: 50px;
  margin-top: 40px;
`;
export const Div = styled.div`
  display: flex;
  justify-content: center;
  margin-left: 101px;
  margin-right: 103px;
  margin-top: 33px;
`;
export const Name_Pw = styled.div`
  margin-left: 15px;
  margin-bottom: 5px;
`;
export const Input = styled.input`
  width: 486px;
  height: 52px;
  margin-right: 10px;
  margin-left: 15px;
  border: 1px solid #bdbdbd;
  border-radius: 8px;
  padding-left: 5px;
`;

export const Input2 = styled.input`
  width: 996px;
  height: 52px;
  margin-top: 5px;
  margin-bottom: 16px;
  border: 1px solid #bdbdbd;
  border-radius: 8px;
  padding-left: 5px;
`;
export const Div2 = styled.div`
  margin-left: 101px;
  margin-right: 103px;
  margin-top: 60px;
`;

export const Private = styled.div`
  margin-bottom: 5px;
`;
export const Text = styled.textarea`
  width: 996px;
  height: 480px;
  resize: none;
  border: 1px solid #bdbdbd;
  border-radius: 8px;
  margin-top: 5px;
  padding: 5px;
`;
export const Input4 = styled.input`
  width: 77px;
  height: 52px;
  margin-right: 16px;
  margin-bottom: 16px;
  border: 1px solid #bdbdbd;
  border-radius: 8px;
  padding-left: 5px;
`;
export const PottoButton = styled.button`
  width: 78px;
  height: 78px;
  margin-right: 15px;
  margin-top: 20px;
  border: none;
  background-color: #bdbdbd;
  cursor: pointer;
`;
export const Div3 = styled.div`
  width: 282px;
  height: 118px;
  margin-top: 60px;
  margin-right: 103px;
  margin-left: 101px;
`;

export const InputR = styled.input`
  margin-top: 20px;
  margin-right: 10px;
`;
export const InputR2 = styled.input`
  margin-top: 20px;
  margin-left: 30px;
  margin-right: 10px;
`;
export const Bt = styled.button`
  width: 179px;
  height: 52px;
  margin-bottom: 80px;
  background: ${(props: IBtProps) => (props.changes ? "#f0f8ff" : "none")};
  border: ${(props: IBtProps) =>
    props.changes ? "3px solid #0ebfeb" : "2px solid black"};
  cursor: ${(props: IBtProps) => (props.changes ? "pointer" : "default")};

  border-radius: 8px;

  font-weight: bold;

  &:active {
    position: relative;
    top: 1px;
    left: 2px;
  }
`;
export const Div4 = styled.div`
  display: flex;
  justify-content: center;
`;
export const Bt1 = styled.button`
  width: 124px;
  height: 52px;
  color: #ffffff;
  background: black;
  cursor: pointer;
`;
export const Empty = styled.div`
  color: red;
  font-size: 10px;
`;
export const Empty1 = styled.div`
  color: red;
  font-size: 10px;
  margin-left: 15px;
`;
