import { IMyFireBaseListUIProps } from "./FirebaseList.types";
import * as S from "./FirebaseList.style";

export default function MyFireBaseListUI(props: IMyFireBaseListUIProps) {
  return (
    <S.Table>
      <S.TableTitle>
        <S.ColumnNumber>번호</S.ColumnNumber>
        <S.ColumnWriter>작성자</S.ColumnWriter>
        <S.ColumnTitle>제목</S.ColumnTitle>
        <div>내용</div>
      </S.TableTitle>
      {props.boardData?.map((el: any, index: number) => (
        <S.ContentsTable key={el.id}>
          <S.ColumnNumber>{index + 1}</S.ColumnNumber>
          <S.ColumnWriter>{el.writer}</S.ColumnWriter>
          <S.ColumnTitle>{el.title}</S.ColumnTitle>
          <div>{el.contents}</div>
        </S.ContentsTable>
      ))}
      <S.UnderLine>
        <S.MoveCreateBoard onClick={props.onClickMoveNewBoard}>
          게시물등록하기
        </S.MoveCreateBoard>
      </S.UnderLine>
    </S.Table>
  );
}
