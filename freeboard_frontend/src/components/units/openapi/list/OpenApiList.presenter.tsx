import { IOpenApiListUIProps } from "./OpenApiList.types";
import * as S from "./OpenApiList.styles";
export default function OpenApiListUI(props: IOpenApiListUIProps) {
  return (
    <S.ImgBox>
      <S.DogImges>
        {props.dogImg.map((el) => (
          <S.Img key={el} src={el} />
        ))}
      </S.DogImges>
    </S.ImgBox>
  );
}
