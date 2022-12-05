import Pagenation01 from "../../../commons/pagenation/01/pagenation01.container";
import Search01 from "../../../commons/search/01/Search01.container";
import { getDate } from "../../../commons/utils/utils";
import * as S from "./BoardList.styles";
import { IBoardListUIProps } from "./BoardList.types";
import { v4 as uuidv4 } from "uuid";
import { IBoard } from "../../src/commons/types/generated/types";
export default function BoardListUI(props: IBoardListUIProps) {
  // const { onClickMoveToPage } = useMoveToPage(); 서비스 규모가 작을 시 이렇게도 할 수 있음
  // const { keyword, onChangeKeyword } = useSearch();

  return (
    <S.All>
      <S.Page>
        {/* <S.Upper></S.Upper> */}
        <S.H1title>우리들의 휴식</S.H1title>
        <S.SearchBar>
          <Search01
            refetch={props.refetch}
            refetchBoardsCount={props.refetchBoardsCount}
            onChangeKeyword={props.onChangeKeyword}
          />
        </S.SearchBar>
        <S.Div>
          <S.Max>
            <S.Row>
              <S.Column1>번호</S.Column1>
              <S.Column>작성자</S.Column>
              <S.Column>제목</S.Column>
              <S.Column>날짜</S.Column>
            </S.Row>
            {props.data?.fetchBoards.map((el: IBoard, index: number) => (
              <S.Row
                key={el._id}
                id={el._id}
                onClick={props.onClickMoveToPage(`/boards/${el._id}`)}
              >
                <S.Column1_1>{index + 1}</S.Column1_1>
                <S.Column_1>{el.writer}</S.Column_1>
                <S.Column_1>
                  {el.title
                    .replaceAll(
                      props.keyword,
                      `#$%^%$&$&${props.keyword}#$%^%$&$&`
                    )
                    .split("#$%^%$&$&")
                    .map((el: any) => (
                      <S.TextToken
                        key={uuidv4()}
                        isMatch={props.keyword === el}
                      >
                        {el}
                      </S.TextToken>
                    ))}
                </S.Column_1>
                <S.Column2>{getDate(el.createdAt)}</S.Column2>
              </S.Row>
            ))}
          </S.Max>
        </S.Div>
        <S.Bt>
          <S.Send onClick={props.onClickMoveToPage(`/boards/new`)}>
            등록하기
          </S.Send>
        </S.Bt>
        <Pagenation01 refetch={props.refetch} countBoards={props.countBoards} />
      </S.Page>
    </S.All>
  );
}
