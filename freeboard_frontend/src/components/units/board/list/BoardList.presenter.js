import { getDate } from "../../../commons/utils/utils";
import * as S from "./BoardList.styles";

export default function BoardListUI(props) {
  return (
    <S.All>
      <S.Page>
        <S.Div>
          <S.Max>
            <S.Row>
              <S.Column1>번호</S.Column1>
              <S.Column>제목</S.Column>
              <S.Column>작성자</S.Column>
              <S.Column>날짜</S.Column>
            </S.Row>
            {props.data?.fetchBoards.map((el, index) => (
              <S.Row key={el._id}>
                <S.Column1>{index + 1}</S.Column1>
                <S.Column id={el._id} onClick={props.onClickMoveDetail}>
                  {el.title}
                </S.Column>
                <S.Column id={el._id} onClick={props.onClickMoveDetail}>
                  {el.writer}
                </S.Column>
                <S.Column id={el._id} onClick={props.onClickMoveDetail}>
                  {getDate(el.createdAt)}
                </S.Column>
              </S.Row>
            ))}
          </S.Max>
        </S.Div>
        <S.Bt>
          <S.Send onClick={props.onClickMoveNew}>등록하기</S.Send>
        </S.Bt>
      </S.Page>
    </S.All>
  );
}
