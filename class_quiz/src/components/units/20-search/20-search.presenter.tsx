import * as S from "./20-search.styles";
import { IPageFetchBoardsUIProps } from "./20-search.types";
import { v4 as uuidv4 } from "uuid";

export default function PageFetchBoardsUI(props: IPageFetchBoardsUIProps) {
  return (
    <S.Box2>
      <S.Searching
        type="text"
        placeholder="검색어를 입력하세요"
        onChange={props.onChangeSearch}
      />
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
            <S.Column>
              {el.title
                .replaceAll(props.keyword, `#%$#^%^${props.keyword}#%$#^%^`)
                .split("#%$#^%^")
                .map((el) => (
                  <S.Search
                    key={uuidv4()}
                    style={{ color: el === props.keyword ? "red" : "black" }}
                  >
                    {el}
                  </S.Search>
                ))}
            </S.Column>
          </S.Row>
        ))}
      </S.Box>
    </S.Box2>
  );
}
