import axios from "axios";
import { useEffect, useState } from "react";

export default function openApiWithUseEffectPage() {
  const [dogUrl, setDogUrl] = useState("");
  useEffect(() => {
    // rest-Api요청 오픈 Api  react-quey라이브러리 사용해 usequery, mutation사용
    const fetchDog = async () => {
      const result = await axios.get("https://dog.ceo/api/breeds/image/random");
      setDogUrl(result.data.message); // 이미지 주소
    };
    void fetchDog();
  }, []); // 새로고침 할때마다 그림달라짐

  return (
    <>
      <img src={dogUrl} />
    </>
  );
}
