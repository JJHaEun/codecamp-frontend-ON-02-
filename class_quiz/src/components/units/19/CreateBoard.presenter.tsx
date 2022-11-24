import { ICreateBoardAndImgPageUIProps } from "./CreateBoard.types";
import * as S from "./CreateBoard.styles";

export default function CreateBoardAndImgPageUI(
  props: ICreateBoardAndImgPageUIProps
) {
  return (
    <>
      <S.Main>
        <div>
          작성자: <input type="text" onChange={props.onChangeWriter} />
        </div>
        <div>
          비밀번호: <input type="text" onChange={props.onChangePassword} />
        </div>
        <div>
          제목: <input type="text" onChange={props.onChangeTitle} />
        </div>
        <div>
          내용: <input type="text" onChange={props.onChangeContents} />
        </div>
      </S.Main>
      <S.Buttons>
        <S.Like onClick={props.onClickImg} />
        <S.InputNone
          type="file"
          onChange={props.onChangeFile}
          ref={props.fileRef}
          accept="image/jpeg,image/png,image/jpg"
        />
        <img src={`https://storage.googleapis.com/${props.imageUrl}`} />
        <S.Send onClick={props.onClickSubmit}>저장하기</S.Send>
      </S.Buttons>
    </>
  );
}
