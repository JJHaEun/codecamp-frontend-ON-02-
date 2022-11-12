import { gql } from "@apollo/client";

export const FETCH_BOARD_COMMENT = gql`
  query fetchBoardComments($boardId: ID!) {
    fetchBoardComments(boardId: $boardId) {
      _id
      writer
      contents
      rating
      createdAt
    }
  }
`;
export const DELETE_BOARD_COMMENT = gql`
  mutation deleteBoardComment($password: String, $boardCommentId: ID!) {
    deleteBoardComment(password: $password, boardCommentId: $boardCommentId)
  }
`;
// export const UPDATE_BOARD_COMMENT = gql`
//   mutation updateBoardComment(
//     $updateBoardCommentInput: UpdateBoardCommentInput!
//     $password: String
//     $boardCommentId: ID!
//   ) {
//     updateBoardComment(
//       updateBoardCommentInput: $updateBoardCommentInput
//       password: $password
//       boardCommentId: $boardCommentId
//     ) {
//       _id
//       writer
//       contents
//       rating
//       createdAt
//     }
//   }
// `;
