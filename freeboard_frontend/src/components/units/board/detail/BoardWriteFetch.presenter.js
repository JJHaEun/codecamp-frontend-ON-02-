import * as St from "./BoardWriteFetch.styles";
export default function BoardWriteFetchUI(props) {
  return (
    <St.Max>
      <St.MainBoard>
        <div>
          <St.Top>
            <St.TopLeft>
              <St.Image1 src="/profile.png"></St.Image1>
              <div>
                <St.Writer>{props.data?.fetchBoard?.writer}</St.Writer>
                <St.DateBox>
                  Date: {props.data?.fetchBoard?.createdAt}
                </St.DateBox>
              </div>
            </St.TopLeft>

            <St.TopRight>
              <img src="/link.png"></img>
              <img src="/location.png" />
            </St.TopRight>
          </St.Top>
          <St.MainMiddle>
            <div>
              <St.Title>{props.data?.fetchBoard?.title}</St.Title>

              <div>
                <img src="/imageBox.png" />

                <St.Contents>{props.data?.fetchBoard?.contents}</St.Contents>
              </div>
            </div>
          </St.MainMiddle>
          <div>
            <St.UnderVideo>
              <img src="/video.png" />
            </St.UnderVideo>
            <St.Score>
              <St.Count>
                <St.Button2>
                  <St.ScoreImg src="/like.png" />
                </St.Button2>

                <St.Count1>{props.data?.fetchBoard?.likeCount}</St.Count1>
              </St.Count>
              <St.Count>
                <St.Button2>
                  <St.ScoreImg src="/dislike.png" />
                </St.Button2>

                <St.Count2>{props.data?.fetchBoard?.dislikeCount}</St.Count2>
              </St.Count>
            </St.Score>
          </div>
        </div>
      </St.MainBoard>

      <St.ButtonGroup>
        <St.Button1>목록으로</St.Button1>
        <St.Button1>수정하기</St.Button1>
        <St.Button1>삭제하기</St.Button1>
      </St.ButtonGroup>
    </St.Max>
  );
}
