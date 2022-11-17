import * as S from "./11-fetch-styles";
import { IPageFetchBoardsUIProps } from "./11-fetch-types";

export default function PageFetchBoardsUI(props: IPageFetchBoardsUIProps) {
  return (
    <S.Box2>
      <S.Row>
        <S.Column1>번호</S.Column1>
        <S.Column2>작성자</S.Column2>
        <S.Column3>제목</S.Column3>
      </S.Row>
      <S.Box>
        {props.data?.fetchBoards?.map((el, index) => (
          <S.Row key={el._id}>
            <S.Column>{index + 1}</S.Column>
            <S.Column>{el.writer}</S.Column>
            <S.Column>{el.title}</S.Column>
          </S.Row>
        ))}
      </S.Box>
    </S.Box2>
  );
}
