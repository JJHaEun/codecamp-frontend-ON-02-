import styled from "@emotion/styled";

export const Table = styled.div`
  width: 800px;
  height: auto;
  border-top: 2px solid black;
  margin: auto;
  margin-top: 10px;
`;
export const TableTitle = styled.div`
  display: flex;

  border-bottom: 1px solid black;
`;
export const ContentsTable = styled.div`
  display: flex;
  border-top: 1px solid black;
  padding-top: 3px;
  padding-bottom: 3px;
`;

export const ColumnNumber = styled.div`
  width: 10%;
  margin-left: 20px;
`;
export const ColumnWriter = styled.div`
  width: 10%;
  margin-right: 70px;
`;
export const ColumnTitle = styled.div`
  width: 20%;
`;
export const MoveCreateBoard = styled.button`
  :active {
    position: relative;
    left: 2px;
    bottom: 1px;
  }
  :hover {
    cursor: pointer;
  }
  width: 150px;
  border-radius: 5px;
  background: none;
  color: #01cecb;
  border: 2px solid #01cecb;
`;

export const UnderLine = styled.div`
  margin-top: 10px;
  padding-top: 10px;
  border-top: 2px solid black;
`;
