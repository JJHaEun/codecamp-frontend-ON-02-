import { ShoppingCartOutlined } from "@ant-design/icons";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../../commons/libraries/store";
import LoginSuccess from "../../login-sucess/01/LoginSuccess.container";
import * as S from "./header.styles";
import { IPropsLayOutHeaderUI } from "./header.types";

export default function LayOutHeaderUI(props: IPropsLayOutHeaderUI) {
  const [accessToken] = useRecoilState(accessTokenState);
  return (
    <S.Wrapper>
      <S.Top>
        {!accessToken ? (
          <S.Login onClick={props.onClickHeaderLogin}>LogIn</S.Login>
        ) : (
          <S.LogOut onClick={props.onClickLogOut}>LogOut</S.LogOut>
        )}
        <div onClick={props.onClickBoards}>
          <S.Home />
        </div>
        <S.CreateUsers onClick={props.onClickCreateUsers}>
          회원가입
        </S.CreateUsers>

        <LoginSuccess />
      </S.Top>
      <S.TitleBox>
        <S.Title>The Power To Do</S.Title>
      </S.TitleBox>
      {!accessToken ? (
        <S.UnUserBasket onClick={props.onClickBasket}>
          비회원 장바구니
        </S.UnUserBasket>
      ) : (
        <S.MyBasketFont onClick={props.onClickMyPick}>
          내 장바구니
          <ShoppingCartOutlined />
        </S.MyBasketFont>
      )}
    </S.Wrapper>
  );
}
