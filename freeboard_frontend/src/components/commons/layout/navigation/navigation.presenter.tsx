import * as S from "./navigation.styles";
import { IPropsLayOutNavigationUI } from "./navigation.types";

const MenuBar = [
  { id: "/boards", name: "게시판" },
  { id: "/market", name: "상품" },
  { id: "/mypage", name: "마이페이지" },
];
export default function LayOutNavigationUI(props: IPropsLayOutNavigationUI) {
  return (
    <S.Navigation>
      <S.Menu>
        {MenuBar.map((el) => (
          <S.Menutitle key={el.id} id={el.id} onClick={props.onClickMenu}>
            {el.name}
          </S.Menutitle>
        ))}
      </S.Menu>
    </S.Navigation>
  );
}
