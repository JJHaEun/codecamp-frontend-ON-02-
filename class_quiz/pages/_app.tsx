// import "../styles/globals.css";
import "antd/dist/antd.css";
import React from "react";
import ApolloSetting from "../src/components/commons/apollo";
import { AppProps } from "next/app";
import { Global } from "@emotion/react";
import { globalStyles } from "../src/commons/styles/globalStyles";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { RecoilRoot } from "recoil";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <ApolloSetting>
        <>
          <Global styles={globalStyles} />

          <Component {...pageProps} />
        </>
      </ApolloSetting>
    </RecoilRoot>
  );
}

export default MyApp;
