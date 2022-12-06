import styled from "@emotion/styled";

export const Board = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  background-color: beige;
  width: 1200px;
`;

export const Writer = styled.span`
  margin-left: 50px;
  margin-right: 200px;
`;
export const Title = styled.span`
  margin-right: 100px;
`;

export const DeleteButton = styled.button`
  margin-left: 900px;
  width: 50px;
  background-color: white;
  :active {
    position: relative;
    left: 1px;
  }
`;

export const WriteBoard = styled.div`
  display: flex;
  flex-direction: column;
  border-top: 4px solid black;
  gap: 20px;
`;
