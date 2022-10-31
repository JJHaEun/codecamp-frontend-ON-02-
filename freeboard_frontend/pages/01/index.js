import {
  H1,
  Div,
  Input,
  MainDiv,
  Input2,
  Div2,
  Input3,
  Input4,
  Images,
  Div3,
  InputR,
  InputR2,
  Bt,
  Div4,
  Bt1,
} from "../../styles/index";

export default function freeboardWrite() {
  return (
    <MainDiv>
      <H1>게시물 등록</H1>
      <Div>
        <div>
          <div>작성자</div>
          <Input type="text" />
        </div>

        <div>
          <div>비밀번호</div>
          <Input type="text" />
        </div>
      </Div>
      <Div2>
        <div>제목</div>
        <Input2 type="text" />
      </Div2>
      <Div2>
        <div>내용</div>
        <Input3 type="text" />
      </Div2>
      <Div2>
        <div>주소</div>
        <Input4 type="text" />
        <Bt1>우편번호 검색</Bt1>
        <Input2 type="text" />
        <Input2 type="text" />
      </Div2>
      <Div2>
        <div>유튜브</div>
        <Input2 type="text" />
      </Div2>

      <Div3>
        <div>사진첨부</div>
        <Images src="/image 1.png"></Images>
        <Images src="/image 1.png"></Images>
        <Images src="/image 1.png"></Images>
      </Div3>
      <Div3>
        <div>메인 설정</div>
        <InputR type="radio" />
        유튜브
        <InputR2 type="radio" />
        사진
      </Div3>
      <Div4>
        <Bt>등록하기</Bt>
      </Div4>
    </MainDiv>
  );
}
