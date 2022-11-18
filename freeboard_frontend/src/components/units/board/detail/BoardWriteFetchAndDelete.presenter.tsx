import { getDate } from "../../../commons/utils/utils";
import * as St from "./BoardWriteFetchAndDelete.styles";
import { IBoardWriteFetchUIProps } from "./BoardWriterFetchAndDelete.types";
import { Tooltip } from "antd";

export default function BoardWriteFetchUI(props: IBoardWriteFetchUIProps) {
  console.log(props.data?.fetchBoard.boardAddress?.address);
  return (
    <St.Max>
      <St.MainBoard>
        <div>
          <St.Top>
            <St.TopLeft>
              <St.Image1 src="/profile.jpg"></St.Image1>
              <div>
                <St.Writer>{props.data?.fetchBoard?.writer}</St.Writer>
                <St.DateBox>
                  Date: {getDate(props.data?.fetchBoard?.createdAt)}
                </St.DateBox>
              </div>
            </St.TopLeft>

            <St.TopRight>
              <St.Img3 src="/link.png"></St.Img3>
              <div>
                {props.data?.fetchBoard.boardAddress && (
                  <Tooltip
                    color="geekblue"
                    title={`${props.data?.fetchBoard.boardAddress?.address} ${props.data?.fetchBoard.boardAddress?.addressDetail}`}
                  >
                    <St.Img4 src="/location.png" />
                  </Tooltip>
                )}
              </div>
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
                <St.Button2 onClick={props.onClickLike}>
                  <St.ScoreImg src="/like.png" />
                </St.Button2>

                <St.Count1>{props.data?.fetchBoard?.likeCount}</St.Count1>
              </St.Count>
              <St.Count>
                <St.Button2 onClick={props.onClickDisLike}>
                  <St.ScoreImg src="/dislike.png" />
                </St.Button2>

                <St.Count2>{props.data?.fetchBoard?.dislikeCount}</St.Count2>
              </St.Count>
            </St.Score>
          </div>
        </div>
      </St.MainBoard>

      <St.ButtonGroup>
        <St.Button1 onClick={props.onClickList}>목록으로</St.Button1>
        <St.Button1 onClick={props.onClickUpdate}>
          <St.UpdateSend>
            <St.ButtonImg src="/update.png"></St.ButtonImg>
          </St.UpdateSend>
          수정하기
        </St.Button1>
        <St.Button1 onClick={props.onClickDelete}>
          <St.ButtonImg2 src="/delete-button.png"></St.ButtonImg2>
        </St.Button1>
      </St.ButtonGroup>
    </St.Max>
  );
}
