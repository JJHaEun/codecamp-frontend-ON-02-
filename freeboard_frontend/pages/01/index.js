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
  const [add, setAdd] = useState("");

  const [nameEmpty, setNameEmpty] = useState("");
  const [pwEmpty, setPwEmpty] = useState("");
  const [titleEmpty, setTitleEmpty] = useState("");
  const [contentEmpty, setContentEmpty] = useState("");
  const [addEmpty, setAddEmpty] = useState("");

  function onChangeName(event) {
    setName(event.target.value);
  }
  function onChangePw(event) {
    setPw(event.target.value);
  }
  function onChangeTitle(event) {
    setTitle(event.target.value);
  }
  function onChangeContent(event) {
    setContent(event.target.value);
  }
  function onChangeAdd(event) {
    setAdd(event.target.value);
  }
  function onClickSignIn() {
    if (name === "") {
      setNameEmpty("작성자를 입력해 주세요");
    } else {
      setNameEmpty("");
    }
    if (pw === "") {
      setPwEmpty("비밀번호를 입력해 주세요");
    } else {
      setPwEmpty("");
    }
    if (title === "") {
      setTitleEmpty("제목을 입력해 주세요");
    } else {
      setTitleEmpty("");
    }
    if (content === "") {
      setContentEmpty("내용을 입력해 주세요");
    } else {
      setContentEmpty("");
    }
    if (add === "") {
      setAddEmpty("주소를 확인해주세요");
    } else {
      setAddEmpty("");
    }
  }
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
        <Empty>{addEmpty}</Empty>
        <Input4 type="text" placeholder="07250" />
        <Bt1>우편번호 검색</Bt1>
        <Input2 type="text" />
        <Input2 type="text" onChange={onChangeAdd} />
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
