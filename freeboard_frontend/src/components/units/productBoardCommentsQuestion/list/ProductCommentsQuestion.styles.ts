import styled from "@emotion/styled";

export const CommentsList = styled.div`
  display: flex;
  flex-direction: column;
  height: 300px;
  overflow: auto;
  margin: auto;
  width: 70%;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 15px;
`;
export const CommentButton = styled.div`
  display: flex;
  gap: 15px;
`;

export const ButtonReplyAndDelete = styled.button`
  background-color: white;
  border: none;
  :hover {
    cursor: pointer;
  }
`;
