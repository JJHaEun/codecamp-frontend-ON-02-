// 개발자 일때 ==>  디스코드(개발자)

import axios from "axios";

export default function OpengraphDeveloperPage() {
  const onclickEnter = async () => {
    // 1. 체팅데이터가 주소가 있는지 찾기 (ex, http://~~ 나 http://~~ 로 시작하는것) // .find()라거나 정규표현식 사용.
    // 찾았다고 가정
    // 2. 해당 주소로 스크래핑하기
    const result = await axios.get("https://www.gmarket.co.kr"); // 이 작업은 벡엔드에서 하게됨. 이유: CORS문제. 네이버의 경우 CORS문제에 걸려 지금 프론트에서는 실습 어려움. 벡엔드에서는 가능.
    console.log(result.data); // html코드가 문자열형태로 담긴것을 확인가능
    // 3. 메타테그에서 오픈그래트(og: ) 찾기
    console.log(
      // <meta 로 스플릿하여 쪼개고, 필터로 og가 들어있는 것만 아오게 거름 //또는 라이브러리 cheerio사용
      result.data.split("<meta").filter((el: string) => el.includes("og:"))
    );
  };

  return (
    <>
      <button onClick={onclickEnter}>체팅입력후 엔터치기</button>
    </>
  );
}
