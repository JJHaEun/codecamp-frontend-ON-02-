// import "../styles/globals.css";
import { AppProps } from "next/app";
import "antd/dist/antd.css";
import LayOut from "../src/components/commons/layout";
import ApolloSetting from "../src/components/commons/apollo";
import { Global } from "@emotion/react";
import { globalStyles } from "../src/commons/styles/globalStyles";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloSetting>
      <>
        <Global styles={globalStyles} />
        <LayOut>
          <Component {...pageProps} />
        </LayOut>
      </>
    </ApolloSetting>
  );
}

export default MyApp;
