import BoardWrite from "../../../../src/components/units/board/write/BoardWrite.container";
// import { useQuery } from "@apollo/client";
// import { useRouter } from "next/router";
// import { FETCH_BOARD } from "../../../../src/components/units/board/detail/BoardWriteFetchAndDelete.queries";

// export const FETCH_BOARD = gql`
//   query fetchBoard($boardId: ID!) {
//     fetchBoard(boardId: $boardId) {
//       writer
//       title
//       contents
//       likeCount
//       dislikeCount
//       createdAt
//       images
//       youtubeUrl
//     }
//   }
// `;

export default function EditPage() {
  // const router = useRouter();
  // const { data } = useQuery(FETCH_BOARD, {
  //   variables: {
  //     boardId: router.query._id,
  //   },
  // });
  return <BoardWrite isEdit={true} />;
}
