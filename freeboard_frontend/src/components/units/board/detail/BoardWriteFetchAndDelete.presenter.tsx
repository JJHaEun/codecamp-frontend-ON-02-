import { getDate } from "../../../commons/utils/utils";
import * as St from "./BoardWriteFetchAndDelete.styles";
import { IBoardWriteFetchUIProps } from "./BoardWriterFetchAndDelete.types";
import { Tooltip } from "antd";
import ReactPlayer from "react-player/youtube";

export default function BoardWriteFetchUI(props: IBoardWriteFetchUIProps) {
  console.log(props.data?.fetchBoard?.boardAddress?.address);
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
              <div>
                {props.data?.fetchBoard.youtubeUrl && (
                  <Tooltip
                    placement="topRight"
                    color="cyan"
                    title={`${props.data?.fetchBoard.youtubeUrl}`}
                  >
                    <St.Img3 src="/link.png" />
                  </Tooltip>
                )}
              </div>

              <div>
                {props.data?.fetchBoard.boardAddress && (
                  <Tooltip
                    placement="topRight"
                    color="geekblue"
                    title={`${props.data?.fetchBoard.boardAddress?.address}  ${props.data?.fetchBoard.boardAddress?.addressDetail}`}
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
              <St.VideoBox>
                <ReactPlayer
                  className="react-player"
                  url={`${props.data?.fetchBoard.youtubeUrl}`} // 플레이어 url
                  playing={true}
                  muted={true}
                  controls={true}
                  light={false}
                  pip={true} // pip 모드 설정 여부
                />
              </St.VideoBox>
            </St.UnderVideo>
            <St.Score>
              <St.Count>
                <St.Button2 onClick={props.onClickLike}>
                  <Tooltip
                    placement="topRight"
                    color="magenta"
                    title={`${props.data?.fetchBoard?.likeCount}`}
                  >
                    <St.ScoreImg src="/like.png" />
                  </Tooltip>
                </St.Button2>
                <St.likeCountNumber>
                  {props.data?.fetchBoard?.likeCount}
                </St.likeCountNumber>
              </St.Count>
              <St.Count>
                <St.Button2 onClick={props.onClickDisLike}>
                  <Tooltip
                    placement="topRight"
                    color="gold"
                    title={`${props.data?.fetchBoard?.dislikeCount}`}
                  >
                    <St.ScoreImg src="/dislike.png" />
                  </Tooltip>
                  <St.DislikeCountNumber>
                    {props.data?.fetchBoard?.dislikeCount}
                  </St.DislikeCountNumber>
                </St.Button2>
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