import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import * as S from "../../units/11-fetch/11-fetch-styles";
import { IPageNationOrProps } from "../../units/11-fetch/11-fetch-types";

export default function PageNationOr(props: IPageNationOrProps) {
  return (
    <>
      <S.Box1>
        <S.Button onClick={props.onClickPrevPage} isActive>
          <LeftOutlined />
        </S.Button>
        {new Array(10).fill(1).map(
          (_, index) =>
            index + props.startPage <= props.lastPage && (
              <S.PageNumber
                key={index + props.startPage}
                id={String(index + props.startPage)}
                onClick={props.onClickPage}
              >
                {index + props.startPage}
              </S.PageNumber>
            )
        )}

        <S.Button onClick={props.onClickNextPage} isActive>
          <RightOutlined />
        </S.Button>
      </S.Box1>
    </>
  );
}
