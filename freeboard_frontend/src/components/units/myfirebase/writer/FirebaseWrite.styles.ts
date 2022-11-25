import styled from "@emotion/styled";

export const SummitBoard = styled.div`
  width: 700px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #01cecb;
  border-radius: 10px;
  margin: auto;
  margin-top: 10px;
  gap: 30px;
  padding-bottom: 20px;
`;

export const WriterInput = styled.input`
  width: 150px;
  margin-left: 10px;
  border: 1px solid gray;
`;
export const WriterBox = styled.div`
  margin-right: 160px;
  margin-top: 20px;
`;

export const TitleInput = styled.input`
  width: 200px;
  margin-left: 10px;
  border: 1px solid gray;
`;
export const TitleBox = styled.div`
  margin-right: 100px;
`;
export const Contents = styled.textarea`
  resize: none;
  width: 300px;
  height: 70px;
  margin-left: 13px;
`;
export const ContentsBox = styled.div`
  display: flex;
  align-items: center;
`;
export const ButtonBox = styled.div`
  margin-left: 250px;
`;
export const SubmitButton = styled.button`
  :active {
    position: relative;
    left: 2px;
    bottom: 1px;
  }
  :hover {
    cursor: pointer;
  }
  width: 100px;
  border-radius: 5px;
  background: none;
  color: #01cecb;
  border: 2px solid #01cecb;
`;
