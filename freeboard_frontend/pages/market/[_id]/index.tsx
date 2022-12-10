import ProductDetail from "../../../src/components/units/productBoard/detail/ProductDetail.container";
import CommentsAnswerList from "../../../src/components/units/productBoardCommentsAnswer/list/ProductCommentsAnswerList.container";
import CommentsList from "../../../src/components/units/productBoardCommentsQuestion/list/ProductCommentsQustionList.container";
import CommentsQuestion from "../../../src/components/units/productBoardCommentsQuestion/write/ProductCommentsQuestion.container";

export default function freeboardWriteRouted() {
  return (
    <>
      {/* <BoardWriteFetch  상세보기/>
      <CommentsWrite 댓글등록/>
      <CommentWritList 댓글목록/> */}
      <ProductDetail />
      <CommentsQuestion />
      <CommentsList>
        <CommentsAnswerList />
      </CommentsList>
    </>
  );
}
