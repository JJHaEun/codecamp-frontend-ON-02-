import styled from "@emotion/styled";
import { ITextTokenProps } from "./BoardList.types";

export const Max = styled.div`
  width: 1000px;
  height: 583px;
  border: 3px solid #a0dfe1;
  border-radius: 15px;
  background: rgba(204, 255, 000, 0.3);
  margin-top: 50px;
`;
export const Row = styled.div`
  display: flex;
  border-top: 1px solid #a0dfe1;
  height: 9.1%;
  align-items: center;
  :hover {
    text-decoration: underline;
    text-underline-position: under;
    color: #22d6b2;
  }
`;
export const Column = styled.div`
  width: 25%;
  cursor: pointer;
  font-weight: 800;
`;
// eslint-disable-next-line @typescript-eslint/naming-convention
export const Column_1 = styled.div`
  width: 25%;
  cursor: pointer;
  font-size: 20px;
`;
export const Column2 = styled.div`
  width: 25%;
`;
export const Div = styled.div`
  display: flex;

  justify-content: center;
`;
export const Column1 = styled.div`
  width: 25%;
  text-align: center;
  font-weight: 800;
`;
// eslint-disable-next-line @typescript-eslint/naming-convention
export const Column1_1 = styled.div`
  width: 25%;
  text-align: center;
`;

export const Bt = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: flex-end;
  margin-right: 100px;
`;
export const Send = styled.button`
  width: 170px;
  height: 60px;
  font-size: 20px;
  font-weight: 700;
  cursor: pointer;
  border: 3px solid #40e0d0;
  border-radius: 10px;
  background: white;
  color: #56b37f;
  margin-bottom: 30px;
  :active {
    position: relative;
    left: 1px;
  }
`;
export const Page = styled.div`
  position: relative;
  width: 1200px;
  height: 1562px;

  :before {
    content: "";
    position: absolute;
    background-image: url("https://source.unsplash.com/featured/?sky");
    opacity: 0.3;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    filter: blur(8px);
    background-size: cover;
  }

  display: flex;
  flex-direction: column;
  // box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
  // border: 2px solid #9bfa73;
`;
export const All = styled.div`
  display: flex;

  justify-content: center;
`;
export const H1title = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  font-size: 50px;
  background: linear-gradient(to left, #6666cc, #33cccc);
  color: transparent;
  background-clip: text;
`;
export const TextToken = styled.span`
  color: ${(props: ITextTokenProps) => (props.isMatch ? "red" : "black")};
`;
export const SearchBar = styled.div`
  margin-left: 100px;
`;
