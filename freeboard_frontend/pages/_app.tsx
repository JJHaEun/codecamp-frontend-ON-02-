// import "../styles/globals.css";
import { AppProps } from "next/app";
import "antd/dist/antd.css";
import ApolloSetting from "../src/components/commons/apollo";
import LayOut from "../src/components/commons/layout";
import { Global } from "@emotion/react";
import { globalStyles } from "../src/commons/styles/globalStyles";

// ///////////////// 파이어 베이스 ///////////////////////
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAn3bM2jGRRPGzbbG81mMJJ-Zf2UEB98gY",
  authDomain: "codecamp-online-freeboard.firebaseapp.com",
  projectId: "codecamp-online-freeboard",
  storageBucket: "codecamp-online-freeboard.appspot.com",
  messagingSenderId: "864035349797",
  appId: "1:864035349797:web:1ad722a1315a0ba2b566cc",
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
// //////////////////////////////////////////////

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
