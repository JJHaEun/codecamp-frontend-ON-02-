import Head from "next/head";
import { useEffect } from "react";

declare const window: typeof globalThis & {
  kakao: any;
};

export default function KaKaoMapPage() {
  useEffect(() => {
    const container = document.getElementById("map"); // 지도를 담을 영역의 DOM 레퍼런스
    const options = {
      // 지도를 생성할 때 필요한 기본 옵션
      center: new window.kakao.maps.LatLng(37.511826, 127.058388), // 지도의 중심좌표.
      level: 3, // 지도의 레벨(확대, 축소 정도)
    };

    const map = new window.kakao.maps.Map(container, options); // 지도 생성 및 객체 리턴
    // map의 빨간줄 없애기위해 한번 사용함
    console.log(map);
  }, []);
  return (
    <>
      <Head>
        <script
          type="text/javascript"
          src="//dapi.kakao.com/v2/maps/sdk.js?appkey=a4b148d54848c01e7896311ba466bb51"
        ></script>
      </Head>
      <div id="map" style={{ width: 500, height: 400 }}></div>
    </>
  );
}
