import styled from "@emotion/styled";
import dynamic from "next/dynamic";
import { IBtProps } from "./BoardWrite.types";
const ReactQuill = dynamic(async () => await import("react-quill"), {
  ssr: false,
});
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
    background-image: url("https://source.unsplash.com/featured/?vacation");
    opacity: 0.4;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    filter: blur(6px);
    background-size: cover;
  }

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
export const NamePw = styled.div`
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
  font-size: 16px;
`;
export const Div2 = styled.div`
  margin-left: 101px;
  margin-right: 103px;
  margin-top: 60px;
`;

export const Private = styled.div`
  margin-bottom: 5px;
`;
export const ReactQuillTextarea = styled(ReactQuill)`
  width: 996px;
  height: 480px;
  margin-top: 5px;
  padding: 5px;
  border: 1px solid #bdbdbd;
  border-radius: 8px;
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
  font-size: 16px;
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
  font-size: 16px;
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
export const InputNone = styled.input`
  display: none;
`;
export const Images = styled.div`
  display: flex;
`;
