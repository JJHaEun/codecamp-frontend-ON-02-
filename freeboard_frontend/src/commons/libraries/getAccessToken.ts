import { gql } from "@apollo/client";

import { GraphQLClient } from "graphql-request";
const RESTORE_ACCESS_TOKEN = gql`
  mutation restoreAccessToken {
    restoreAccessToken {
      accessToken
    }
  }
`;
export const getAccessToken = async () => {
  try {
    const graphQLClient = new GraphQLClient(
      "https://backend-practice.codebootcamp.co.kr/graphql",

      {
        // /graphql이라는 단일 앤드포인트를 가진 단일 rest-API의 post방식이다.
        credentials: "include",
      }
    );
    const result = await graphQLClient.request(RESTORE_ACCESS_TOKEN);
    const newAccessToken = result.restoreAccessToken.accessToken;
    return newAccessToken; // 받은 newAccessToken을 넘겨주기
  } catch (error) {
    if (error instanceof Error) console.log(error.message);
  }
};
