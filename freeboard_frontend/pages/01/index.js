import { gql, useMutation } from "@apollo/client";
import { useState } from "react";
import { useRouter } from "next/router";
import {
  H1,
  Div,
  Input,
  Name_Pw,
  MainDiv,
  Input2,
  Div2,
  Private,
  Text,
  Input4,
  PottoButton,
  Div3,
  InputR,
  InputR2,
  Bt,
  Div4,
  Bt1,
  Empty1,
  Empty,
} from "../../styles/index";

export default function freeboardWrite() {
  const router = useRouter();
  const [writer, setWriter] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  const [pw, setPw] = useState("");

  const [writerEmpty, setWriterEmpty] = useState("");
  const [pwEmpty, setPwEmpty] = useState("");
  const [titleEmpty, setTitleEmpty] = useState("");
  const [contentsEmpty, setContentsEmpty] = useState("");

  const CREATE_BOARD = gql`
    mutation createBoard($createBoardInput: CreateBoardInput!) {
      createBoard(createBoardInput: $createBoardInput) {
        writer
        _id
        title
        contents
        images
      }
    }
  `;

  const [createBoard] = useMutation(CREATE_BOARD);

  const onClickSignIn = async () => {
    try {
      if (!writer) {
        setWriterEmpty("작성자를 입력해 주세요");
      }
      if (!pw) {
        setPwEmpty("비밀번호를 입력해 주세요");
      }
      if (!title) {
        setTitleEmpty("제목을 입력해 주세요");
      }
      if (!contents) {
        setContentsEmpty("내용을 입력해 주세요");
      }
      if (writer && pw && title && contents) {
        const result = await createBoard({
          variables: {
            createBoardInput: {
              password: String(pw),
              writer,
              title,
              contents,
            },
          },
        });
        console.log(result);
        alert("게시물이 성공적으로 등록되었습니다.");
        router.push(`/01/boards/${result.data.createBoard._id}`);
      }
    } catch (error) {
      alert(error.message);
    }
  };
  const onChangeWriter = (event) => {
    setWriter(event.target.value);
    if (event.target.value !== "") {
      setWriterEmpty("");
    }
  };
  const onChangePw = (event) => {
    setPw(event.target.value);
    if (event.target.value !== "") {
      setPwEmpty("");
    }
  };
  const onChangeTitle = (event) => {
    setTitle(event.target.value);
    if (event.target.value !== "") {
      setTitleEmpty("");
    }
  };
  const onChangeContents = (event) => {
    setContents(event.target.value);
    if (event.target.value !== "") {
      setContentsEmpty("");
    }
  };
  return (
    <MainDiv>
      <H1>게시물 등록</H1>
      <Div>
        <div>
          <Name_Pw>작성자</Name_Pw>
          <Empty1>{writerEmpty}</Empty1>
          <Input
            type="text"
            placeholder="이름을 적어주세요"
            onChange={onChangeWriter}
          />
        </div>

        <div>
          <Name_Pw>비밀번호</Name_Pw>
          <Empty1>{pwEmpty}</Empty1>
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
        <Empty>{contentsEmpty}</Empty>
        <Text
          placeholder="내용을 작성해주세요."
          onChange={onChangeContents}
        ></Text>
      </Div2>
      <Div2>
        <Private>주소</Private>
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
