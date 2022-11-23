import {
  collection,
  addDoc,
  getDocs,
  getFirestore,
} from "firebase/firestore/lite";
import { firebaseApp } from "../_app";

export default function FirebasePage() {
  const onClickSubmit = async () => {
    const board = collection(getFirestore(firebaseApp), "board"); // 없으면 만들어서 등록됨
    await addDoc(board, {
      writer: "철수",
      title: "제목입니다",
      contents: "내용이에요",
    });
  };

  const onClickFetch = async () => {
    const board = collection(getFirestore(firebaseApp), "board");
    const result = await getDocs(board);
    const datas = result.docs.map((el) => el.data()); // 배열형태로 result안에 doc가 들어오고 묶여있기에 그것들을 하나하나 뽑아줘야함
    console.log(datas);
  };
  return (
    <>
      <button onClick={onClickSubmit}>등록하기</button>
      <button onClick={onClickFetch}>조회하기</button>
    </>
  );
}
