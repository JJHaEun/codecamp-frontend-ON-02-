import { useAuth } from "../../../src/components/commons/hooks/useAuth";
import ProductDetail from "../../../src/components/units/productBoard/detail/ProductDetail.container";
import CommentsList from "../../../src/components/units/productBoardCommentsQuestion/list/ProductCommentsQuestionList.container";
import CommentsQuestion from "../../../src/components/units/productBoardCommentsQuestion/write/ProductCommentsQuestion.container";

export default function freeboardWriteRouted() {
  useAuth();
  return (
    <>
      {/* <BoardWriteFetch  상세보기/>
      <CommentsWrite 댓글등록/>
      <CommentWritList 댓글목록/> */}
      <ProductDetail />
      <CommentsQuestion
        isEdit={false}
        el={{
          __typename: undefined,
          _id: "",
          contents: "",
          createdAt: undefined,
          deletedAt: undefined,
          updatedAt: undefined,
          useditem: {
            __typename: undefined,
            _id: "",
            buyer: undefined,
            contents: "",
            createdAt: undefined,
            deletedAt: undefined,
            images: undefined,
            name: "",
            pickedCount: undefined,
            price: undefined,
            remarks: "",
            seller: undefined,
            soldAt: undefined,
            tags: undefined,
            updatedAt: undefined,
            useditemAddress: undefined,
          },
          user: {
            __typename: undefined,
            _id: "",
            createdAt: undefined,
            deletedAt: undefined,
            email: "",
            name: "",
            picture: undefined,
            updatedAt: undefined,
            userPoint: undefined,
          },
        }}
      />
      <CommentsList />
    </>
  );
}
