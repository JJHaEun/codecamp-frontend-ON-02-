import { ISearchUIProps } from "./Search01.types";
import * as S from "./Search01.styles";
export default function Search01UI(props: ISearchUIProps) {
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
