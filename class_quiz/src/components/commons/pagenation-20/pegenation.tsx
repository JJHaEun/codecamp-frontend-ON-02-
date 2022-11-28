import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import * as S from "../../units/20-search/20-search.styles";
import { IPageNationOrProps } from "../../units/20-search/20-search.types";

export default function PageNationOr(props: IPageNationOrProps) {
  return (
    <>
      <S.Box1>
        <button onClick={props.onClickPrevPage}>
          <LeftOutlined />
        </button>
        {new Array(10).fill(1).map(
          (_, index) =>
            index + props.startPage <= props.lastPage && (
              <S.PageNumber
                key={index + props.startPage}
                id={String(index + props.startPage)}
                onClick={props.onClickPage}
                isActive={props.startPage + index === props.visitPage}
              >
                {index + props.startPage}
              </S.PageNumber>
            )
        )}

        <button onClick={props.onClickNextPage}>
          <RightOutlined />
        </button>
      </S.Box1>
    </>
  );
}
