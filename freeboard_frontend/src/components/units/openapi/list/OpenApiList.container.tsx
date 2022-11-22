import axios from "axios";
import { useEffect, useState } from "react";
import OpenApiListUI from "../OpenApiList.presenter";

export default function OpenApiList() {
  const [dogImg, setDogImg] = useState<string[]>([]);

  useEffect(() => {
    const getApi = async () => {
      new Array(9).fill(1).forEach(async (el) => {
        const result = await axios.get(
          "https://dog.ceo/api/breeds/image/random"
        );
        setDogImg((prev) => [...prev, result.data.message]);
      });
    };
    void getApi();
  }, []);

  return <OpenApiListUI dogImg={dogImg} />;
}
