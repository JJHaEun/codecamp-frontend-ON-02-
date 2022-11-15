import * as St from "./BoardWrite.styles";
import { IBoardWriteUIProps } from "./BoardWrite.types";

export default function BoardWriteUI(props: IBoardWriteUIProps) {
  return (
    <St.WriterMain>
      <St.MainDiv>
        <St.H1>게시물 {props.isEdit ? "수정" : "등록"}</St.H1>
        <St.Div>
          <div>
            <St.NamePw>작성자</St.NamePw>
            <St.Empty1>{props.writerEmpty}</St.Empty1>
            <St.Input
              type="text"
              placeholder="이름을 적어주세요"
              onChange={props.onChangeWriter}
              defaultValue={props.data?.fetchBoard.writer ?? ""}
            />
          </div>

          <div>
            <St.NamePw>비밀번호</St.NamePw>
            <St.Empty1>{props.pwEmpty}</St.Empty1>
            <St.Input
              type="text"
              placeholder="비밀번호를 작성해주세요."
              onChange={props.onChangePw}
            />
          </div>
        </St.Div>
        <St.Div2>
          <div>제목</div>
          <St.Empty>{props.titleEmpty}</St.Empty>
          <St.Input2
            type="text"
            placeholder="제목을 작성해주세요."
            onChange={props.onChangeTitle}
            defaultValue={props.data?.fetchBoard.title}
          />
        </St.Div2>
        <St.Div2>
          <div>내용</div>
          <St.Empty>{props.contentsEmpty}</St.Empty>
          <St.Text
            placeholder="내용을 작성해주세요."
            onChange={props.onChangeContents}
            defaultValue={props.data?.fetchBoard.contents}
          ></St.Text>
        </St.Div2>
        <St.Div2>
          <St.Private>주소</St.Private>
          <St.Input4 type="text" placeholder="07250" />
          <St.Bt1>우편번호 검색</St.Bt1>
          <St.Input2 type="text" />
          <St.Input2 type="text" />
        </St.Div2>
        <St.Div2>
          <div>유튜브</div>
          <St.Input2 type="text" placeholder="링크를 복사해주세요." />
        </St.Div2>

        <St.Div3>
          <div>사진첨부</div>
          <St.PottoButton>+</St.PottoButton>
          <St.PottoButton>+</St.PottoButton>
          <St.PottoButton>+</St.PottoButton>
        </St.Div3>
        <St.Div3>
          <div>메인 설정</div>
          <St.InputR type="radio" />
          유튜브
          <St.InputR2 type="radio" />
          사진
        </St.Div3>
        <St.Div4>
          <St.Bt
            changes={props.isEdit ? true : props.bt}
            onClick={props.isEdit ? props.onClickUpdate : props.onClickSignIn}
          >
            {props.isEdit ? "수정" : "등록"}하기
          </St.Bt>
        </St.Div4>
      </St.MainDiv>
    </St.WriterMain>
  );
}
// {
//   /* <Button onClick={() => setOpen(true)}>모달열기</Button>; */
// }
