import {
  collection,
  getDocs,
  getFirestore,
  DocumentData,
} from "firebase/firestore/lite";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { firebaseApp } from "../../../../commons/libraries/firebase";
import MyFireBaseListUI from "./FirebaseList.presenter";

export default function MyFireBaseList() {
  const [boardData, setBoardData] = useState<DocumentData[]>([]);
  const router = useRouter();
  useEffect(() => {
    const fetchBoards = async () => {
      const board = collection(getFirestore(firebaseApp), "board");
      const result = await getDocs(board);
      const boards = result.docs.map((el) => el.data());
      setBoardData(boards);
    };
    void fetchBoards();
  }, []);
  const onClickMoveNewBoard = () => {
    void router.push(`/myfirebase/new`);
  };
  return (
    <MyFireBaseListUI
      boardData={boardData}
      onClickMoveNewBoard={onClickMoveNewBoard}
    />
  );
}
