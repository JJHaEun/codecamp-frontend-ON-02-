// import "../styles/globals.css";
import { AppProps } from "next/app";
import "antd/dist/antd.css";
import ApolloSetting from "../src/components/commons/apollo";
import LayOut from "../src/components/commons/layout";
import { Global } from "@emotion/react";
import { globalStyles } from "../src/commons/styles/globalStyles";
import { RecoilRoot } from "recoil";

function MyApp({ Component, pageProps }: AppProps) {
  return (
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
