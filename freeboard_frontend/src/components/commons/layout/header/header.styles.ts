import { HomeTwoTone } from "@ant-design/icons";
import styled from "@emotion/styled";

export const Wrapper = styled.div`
  height: 80px;
  background: skyblue;
  display: flex;
  align-items: center;
`;
export const Top = styled.div`
  display: flex;
  gap: 80px;
  margin-left: 30px;
`;
export const Title = styled.h1`
  font-size: 50px;
  font-weight: bold;
  font-style: italic;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
  background: radial-gradient(
    circle farthest-corner at center center,
    #f6f8f9 0%,
    #e5ebee 30%,
    #d7dee3 60%,
    #f5f7f9 100%
  );
  background-clip: text;
  -webkit-text-fill-color: transparent;
`;
export const TitleBox = styled.div`
  display: flex;
  justify-content: center;
  margin: auto;
`;
export const Home = styled(HomeTwoTone)`
  * {
    font-size: 20px;
  }
  cursor: pointer;
  :active {
    position: relative;
    left: 1px;
    top: 1px;
  }
`;
export const Login = styled.div`
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
  font-weight: 600;
  font-style: italic;
  cursor: pointer;
  :hover {
    color: aliceblue;
  }
  :active {
    position: relative;
    left: 1px;
    top: 1px;
  }
`;
