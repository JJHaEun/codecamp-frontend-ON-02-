import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  ApolloLink,
  fromPromise,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import { createUploadLink } from "apollo-upload-client";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { getAccessToken } from "../../../commons/libraries/getAccessToken";
import { accessTokenState } from "../../../commons/store";
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
    // 새로고침시
    // 1. 기존방식( refreshToken 이전 방식)
    // console.log("지금은 브라우저");
    // const result = localStorage.getItem("accessToken");
    // if (result) setAccessToken(result);

    // 2. 새로운 방식 (refreshToken 적용후)// 로컬스토리지 더이상 사용 안함
    void getAccessToken().then((newAccessToken) => {
      setAccessToken(newAccessToken);
    });
  }, []);

  const errorLink = onError(({ graphQLErrors, operation, forward }) => {
    // 1-1 : 에러를 캐치
    if (graphQLErrors) {
      // graphQLErrors 가 있니?(여러개임)
      for (const err of graphQLErrors) {
        // 아폴로 클라이언트 독스에서 말한 방법.graphQLErrors들을 err에 담아 한번찍 반복하겠다
        // 1-2 :  해당에러가 토큰만료에러인지 체크하기(UNAUTHENTICATED 라는 에러가 들어옴.)
        if (err.extensions.code === "UNAUTHENTICATED") {
          return fromPromise(
            // 2-1 : refresh 토큰으로 accessToken 재발급 받기
            getAccessToken().then((newAccessToken) => {
              // 2-2 : 재발급 받은 accessToken 저장하기(글로벌스테이트 (recoil스테이트)에)
              setAccessToken(newAccessToken);
              // 3-1 : 재발급 받은 accessToken 으로 방금실패한 쿼리 정보 수정하기(기존의 accessToken 삭제 하기)
              if (typeof newAccessToken !== "string") return;

              operation.setContext({
                // 실패했던 쿼리정보 정보 수정
                headers: {
                  // 해더정보중 딱 하나만 바꿈. 모든 해더 정보 가져옴
                  ...operation.getContext().headers, // 기존데이터중 헤더 부분을 다 가져와(스프레드)(만료된 토큰이 추가되어있는 상태) .
                  Authorization: `Bearer ${newAccessToken}`, // 그 중 Authorization 만 새 accessToken으로 변경
                },
              });
            })
          ).flatMap(() => forward(operation)); // 3-2 : 재발급 받은 accessToken 으로 방금 수정된 쿼리 재요청 // 전송해줘. 방금 수정된 operation을.
        }
      }
    }
  });
  const uploadLink = createUploadLink({
    uri: "https://backendonline.codebootcamp.co.kr/graphql",
    // uri: "https://backend10.codebootcamp.co.kr/graphql",
    headers: { Authorization: `Bearer ${accessToken}` }, // 모든 API에 토큰이 첨부되어 요청들어감. 토큰이 없는경우에는 빈문자열로
    credentials: "include",
  });

  const client = new ApolloClient({
    link: ApolloLink.from([errorLink, uploadLink]), // 순서 있음
    // cache: new InMemoryCache(), // 나중에 수업//
    cache: GLOBAL_STATE, // 페이지 전환되어도 (앱컴포넌트 리랜더됨)캐시유지
    connectToDevTools: true,
  });
  // prettier-ignore
  return (
    <ApolloProvider client={client}>
            {props.children}
    </ApolloProvider>
  )
}
