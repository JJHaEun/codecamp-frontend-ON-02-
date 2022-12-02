import { IUpload01UIProps } from "./UploadImg.types";
import * as S from "./UploadImg.styles";
export default function Upload02UI(props: IUpload01UIProps) {
  return (
    <>
      {props.imageUrl ? (
        <S.UploadImage
          onClick={props.onClickImg}
          src={`https://storage.googleapis.com/${props.imageUrl}`}
        />
      ) : (
        <S.Buttons onClick={props.onClickImg}>+</S.Buttons>
      )}
      <S.Hidden
        type="file"
        ref={props.fileRef}
        onChange={props.onChangeFile}
        accept="image/jpeg,image/png,image/jpg"
      />
    </>
  );
}
