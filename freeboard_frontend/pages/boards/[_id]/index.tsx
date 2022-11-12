import BoardWriteFetch from "../../../src/components/units/board/detail/BoardWriteFetchAndDelete.container";
import CommentWritList from "../../../src/components/units/boardComments/list/CommentsList.container";
import CommentsWrite from "../../../src/components/units/boardComments/write/Comments.container";

export default function freeboardWriteRouted() {
  return (
    <>
      <BoardWriteFetch />
      <CommentsWrite />
      <CommentWritList />
    </>
  );
}
