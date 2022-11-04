import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";

export default function freeboardWriteRouted() {
  const [writer, setWriter] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  const FETCH_BOARD = gql`
    query fetchBoard($boardId: ID!) {
      fetchBoard(boardId: $boardId) {
        writer
        title
        contents
      }
    }
  `;
  const router = useRouter();
  console.log(router);
  const { data } = useQuery(FETCH_BOARD, {
    variables: {
      boardId: router.query._id,
      writer,
      title,
      contents,
    },
  });
  console.log(data);
  return (
    <div>
      <div>
        <div>
          <div>
            <image src="/profile.png"></image>
            <div>작성자</div>
            <div>Date:{}</div>
          </div>

          <div>
            <img src="/link.png"></img>
            <img src="/location.png" />
          </div>
        </div>

        <div>
          <h2>게시글 제목입니다</h2>

          <div>
            <img src="/imageBox.png" />

            <div>내용</div>
          </div>
        </div>

        <div>
          <img src="/video.png" />

          <div>
            <img src="/like.png" />
            <div>좋아요개수</div>
            <img src="/dislike.png" />
            <div>싫어요개수</div>
          </div>
        </div>
      </div>

      <div>
        <button>목록으로</button>
        <button>수정하기</button>
      </div>

      <div>
        <img src="/comments.png" />
        <div>댓글</div>
        <textarea
          placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 
        무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며,
         이에 대한 민형사상 책임은 게시자에게 있습니다."
        ></textarea>
        <button>등록하기</button>
      </div>

      <div>
        <image src="/profile.png"></image>
        <div>코멘트 작성자</div>
        <div>내용</div>
        <div>작성날짜</div>
      </div>
    </div>
  );
}
