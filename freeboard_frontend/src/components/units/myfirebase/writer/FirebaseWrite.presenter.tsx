import { IMyFireBaseWiteUIProps } from "./FirebaseWrite.types";
import * as S from "./FirebaseWrite.styles";

export default function MyFireBaseWiteUI(props: IMyFireBaseWiteUIProps) {
  return (
    <S.SummitBoard>
      <S.WriterBox>
        작성자: <S.WriterInput type="text" onChange={props.onChangeWriter} />
      </S.WriterBox>
      <S.TitleBox>
        제목: <S.TitleInput type="text" onChange={props.onChangeTitle} />
      </S.TitleBox>
      <S.ContentsBox>
        내용:
        <S.Contents
          onChange={props.onChangeContents}
          maxLength={50}
        ></S.Contents>
      </S.ContentsBox>
      <S.ButtonBox>
        <S.SubmitButton onClick={props.onClickSubmit}>등록하기</S.SubmitButton>
      </S.ButtonBox>
    </S.SummitBoard>
  );
}
