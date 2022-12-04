import { IUpload01UIProps } from "./UploadImg.types";
import * as S from "./UploadImg.styles";
export default function Upload02UI(props: IUpload01UIProps) {
  return (
    <div>
      <form>
        {props.imageUrl ? (
          <S.UploadImage
            onClick={props.onClickImg}
            src={`https://storage.googleapis.com/${props.imageUrl}`}
          />
        ) : (
          <S.Buttons type="button" onClick={props.onClickImg}>
            +
          </S.Buttons>
        )}
        <S.Hidden
          type="file"
          ref={props.fileRef}
          onChange={props.onChangeFile}
          accept="image/jpeg,image/png,image/jpg"
        />
      </form>
    </div>
  );
}
