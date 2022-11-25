import { Modal } from "antd";
import { collection, addDoc, getFirestore } from "firebase/firestore/lite";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import { firebaseApp } from "../../../../commons/libraries/firebase";
import MyFireBaseWiteUI from "./FirebaseWrite.presenter";

export default function MyFireBaseWite() {
  const [writer, setWriter] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  const router = useRouter();

  const onClickSubmit = async () => {
    if (!writer || !title || !contents) {
      Modal.warning({ content: "내용을 확인해주세요" });
      return;
    }
    if (writer && title && contents) {
      const board = collection(getFirestore(firebaseApp), "board");
      await addDoc(board, {
        writer,
        title,
        contents,
      });

      Modal.success({ content: "게시물이 성공적으로 등록되었습니다" });
      void router.push(`/myfirebase`);
    }
  };
  const onChangeWriter = (event: ChangeEvent<HTMLInputElement>) => {
    setWriter(event.target.value);
  };
  const onChangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };
  const onChangeContents = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setContents(event.target.value);
  };
  return (
    <MyFireBaseWiteUI
      onClickSubmit={onClickSubmit}
      onChangeWriter={onChangeWriter}
      onChangeTitle={onChangeTitle}
      onChangeContents={onChangeContents}
    />
  );
}
