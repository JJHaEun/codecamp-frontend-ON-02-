import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  ApolloLink,
} from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";
interface IApolloSettingProps {
  children: JSX.Element;
}
const GLOBAL_STATE = new InMemoryCache();
export default function ApolloSetting(props: IApolloSettingProps) {
  const uploadLink = createUploadLink({
    uri: "http://backendonline.codebootcamp.co.kr/graphql",
  });
  const client = new ApolloClient({
    link: ApolloLink.from([uploadLink]),
    // cache: new InMemoryCache(), // 나중에 수업//
    cache: GLOBAL_STATE,
  });
  // prettier-ignore
  return(
        <ApolloProvider client={client}>
            {props.children}
      </ApolloProvider>
    )
}
