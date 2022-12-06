import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  ApolloLink,
} from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../commons/libraries/store";
interface IApolloSettingProps {
  children: JSX.Element;
}
const GLOBAL_STATE = new InMemoryCache();
export default function ApolloSetting(props: IApolloSettingProps) {
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);

  // 1.번 프리랜더링 예제 - process.browser방법
  if (process.browser) {
    // console.log("지금은 브라우저");
    // const result = localStorage.getItem("accessToken");
    // if (result) setAccessToken(result);
  } else {
    // console.log("지금은 프론트엔드 서버(yarn dev로 실행시킨 프로그램 내부다)");
    // const result = localStorage.getItem("accessToken");
    // if (result) setAccessToken(result);
  }
  // 2. 프리랜더링 예제 - 윈도우가 있는지 여부 구분 typeof window방법
  if (typeof window !== "undefined") {
    // console.log("지금은 브라우저");
    // const result = localStorage.getItem("accessToken");
    // if (result) setAccessToken(result);
  } else {
    // console.log("지금은 프론트엔드 서버(yarn dev로 실행시킨 프로그램 내부다)");
    // const result = localStorage.getItem("accessToken");
    // if (result) setAccessToken(result);
  }
  // 3. 프리랜더링 예제 - useEffect사용방법(프리랜더링 무시하고 브라우저에서만 사용됨)
  useEffect(() => {
    console.log("지금은 브라우저");
    const result = localStorage.getItem("accessToken");
    if (result) setAccessToken(result);
  }, []);

  const uploadLink = createUploadLink({
    uri: "http://backendonline.codebootcamp.co.kr/graphql",
    headers: { Authorization: `Bearer ${accessToken}` }, // 모든 API에 토큰이 첨부되어 요청들어감. 토큰이 없는경우에는 빈문자열로
  });
  const client = new ApolloClient({
    link: ApolloLink.from([uploadLink]),
    // cache: new InMemoryCache(), // 나중에 수업//
    cache: GLOBAL_STATE,
    connectToDevTools: true,
  });
  // prettier-ignore
  return(
        <ApolloProvider client={client}>
            {props.children}
      </ApolloProvider>
    )
}
