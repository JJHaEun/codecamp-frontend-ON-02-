import { ISearchUIProps } from "./Search02.types";
import * as S from "./Search02.styles";
export default function Search02UI(props: ISearchUIProps) {
  return (
    <div>
      <S.SearchInput
        type="text"
        placeholder="키워드를 입력하세요"
        onChange={props.onChangeSearch}
        ref={props.searchRef}
      />
    </div>
  );
}
