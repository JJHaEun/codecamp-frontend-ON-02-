import styled from "@emotion/styled";

export const LogInPage = styled.div`
  display: flex;
  justify-content: center;
`;
export const LogIn = styled.div`
  width: 400px;
  height: 300px;
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  margin-left: 30px;
  padding-left: 80px;
`;

export const LogInTitle = styled.h1`
  font-size: 40px;
`;
export const LogInInput = styled.input`
  width: 230px;
  margin-bottom: 10px;
  border: 1px solid #f199bc;
`;

export const LogInButton = styled.button`
  width: 80px;
  height: 30px;
  position: relative;
  margin-top: 10px;
  border-radius: 15px;
  text-decoration: none;
  font-weight: 600;
  font-family: "paybooc-Light", sans-serif;
  transition: 0.25s;
  color: #9dc8c8;
  :hover {
    background-color: #519d9e;
    cursor: pointer;
  }
  outline: none;
  border: none;
`;
