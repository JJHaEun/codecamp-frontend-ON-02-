//  제공자일때 ==> 네이버(제공자)
import { gql } from "@apollo/client";
import { GraphQLClient } from "graphql-request";
import Head from "next/head";
// import {
//   IQuery,
//   IQueryFetchUseditemArgs,
// } from "../../src/commons/types/generated/types";

const FETCH_USEDITEM = gql`
  query fetchUsedItem($useditemId: ID!) {
    fetchUsedItem(useditemId: $useditemId) {
      _id
      remarks
      name
      images
    }
  }
`;

export default function OpengraphProviderPage(props: any) {
  console.log(props);
  //  {/*  페이지 별로 og가 바뀔 수 있기에 페이지별로 head로 묶기 useQuery로 받아올 수 있음 그러면 받아온것으로 오픈그래프 페이지를 바꿀 수 있다.==. 다이나믹 오픈그래프*/}
  // const { data } = useQuery<
  //   Pick<IQuery, "fetchUseditem">,
  //   IQueryFetchUseditemArgs
  // >(FETCH_USEDITEM, {
  //   variables: { useditemId: "638dc91c1182750028ecfb89" },
  // });

  return (
    <>
      <Head>
        <meta property="og:title" content={props?.aaa.name} />
        <meta property="og:description" content={props.aaa.remarks} />
        <meta property="og:image" content={props.aaa.images?.[0]} />
      </Head>
      <div>
        중고마켓에 오신것을 환영합니다(여기는 바디부분이므로 미리보기와는
        상관없음)
      </div>
    </>
  );
}
// getServerSideProp는 존재하는 당어이므로 변경 불가
// 여기는 서버(Webpack 프론트엔드 서버) 에서만 실행됨
// 이부분이 app.tsx의 ...pageProps 라는 부분으로 넘어가는것! Component는 해당 페이지었음 . pageProps는 서버사이드 랜더링에서 여기서 리턴되어 이 페이지에 넘어가는 props를 말함!!
export const getServerSideProps = async () => {
  // 이 페이지에서만 가능. 이름 바꿀 수 없음.
  console.log("여기는 프론트 서버입니다");
  // 1. 여기서 API요청
  // 첫접속시 시작하는 부분. 아폴로 세팅 없는 상태//getAccessToken때랑 비슷
  const graphQLClient = new GraphQLClient(
    "https://backendonline.codebootcamp.co.kr/graphql"
    // "https://backend10.codebootcamp.co.kr/graphql",
  );
  const result = await graphQLClient.request(FETCH_USEDITEM, {
    // 요청한다. FETCH_USEDITEM을 벡엔드로
    // 여기서는 variables라는 단어 따로 적지 않고 알맹이만
    useditemId: "638dc91c1182750028ecfb89", // 보내고 받음.
  });

  // 2.받은 결과를 리턴. 리턴값이 페이지로 들어가 페이지가 받아온 API데이터를 가지고 화면에 그려주게됨 그다음 내용 모두채워놓고 완벽히 그려 보내준다.
  return {
    props: {
      // 반드시 props라는 단어로
      aaa: {
        name: result.fetchUseditem.name,
        remarks: result.fetchUseditem.remarks,
        images: result.fetchUseditem.images,
      },
    },
  };
};
