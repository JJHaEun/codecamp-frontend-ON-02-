// import "../styles/globals.css";
import { AppProps } from "next/app";
import "antd/dist/antd.css";
import LayOut from "../src/components/commons/layout";
import ApolloSetting from "../src/components/commons/apollo";
import { Global } from "@emotion/react";
import { globalStyles } from "../src/commons/styles/globalStyles";

// ///////////////// 파이어 베이스 ///////////////////////
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAUvcipo_EDv5eDpvyuoKmi1DJKDL6U2lM",
  authDomain: "codecamp-onlinef02.firebaseapp.com",
  projectId: "codecamp-onlinef02",
  storageBucket: "codecamp-onlinef02.appspot.com",
  messagingSenderId: "423141560271",
  appId: "1:423141560271:web:77dfa2ee4b2f6d420e4cba",
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
