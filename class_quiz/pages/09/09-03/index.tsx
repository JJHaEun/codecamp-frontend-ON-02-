import ReactPlayer from "react-player/lazy";

export default function () {
  return (
    <>
      <div className="player-wrapper">
        <ReactPlayer
          className="react-player"
          url={"https://www.youtube.com/watch?v=YoKZvJO3yGc"} // 플레이어 url
          width="800px" // 플레이어 크기 (가로)
          height="600px" // 플레이어 크기 (세로)
          playing={true} // 자동 재생 on
          muted={true}
          controls={true} // 플레이어 컨트롤 노출 여부
          light={false} // 플레이어 모드
          pip={true} // pip 모드 설정 여부
        />
      </div>
    </>
  );
}
