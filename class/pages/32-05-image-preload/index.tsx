import { useRouter } from "next/router";
import { useEffect } from "react";
import { preloadImage } from "../../src/commons/libraries/preloadImage";

const PRELOAD_IMAGES = [
  "https://upload.wikimedia.org/wikipedia/commons/9/96/%22Den_kjekke_gutt%22_-_6._Internasjonale_Akademiske_Vinterleker_%281939%29_%2840200856483%29.jpg", // src를 만나 다운로드 받으러감.. img라는 태그에는 이미 결과까지 저장되어있는 상태
];

export default function ImagePreloadPage() {
  const router = useRouter();

  // 이 페이지가 다 로딩이 되고,
  useEffect(() => {
    preloadImage(PRELOAD_IMAGES); // 프리로드가 필요한 부분을 해담 함수로
  }, []);

  const onClickMove = () => {
    void router.push(`/32-06-image-preload-moved`);
  };
  return (
    <>
      <button onClick={onClickMove}>페이지 이동하기</button>
    </>
  );
}
