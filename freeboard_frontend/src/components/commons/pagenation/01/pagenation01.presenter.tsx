import { IPaginations01UIProps } from "./pagenation01.types";
import * as S from "./pagenation01.styles";
export default function Pagenation01UI(props: IPaginations01UIProps) {
  return (
    <S.PageNationBox>
      <S.PrevButton onClick={props.onClickPrevPage}>
        <S.MovePrevPage />
      </S.PrevButton>
      <div>
        {new Array(10).fill(1).map(
          (_, index) =>
            props.startPage + index <= props.lastPage && (
              <S.PageNumber
                key={props.startPage + index}
                id={String(props.startPage + index)}
                onClick={props.onClickPage}
                isActive={props.startPage + index === props.visitPage}
              >
                {props.startPage + index}
              </S.PageNumber>
            )
        )}
      </div>
      <S.NextButton onClick={props.onClickNextPage}>
        <S.MoveNextPage />
      </S.NextButton>
    </S.PageNationBox>
  );
}
