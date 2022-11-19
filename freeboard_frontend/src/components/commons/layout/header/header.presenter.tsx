import * as S from "./header.styles";
import { IPropsLayOutHeaderUI } from "./header.types";

export default function LayOutHeaderUI(props: IPropsLayOutHeaderUI) {
  return (
    <S.Wrapper>
      <S.Top>
        <S.Login onClick={props.onClickHeaderLogin}>LogIn</S.Login>
        <div onClick={props.onClickBoards}>
          <S.Home src="/home.png"></S.Home>
        </div>
      </S.Top>
      <S.TitleBox>
        <S.Title>The Power To Do</S.Title>
      </S.TitleBox>
    </S.Wrapper>
  );
}