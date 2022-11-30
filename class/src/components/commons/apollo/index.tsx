import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  ApolloLink,
} from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../commons/store";
interface IApolloSettingProps {
  children: JSX.Element;
}
const GLOBAL_STATE = new InMemoryCache();
export default function ApolloSetting(props: IApolloSettingProps) {
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  const uploadLink = createUploadLink({
    uri: "http://backendonline.codebootcamp.co.kr/graphql",
    headers: { Authorization: `Bearer ${accessToken}` }, // 모든 API에 토큰이 첨부되어 요청들어감. 토큰이 없는경우에는 빈문자열로
  });
  const client = new ApolloClient({
    link: ApolloLink.from([uploadLink]),
    // cache: new InMemoryCache(), // 나중에 수업//
    cache: GLOBAL_STATE, // 페이지 전환되어도 (앱컴포넌트 리랜더됨)캐시유지
  });
  // prettier-ignore
  return (
    <ApolloProvider client={client}>
            {props.children}
    </ApolloProvider>
  )
}
