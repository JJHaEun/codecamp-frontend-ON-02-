import { useState } from "react";

import {
  H1,
  Div,
  Input,
  MainDiv,
  Input2,
  Div2,
  Text,
  Input4,
  PottoButton,
  Div3,
  InputR,
  InputR2,
  Bt,
  Div4,
  Bt1,
  Empty,
} from "../../styles/index";

export default function freeboardWrite() {
  const [name, setName] = useState("");
  const [pw, setPw] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const [nameEmpty, setNameEmpty] = useState("");
  const [pwEmpty, setPwEmpty] = useState("");
  const [titleEmpty, setTitleEmpty] = useState("");
  const [contentEmpty, setContentEmpty] = useState("");

  function onChangeName(event) {
    setName(event.target.value);
    if (event.target.value !== "") {
      setNameEmpty("");
    }
  }
  function onChangePw(event) {
    setPw(event.target.value);
    if (event.target.value !== "") {
      setPwEmpty("");
    }
  }
  function onChangeTitle(event) {
    setTitle(event.target.value);
    if (event.target.value !== "") {
      setTitleEmpty("");
    }
  }
  function onChangeContent(event) {
    setContent(event.target.value);
    if (event.target.value !== "") {
      setContentEmpty("");
    }
  }

  function onClickSignIn() {
    if (!name) {
      setNameEmpty("작성자를 입력해 주세요");
    }
    if (!pw) {
      setPwEmpty("비밀번호를 입력해 주세요");
    }
    if (!title) {
      setTitleEmpty("제목을 입력해 주세요");
    }
    if (!content) {
      setContentEmpty("내용을 입력해 주세요");
    }

    if (name & pw & title & content) {
      // 메시지 알림 이전 백엔드에 API요청하기
      alert("게시물이 등록되었습니다");
    }
  } //내용들이 다 채워지고 버튼을 누르면 메세지가 출력이 되어야하는데 출력되지 않음.
  return (
    <MainDiv>
      <H1>게시물 등록</H1>
      <Div>
        <div>
          <div>작성자</div>
          <Empty>{nameEmpty}</Empty>
          <Input
            type="text"
            placeholder="이름을 적어주세요"
            onChange={onChangeName}
          />
        </div>

        <div>
          <div>비밀번호</div>
          <Empty>{pwEmpty}</Empty>
          <Input
            type="text"
            placeholder="비밀번호를 작성해주세요."
            onChange={onChangePw}
          />
        </div>
      </Div>
      <Div2>
        <div>제목</div>
        <Empty>{titleEmpty}</Empty>
        <Input2
          type="text"
          placeholder="제목을 작성해주세요."
          onChange={onChangeTitle}
        />
      </Div2>
      <Div2>
        <div>내용</div>
        <Empty>{contentEmpty}</Empty>
        <Text
          placeholder="내용을 작성해주세요."
          onChange={onChangeContent}
        ></Text>
      </Div2>
      <Div2>
        <div>주소</div>
        <Input4 type="text" placeholder="07250" />
        <Bt1>우편번호 검색</Bt1>
        <Input2 type="text" />
        <Input2 type="text" />
      </Div2>
      <Div2>
        <div>유튜브</div>
        <Input2 type="text" placeholder="링크를 복사해주세요." />
      </Div2>

      <Div3>
        <div>사진첨부</div>
        <PottoButton>+</PottoButton>
        <PottoButton>+</PottoButton>
        <PottoButton>+</PottoButton>
      </Div3>
      <Div3>
        <div>메인 설정</div>
        <InputR type="radio" />
        유튜브
        <InputR2 type="radio" />
        사진
      </Div3>
      <Div4>
        <Bt onClick={onClickSignIn}>등록하기</Bt>
      </Div4>
    </MainDiv>
  );
}
