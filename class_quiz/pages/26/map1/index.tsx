import { useEffect } from "react";
declare const window: typeof globalThis & {
  kakao: any;
};

export default function KaKaoPageMapToMarker() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=52b292e04c812b0c0d5b0bad25ee0259"; // script에 src추가
    document.head.appendChild(script);

    script.onload = () => {
      window.kakao.maps.load(function () {
        // 카카오가 다 로드가 되면 그때 해줘
        const container = document.getElementById("map"); // 지도를 담을 영역의 DOM 레퍼런스
        const options = {
          // 지도를 생성할 때 필요한 기본 옵션
          center: new window.kakao.maps.LatLng(37.511826, 127.058388), // 지도의 중심좌표.
          level: 3, // 지도의 레벨(확대, 축소 정도)
        };

        const map = new window.kakao.maps.Map(container, options); // 지도 생성 및 객체 리턴
        const imageSrc = "/location-pointer.png"; // 마커이미지의 주소입니다
        const imageSize = new window.kakao.maps.Size(69, 70); // 마커이미지의 크기입니다
        const imageOption = { offset: new window.kakao.maps.Point(27, 69) }; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.

        // 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
        const markerImage = new window.kakao.maps.MarkerImage(
          imageSrc,
          imageSize,
          imageOption
        );

        const marker = new window.kakao.maps.Marker({
          // 지도 중심좌표에 마커를 생성합니다
          position: map.getCenter(),
          image: markerImage, // 마커이미지 설정
        });
        // 지도에 마커를 표시합니다
        marker.setMap(map);

        window.kakao.maps.event.addListener(
          map,
          "click",
          function (mouseEvent: any) {
            // 클릭한 위도, 경도 정보를 가져옵니다
            const latlng = mouseEvent.latLng;

            // 마커 위치를 클릭한 위치로 옮깁니다
            marker.setPosition(latlng);
          }
        );
      });
    };
  });
  return (
    <>
      <div id="map" style={{ width: 500, height: 400 }}></div>
    </>
  );
}
