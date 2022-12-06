// import "../styles/globals.css";
import { AppProps } from "next/app";
import "antd/dist/antd.css";
import LayOut from "../src/components/commons/layout";
import ApolloSetting from "../src/components/commons/apollo";
import { Global } from "@emotion/react";
import { globalStyles } from "../src/commons/styles/globalStyles";
import { RecoilRoot } from "recoil";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    // <Head> // 모든 페이지에서 카카오 맵을 다운로드 받으므로 비효율적임
    //     <script
    //       type="text/javascript"
    //       src="//dapi.kakao.com/v2/maps/sdk.js?appkey=a4b148d54848c01e7896311ba466bb51"
    //     ></script>
    //   </Head>
    <RecoilRoot>
      <ApolloSetting>
        <>
          <Global styles={globalStyles} />
          <LayOut>
            <Component {...pageProps} />
          </LayOut>
        </>
      </ApolloSetting>
    </RecoilRoot>
  );
}

export default MyApp;
