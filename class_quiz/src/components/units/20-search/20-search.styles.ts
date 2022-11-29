import styled from "@emotion/styled";
import { IPageProps } from "./20-search.types";
export const Box1 = styled.div`
  display: flex;

  margin: 50px;
  justify-content: center;
  align-items: center;
`;
export const Box2 = styled.div`
  display: flex;
  flex-direction: column;
  width: 1800px;

  margin: 50px 120px;
  padding-left: 80px;
`;
export const Row = styled.div`
  padding: 10px;

  padding-bottom: 20px;
  //   border-bottom: 1px solid gray;
  width: 1700px;
  align-items: center;
`;

export const Column = styled.span`
  padding-right: 500px;
  font-size: 16px;
`;
export const Column1 = styled.span`
  padding-right: 480px;
  font-size: 20px;
  font-weight: 700;
`;
export const Column2 = styled.span`
  padding-right: 480px;
  font-size: 20px;
  font-weight: 700;
`;
export const Column3 = styled.span`
  padding-right: 490px;
  font-size: 20px;
  font-weight: 700;
`;
export const PageNumber = styled.span`
  font-size: 30px;
  font-weight: 700;
  color: ${(props: IPageProps) => (props.isActive ? "blue" : "black")};
  cursor: ${(props: IPageProps) => (props.isActive ? "default" : "pointer")};
  margin: 30px;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const Search = styled.span`
  font-size: 20px;
`;
export const Searching = styled.input`
  width: 500px;
`;
