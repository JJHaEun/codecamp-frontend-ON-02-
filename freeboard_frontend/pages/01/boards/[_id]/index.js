import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";

import {
  MainBoard,
  Image1,
  Top,
  TopLeft,
  DateBox,
  Writer,
  TopRight,
  Title,
  MainMiddle,
  UnderVideo,
  Score,
  ScoreImg,
  Count,
  Count1,
  Count2,
  Contents,
  ButtonGroup,
  Button1,
  UnderContents,
  CommentTitle,
  TextArea,
  Button2,
  Max,
  Writer2,
  DateBox2,
  Cmt,
  Content,
} from "../../../../styles/routed-emotion";

export default function freeboardWriteRouted() {
  const FETCH_BOARD = gql`
    query fetchBoard($boardId: ID!) {
      fetchBoard(boardId: $boardId) {
        writer
        title
        contents
        likeCount
        dislikeCount
        createdAt
      }
    }
  `;
  const router = useRouter();
  console.log(router);
  const { data } = useQuery(FETCH_BOARD, {
    variables: {
      boardId: router.query._id,
    },
  });
  console.log(data);
  return (
    <Max>
      <MainBoard>
        <div>
          <Top>
            <TopLeft>
              <Image1 src="/profile.png"></Image1>
              <div>
                <Writer>{data?.fetchBoard?.writer}</Writer>
                <DateBox>Date:{data?.fetchBoard?.createdAt}</DateBox>
              </div>
            </TopLeft>

            <TopRight>
              <img src="/link.png"></img>
              <img src="/location.png" />
            </TopRight>
          </Top>
          <MainMiddle>
            <div>
              <Title>{data?.fetchBoard?.title}</Title>

              <div>
                <img src="/imageBox.png" />

                <Contents>{data?.fetchBoard?.contents}</Contents>
              </div>
            </div>
          </MainMiddle>
          <div>
            <UnderVideo>
              <img src="/video.png" />
            </UnderVideo>
            <Score>
              <Count>
                <ScoreImg src="/like.png" />

                <Count1>{data?.fetchBoard?.likeCount}</Count1>
              </Count>
              <Count>
                <ScoreImg src="/dislike.png" />

                <Count2>{data?.fetchBoard?.dislikeCount}</Count2>
              </Count>
            </Score>
          </div>
        </div>
      </MainBoard>

      <ButtonGroup>
        <Button1>목록으로</Button1>
        <Button1>수정하기</Button1>
        <Button1>삭제하기</Button1>
      </ButtonGroup>
      <UnderContents>
        <div>
          <CommentTitle>
            <img src="/comments.png" />
            <div>댓글</div>
          </CommentTitle>
          <TextArea
            placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 
        무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며,
         이에 대한 민형사상 책임은 게시자에게 있습니다."
          ></TextArea>
          <Button2>등록하기</Button2>
        </div>

        <Cmt>
          <Image1 src="/profile.png"></Image1>
          <div>
            <Writer2>코멘트 작성자</Writer2>
            <Content>내용</Content>
            <DateBox2>작성날짜</DateBox2>
          </div>
        </Cmt>
      </UnderContents>
    </Max>
  );
}
